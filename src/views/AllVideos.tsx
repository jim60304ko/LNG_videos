import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import videoData from '../data/videos.json';
import { Video } from '../types/video';
import { VideoCard } from '../components/VideoCard';
import { VideoModal } from '../components/VideoModal';
import { useFavorites } from '../hooks/useFavorites';

function AllVideos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const allVideos = videoData as Video[];

  const filteredVideos = useMemo(() => {
    return allVideos.filter(v => {
      const matchesSearch = v.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || v.category === filterType;
      const matchesFavorites = !showFavoritesOnly || isFavorite(v.id);
      return matchesSearch && matchesFilter && matchesFavorites;
    });
  }, [allVideos, searchTerm, filterType, showFavoritesOnly, isFavorite]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Link to="/videos" className="back-home-btn">⬅ 影片選單</Link>
      
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        title="回到頂端"
      >
        ↑
      </button>

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
            className={`filter-btn ${filterType === 'all' && !showFavoritesOnly ? 'active' : ''}`}
            onClick={() => { setFilterType('all'); setShowFavoritesOnly(false); setVisibleCount(24); }}
          >
            全部顯示
          </button>
          <button 
            className={`filter-btn ${filterType === 'Highlight' ? 'active' : ''}`}
            onClick={() => { setFilterType('Highlight'); setShowFavoritesOnly(false); setVisibleCount(24); }}
          >
            ✨ 精華
          </button>
          <button 
            className={`filter-btn ${filterType === 'Full' ? 'active' : ''}`}
            onClick={() => { setFilterType('Full'); setShowFavoritesOnly(false); setVisibleCount(24); }}
          >
            📼 完整存檔
          </button>
          <button 
            className={`filter-btn ${showFavoritesOnly ? 'active' : ''}`}
            onClick={() => { setShowFavoritesOnly(true); setFilterType('all'); setVisibleCount(24); }}
            style={{ color: showFavoritesOnly ? 'black' : '#ff4d4d' }}
          >
            ❤️ 我的收藏
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
          <VideoCard 
            key={video.id} 
            video={video} 
            onClick={setSelectedVideo}
            isFavorite={isFavorite(video.id)}
            onToggleFavorite={(e, id) => {
              e.stopPropagation();
              toggleFavorite(id);
            }}
          />
        ))}
      </main>
      
      <div ref={loaderRef} style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {visibleCount < filteredVideos.length && <div className="loader">載入中...</div>}
        {filteredVideos.length === 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>{showFavoritesOnly ? '尚未收藏任何影片 ❤️' : '找不到符合條件的影片 😢'}</p>
            {showFavoritesOnly && (
              <button 
                className="filter-btn" 
                style={{ marginTop: '20px' }}
                onClick={() => setShowFavoritesOnly(false)}
              >
                去逛逛影片
              </button>
            )}
          </div>
        )}
      </div>

      <VideoModal 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </div>
  );
}

export default AllVideos;
