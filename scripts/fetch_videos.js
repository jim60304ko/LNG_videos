const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const API_KEY = process.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCKngQgSGHd3Hp3nkPs15YSA'; // 正確的 LNG Workshop Channel ID
const OUTPUT_PATH = path.join(__dirname, '../src/data/videos.json');

async function getUploadsPlaylistId() {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
    params: {
      part: 'contentDetails',
      id: CHANNEL_ID,
      key: API_KEY
    }
  });
  return response.data.items[0].contentDetails.relatedPlaylists.uploads;
}

async function fetchAllVideos(playlistId) {
  let videos = [];
  let nextPageToken = '';

  console.log('Starting to fetch videos...');

  do {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 50,
        pageToken: nextPageToken,
        key: API_KEY
      }
    });

    const items = response.data.items.map(item => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high ? item.snippet.thumbnails.high.url : item.snippet.thumbnails.default.url
    }));

    // 為每組 50 部影片獲取額外資訊 (點閱率, 時長)
    const videoIds = items.map(v => v.id).join(',');
    const statsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'statistics,contentDetails',
        id: videoIds,
        key: API_KEY
      }
    });

    const statsMap = {};
    statsResponse.data.items.forEach(s => {
      statsMap[s.id] = {
        viewCount: s.statistics.viewCount,
        duration: s.contentDetails.duration // ISO 8601 格式
      };
    });

    items.forEach(v => {
      const stats = statsMap[v.id];
      v.viewCount = stats ? stats.viewCount : '0';
      v.duration = stats ? stats.duration : '';
      // 自動分類邏輯
      v.category = v.title.includes('精華') ? 'Highlight' : 'Full';
    });

    videos = videos.concat(items);
    nextPageToken = response.data.nextPageToken;
    console.log(`Fetched ${videos.length} videos so far...`);

  } while (nextPageToken);

  return videos;
}

async function main() {
  try {
    const uploadsId = await getUploadsPlaylistId();
    const allVideos = await fetchAllVideos(uploadsId);

    // 確保目錄存在
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(allVideos, null, 2));
    console.log(`Successfully saved ${allVideos.length} videos to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error fetching videos:', error.response ? error.response.data.error.message : error.message);
  }
}

main();
