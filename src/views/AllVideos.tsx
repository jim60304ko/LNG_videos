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
  const [visibleCount, setVisibleCount] = useState(24); // 網格佈局適合 3 或 4 的倍數
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
          setVisibleCount(prev => prev + 24);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredVideos.length]);

  return (
    <div className="app">
      <Link to="/videos" className="back-home-btn">⬅ 影片選單</Link>
      
      <header>
        <h1>All Videos</h1>
        <p>Complete Library Grid</p>
      </header>

      <div className="controls">
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
