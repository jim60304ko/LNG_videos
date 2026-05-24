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
  const [filterType, setFilterType] = useState('all'); // 'all', 'Highlight', 'Full'
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const allVideos = videoData as Video[];

  // 篩選邏輯：同時考慮搜尋字串與分類標籤
  const filteredVideos = useMemo(() => {
    return allVideos.filter(v => {
      const matchesSearch = v.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || v.category === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [allVideos, searchTerm, filterType]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  // 無限捲動
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
    const randomIndex = Math.floor(Math.random() * filteredVideos.length);
    if (filteredVideos.length > 0) {
      setSelectedVideo(filteredVideos[randomIndex]);
    }
  };

  return (
    <div className="app">
      <Link to="/videos" className="back-home-btn">⬅ 影片選單</Link>
      
      <header>
        <h1>Timeline</h1>
        <p>The Complete Archive of LNG Workshop</p>
        <p className="video-count">目前顯示: {filteredVideos.length} 部影片</p>
      </header>

      <div className="controls">
        <div className="controls-top">
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
        
        <div className="filter-group">
          <button 
            className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => { setFilterType('all'); setVisibleCount(20); }}
          >
            全部顯示
          </button>
          <button 
            className={`filter-btn ${filterType === 'Highlight' ? 'active' : ''}`}
            onClick={() => { setFilterType('Highlight'); setVisibleCount(20); }}
          >
            ✨ 精華
          </button>
          <button 
            className={`filter-btn ${filterType === 'Full' ? 'active' : ''}`}
            onClick={() => { setFilterType('Full'); setVisibleCount(20); }}
          >
            實際存檔
          </button>
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {visibleVideos.map((video, index) => {
          const date = new Date(video.publishedAt);
          const currentYear = date.getFullYear();
          const currentMonth = date.getMonth() + 1;
          const displayDate = `${currentYear}/${currentMonth}`;
          
          // 判斷是否為新的一年（用於高亮）
          const prevYear = index > 0 ? new Date(visibleVideos[index - 1].publishedAt).getFullYear() : null;
          const isNewYear = currentYear !== prevYear;

          return (
            <div key={video.id} className="timeline-item">
              <div className={`timeline-dot ${isNewYear ? 'active-year' : ''}`}>
                <span>{displayDate}</span>
              </div>
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
                      <span>{date.toLocaleDateString()}</span>
                      <span>{formatViews(video.viewCount)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <div ref={loaderRef} style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {visibleCount < filteredVideos.length && <div className="loader">載入中...</div>}
          {filteredVideos.length === 0 && <p style={{ color: 'var(--text-muted)' }}>找不到符合條件的影片 😢</p>}
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
