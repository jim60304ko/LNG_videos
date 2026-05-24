import { Link } from 'react-router-dom';
import '../App.css';

function Yaotou() {
  return (
    <div className="app">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      <header>
        <h1>藥頭專區</h1>
        <p>Featured Clippers & Creators</p>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ background: 'var(--card-bg)', borderRadius: '30px', padding: '50px', border: '1px solid rgba(255,215,0,0.2)' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>優質剪輯師</h2>
          <p style={{ marginBottom: '30px' }}>這裡是為那些長期為 LNG 製作精華影片的藥頭們準備的專區。</p>
          <div style={{ fontSize: '3rem', opacity: 0.3 }}>🚧 等待資料中...</div>
        </div>
      </main>
    </div>
  );
}

export default Yaotou;
