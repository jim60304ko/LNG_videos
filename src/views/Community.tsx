import { Link } from 'react-router-dom';
import '../App.css';

function Community() {
  return (
    <div className="app">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      <header>
        <h1>LNG 社群</h1>
        <p>Fan Communities & Groups</p>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ background: 'var(--card-bg)', borderRadius: '30px', padding: '50px', border: '1px solid rgba(255,215,0,0.2)' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>LNG 粉絲自創社群</h2>
          <p style={{ marginBottom: '40px', lineHeight: '1.8' }}>
            這是由粉絲們自發組織的 Facebook 社團，<br />
            是目前最活躍的 LNG 討論社群之一。
          </p>
          
          <a 
            href="https://www.facebook.com/groups/757403001000330" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#1877F2',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.1rem',
              transition: 'var(--transition)'
            }}
            className="community-btn"
          >
            <span>加入 Facebook 粉絲社團</span>
          </a>
        </div>
      </main>

      <style>{`
        .community-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(24, 119, 242, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Community;
