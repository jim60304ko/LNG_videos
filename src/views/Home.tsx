import { Link } from 'react-router-dom';
import './Home.css';
import lngLogo from '../assets/brand/lng_live.png';
import iconTwitch from '../assets/icons/twitch.png';
import iconFacebook from '../assets/icons/facebook.webp';

const tiles = [
  { id: 'about', title: '關於', path: '/about' },
  { id: 'members', title: '成員', path: '/members' },
  { id: 'videos', title: '影片', path: '/videos' },
  { id: 'community', title: '社群', path: '/community' },
  { id: 'yaotou', title: '藥頭', path: '/yaotou' },
];

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-wrapper">
          <div className="header-content">
            <img src={lngLogo} alt="LNG Logo" className="lng-logo-img" />
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

      <main className="home-grid">
        {tiles.map((tile) => (
          <Link key={tile.id} to={tile.path} className={`home-tile tile-${tile.id}`}>
            <div className="tile-content">
              <span>{tile.title}</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Home;
