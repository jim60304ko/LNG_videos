import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css'; 
import './VideoNav.css'; 
import videoData from '../data/videos.json';

interface Video {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  viewCount: string;
  duration: string;
  category: string;
  channelTitle: string;
}

function VideoNav() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // 更好的方式：使用 Lazy Initializer 在初始渲染時洗牌
  const [randomVideos] = useState<Video[]>(() => {
    const shuffled = [...(videoData as Video[])].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
  });

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      
      <main className="home-grid" style={{ maxWidth: '800px' }}>
        <Link to="/videos/all" className="home-tile">
          <div className="tile-content">
            <span>所有影片</span>
          </div>
        </Link>
        <Link to="/videos/timeline" className="home-tile">
          <div className="tile-content">
            <span>時間軸</span>
          </div>
        </Link>
      </main>

      {/* 影片跑馬燈 */}
      <div className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* 複製兩份以實現無縫滾動 */}
            {randomVideos.length > 0 && [...randomVideos, ...randomVideos].map((video, index) => (
              <div 
                key={`${video.id}-${index}`} 
                className="marquee-item"
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.thumbnail} alt={video.title} />
                <div className="marquee-item-overlay">
                  <span>{video.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 沉浸式播放器 */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
          <button className="close-btn" onClick={() => setSelectedVideo(null)}>&times;</button>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="video-wrapper">
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="modal-details">
              <span className="channel-badge">{selectedVideo.channelTitle}</span>
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default VideoNav;
