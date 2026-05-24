const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const API_KEY = process.env.VITE_YOUTUBE_API_KEY;
const OUTPUT_PATH = path.join(__dirname, '../src/data/videos.json');

const CHANNEL_IDS = [
  'UCKngQgSGHd3Hp3nkPs15YSA', // LNG Workshop
  'UCWxwLqgMVhRKx72qyykCBxQ'  // LNG 精華頻道 (lng6121)
];

async function fetchAllVideos(playlistId, channelTitle) {
  let videos = [];
  let nextPageToken = '';

  console.log(`Starting to fetch videos for: ${channelTitle}...`);

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
      thumbnail: item.snippet.thumbnails.high ? item.snippet.thumbnails.high.url : item.snippet.thumbnails.default.url,
      channelTitle: channelTitle
    }));

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
        duration: s.contentDetails.duration
      };
    });

    items.forEach(v => {
      const stats = statsMap[v.id];
      v.viewCount = stats ? stats.viewCount : '0';
      v.duration = stats ? stats.duration : '';
      v.category = v.title.includes('精華') ? 'Highlight' : 'Full';
    });

    videos = videos.concat(items);
    nextPageToken = response.data.nextPageToken;
    console.log(`Fetched ${videos.length} videos from ${channelTitle}...`);

  } while (nextPageToken);

  return videos;
}

async function main() {
  try {
    let allCombinedVideos = [];

    for (const channelId of CHANNEL_IDS) {
      const channelResponse = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
          part: 'snippet,contentDetails',
          id: channelId,
          key: API_KEY
        }
      });

      if (!channelResponse.data.items || channelResponse.data.items.length === 0) {
        console.error(`Could not find channel with ID: ${channelId}`);
        continue;
      }

      const channelTitle = channelResponse.data.items[0].snippet.title;
      const uploadsId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;
      
      const channelVideos = await fetchAllVideos(uploadsId, channelTitle);
      allCombinedVideos = allCombinedVideos.concat(channelVideos);
    }

    // 去重並按日期排序
    const uniqueVideos = Array.from(new Map(allCombinedVideos.map(v => [v.id, v])).values());
    uniqueVideos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(uniqueVideos, null, 2));
    console.log(`Successfully saved ${uniqueVideos.length} unique videos to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error fetching videos:', error.response ? error.response.data.error.message : error.message);
  }
}

main();
