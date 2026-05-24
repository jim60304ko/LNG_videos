import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
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

function formatDuration(isoDuration: string) {
  if (!isoDuration) return '';
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return isoDuration;
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  const parts = [];
  if (hours) parts.push(hours.padStart(1, '0'));
  parts.push((minutes || '0').padStart(2, '0'));
  parts.push((seconds || '0').padStart(2, '0'));

  return parts.join(':');
}

function formatViews(views: string) {
  const num = parseInt(views);
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '萬次觀看';
  }
  return num + '次觀看';
}

function Videos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const allVideos = videoData as Video[];

  const filteredVideos = useMemo(() => {
    return allVideos.filter(v => 
      v.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allVideos, searchTerm]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredVideos.length) {
          setVisibleCount(prev => prev + 20);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredVideos.length]);

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * allVideos.length);
    setSelectedVideo(allVideos[randomIndex]);
  };

  return (
    <div className="app">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      
      <header>
        <h1>LNG Timeline</h1>
        <p>The Complete Archive of LNG Workshop</p>
      </header>

      <div className="controls">
        <input 
          type="text" 
          placeholder="搜尋影片..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(20);
          }}
        />
        <button className="btn-random" onClick={handleRandom}>🎲 Surprise Me!</button>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {visibleVideos.map((video) => (
          <div key={video.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="video-card" onClick={() => setSelectedVideo(video)}>
                <div className="video-thumbnail-container">
                  <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                  <div className="video-duration-tag">{formatDuration(video.duration)}</div>
                </div>
                <div className="video-info">
                  <span className="channel-badge">{video.channelTitle}</span>
                  <h3>{video.title}</h3>
                  <div className="video-meta">
                    <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                    <span>{formatViews(video.viewCount)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div ref={loaderRef} style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {visibleCount < filteredVideos.length && <div className="loader">載入中...</div>}
        </div>
      </div>

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

export default Videos;
