import { Link } from 'react-router-dom';
import '../App.css';

function Community() {
  return (
    <div className="app">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      <header>
        <h1>LNG 社群</h1>
        <p>Fan Communities & Discord</p>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ background: 'var(--card-bg)', borderRadius: '30px', padding: '50px', border: '1px solid rgba(255,215,0,0.2)' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>粉絲自創社群</h2>
          <p style={{ marginBottom: '30px' }}>這裡將會放一些由粉絲自發組織的社群連結（如 Discord, Facebook 社團等）。</p>
          <div style={{ fontSize: '3rem', opacity: 0.3 }}>🚧 建設中...</div>
        </div>
      </main>
    </div>
  );
}

export default Community;
