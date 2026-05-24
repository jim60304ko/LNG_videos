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

function AllVideos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'Highlight', 'Full'
  const [visibleCount, setVisibleCount] = useState(24);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const allVideos = videoData as Video[];

  const filteredVideos = useMemo(() => {
    return allVideos.filter(v => {
      const matchesSearch = v.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || v.category === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [allVideos, searchTerm, filterType]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredVideos.length) {
          setVisibleCount(prev => prev + 24);
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
        <h1>All Videos</h1>
        <p>Complete Library Grid</p>
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
              setVisibleCount(24);
            }}
          />
          <button className="btn-random" onClick={handleRandom}>🎲 Surprise Me!</button>
        </div>

        <div className="filter-group">
          <button 
            className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => { setFilterType('all'); setVisibleCount(24); }}
          >
            全部顯示
          </button>
          <button 
            className={`filter-btn ${filterType === 'Highlight' ? 'active' : ''}`}
            onClick={() => { setFilterType('Highlight'); setVisibleCount(24); }}
          >
            ✨ 精華
          </button>
          <button 
            className={`filter-btn ${filterType === 'Full' ? 'active' : ''}`}
            onClick={() => { setFilterType('Full'); setVisibleCount(24); }}
          >
            📼 完整存檔
          </button>
        </div>
      </div>

      <main style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '25px', 
        padding: '20px' 
      }}>
        {visibleVideos.map((video) => (
          <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
            <div className="video-thumbnail-container">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            </div>
            <div className="video-info">
              <span className="channel-badge">{video.channelTitle}</span>
              <h3 style={{ height: 'auto', maxHeight: '3em' }}>{video.title}</h3>
              <div className="video-meta">
                <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
      
      <div ref={loaderRef} style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {visibleCount < filteredVideos.length && <div className="loader">載入中...</div>}
        {filteredVideos.length === 0 && <p style={{ color: 'var(--text-muted)' }}>找不到符合條件的影片 😢</p>}
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
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllVideos;
