import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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

  // 隨機挑選 15 部影片用於跑馬燈
  const marqueeVideos = useMemo(() => {
    const shuffled = [...(videoData as Video[])].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
  }, []);

  return (
    <div className="home-container">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      
      <header className="home-header">
        <div className="header-content">
          <h1>影片瀏覽</h1>
        </div>
      </header>

      <main className="home-grid" style={{ maxWidth: '800px', marginBottom: '100px' }}>
        <Link to="/videos/all" className="home-tile">
          <div className="tile-content">
            <span>All</span>
          </div>
        </Link>
        <Link to="/videos/timeline" className="home-tile">
          <div className="tile-content">
            <span>Timeline</span>
          </div>
        </Link>
      </main>

      {/* 影片跑馬燈 */}
      <div className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* 複製兩份以實現無縫滾動 */}
            {[...marqueeVideos, ...marqueeVideos].map((video, index) => (
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
    </div>
  );
}

export default VideoNav;
