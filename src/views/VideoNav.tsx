import { Link } from 'react-router-dom';
import './Home.css'; // 共用主頁的樣式邏輯

function VideoNav() {
  return (
    <div className="home-container">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      <header className="home-header">
        <div className="header-content">
          <h1>影片瀏覽</h1>
        </div>
      </header>

      <main className="home-grid" style={{ maxWidth: '800px' }}>
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
    </div>
  );
}

export default VideoNav;
