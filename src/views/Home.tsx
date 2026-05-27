import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import lngLogo from '../assets/brand/lng_live.png';
import iconTwitch from '../assets/icons/twitch.png';
import iconFacebook from '../assets/icons/facebook.webp';
import videoData from '../data/videos.json';
import { Video } from '../types/video';
import { VideoCard } from '../components/VideoCard';
import { VideoModal } from '../components/VideoModal';
import { useFavorites } from '../hooks/useFavorites';

const tiles = [
  { id: 'about', title: '關於', path: '/about' },
  { id: 'members', title: '成員', path: '/members' },
  { id: 'videos', title: '影片', path: '/videos' },
  { id: 'analytics', title: '數據', path: '/analytics' },
  { id: 'community', title: '社群', path: '/community' },
  { id: 'yaotou', title: '藥頭', path: '/yaotou' },
  { id: 'soundboard', title: '迷因', path: '/soundboard' },
];

function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const playSecretSound = () => {
    const audio = new Audio('/src/assets/audio/secret.mp3');
    audio.play().catch(() => console.log('Secret audio not found'));
  };
  
  const onThisDayVideos = useMemo(() => {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    
    return (videoData as Video[]).filter(v => {
      const date = new Date(v.publishedAt);
      return date.getMonth() === month && date.getDate() === day;
    }).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-wrapper">
          <div className="header-content">
            <img 
              src={lngLogo} 
              alt="LNG Logo" 
              className="lng-logo-img" 
              onClick={playSecretSound}
              style={{ cursor: 'pointer' }}
              title="Click for a surprise!"
            />
            <h1>LNG Live</h1>
          </div>
          
          <div className="official-links">
            <a href="https://www.facebook.com/LNG.live.official" target="_blank" rel="noopener noreferrer" className="official-btn fb">
              <img src={iconFacebook} alt="FB" />
              Official Facebook
            </a>
            <a href="https://www.twitch.tv/lngliveofficial" target="_blank" rel="noopener noreferrer" className="official-btn twitch">
              <img src={iconTwitch} alt="Twitch" />
              Official Twitch
            </a>
          </div>
        </div>
      </header>

      {onThisDayVideos.length > 0 && (
        <section className="on-this-day">
          <div className="section-header">
            <span className="sparkle">✨</span>
            <h2>歷史上的今天</h2>
            <span className="date-badge">{new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="on-this-day-grid">
            {onThisDayVideos.slice(0, 3).map(video => (
              <div key={video.id} className="on-this-day-item">
                <div className="year-label">{new Date(video.publishedAt).getFullYear()} 年的今天</div>
                <VideoCard 
                  video={video} 
                  onClick={setSelectedVideo}
                  isFavorite={isFavorite(video.id)}
                  onToggleFavorite={(e, id) => {
                    e.stopPropagation();
                    toggleFavorite(id);
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <main className="home-grid">
        {tiles.map((tile) => (
          <Link key={tile.id} to={tile.path} className={`home-tile tile-${tile.id}`}>
            <div className="tile-content">
              <span>{tile.title}</span>
            </div>
          </Link>
        ))}
      </main>

      <VideoModal 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </div>
  );
}

export default Home;
