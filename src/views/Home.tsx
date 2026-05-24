import { Link } from 'react-router-dom';
import './Home.css';

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
        <div className="header-content">
          <div className="lng-logo-placeholder">LNG</div> 
          <h1>LNG Live</h1>
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
