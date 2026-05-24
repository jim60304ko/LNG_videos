const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

const API_KEY = process.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UC_z_B_964p7e29_3H_Y7-qw'; // LNG Workshop Channel ID

async function testConnection() {
  if (!API_KEY) {
    console.error('錯誤：找不到 VITE_YOUTUBE_API_KEY，請檢查 .env.local 檔案。');
    return;
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'lngworkshop',
        type: 'channel',
        key: API_KEY,
        maxResults: 1
      }
    });

    if (response.data.items && response.data.items.length > 0) {
      console.log('API_SUCCESS');
      console.log('Found Channel:', response.data.items[0].snippet.channelTitle);
      console.log('Channel ID:', response.data.items[0].snippet.channelId);
    } else {
      console.log('API_EMPTY_RESPONSE');
    }
  } catch (error) {
    console.error('API_FAILED:', error.response ? error.response.data.error.message : error.message);
  }
}

testConnection();
