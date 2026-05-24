import { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';
import videoData from './data/videos.json';

interface Video {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  viewCount: string;
  duration: string;
  category: string;
}

function formatDuration(isoDuration: string) {
  if (!isoDuration) return '';
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return isoDuration;
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  const parts = [];
  if (hours) parts.push(hours.padStart(2, '0'));
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

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  // 排序：從最新到最舊
  const allVideos = useMemo(() => {
    return [...(videoData as Video[])].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, []);

  // 篩選邏輯
  const filteredVideos = useMemo(() => {
    return allVideos.filter(v => 
      v.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allVideos, searchTerm]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  // 無限捲動邏輯
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredVideos.length) {
          setVisibleCount(prev => prev + 20);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredVideos.length]);

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * allVideos.length);
    setSelectedVideo(allVideos[randomIndex]);
  };

  return (
    <div className="app">
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>LNG Timeline</h1>
        <p>Memory of LNG Workshop</p>
      </header>

      <div className="controls">
        <input 
          type="text" 
          placeholder="搜尋影片標題..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(20); // 搜尋時重置捲動數量
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
              <div className="sketch-card video-card" onClick={() => setSelectedVideo(video)}>
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <div className="video-meta">
                    <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                    <span>{formatDuration(video.duration)}</span>
                  </div>
                  <div className="video-meta" style={{ marginTop: '5px' }}>
                    <span style={{ color: 'var(--primary-color)' }}>{video.category === 'Highlight' ? '✨ 精華' : '📼 存檔'}</span>
                    <span>{formatViews(video.viewCount)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div ref={loaderRef} style={{ height: '50px', margin: '20px 0' }}>
          {visibleCount < filteredVideos.length && <p>載入中...</p>}
        </div>
      </div>

      {/* 沉浸式播放器 */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>×</button>
            <div className="video-wrapper">
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <h2>{selectedVideo.title}</h2>
              <p style={{ color: '#ccc', marginTop: '10px' }}>{selectedVideo.description.substring(0, 200)}...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
