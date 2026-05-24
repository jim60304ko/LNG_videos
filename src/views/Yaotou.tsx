import { Link } from 'react-router-dom';
import '../App.css';

const clippers = [
  { name: '內褲', url: 'https://youtube.com/@sunzusa_' },
  { name: '泰山阿華', url: 'https://youtube.com/@tarzanwawa' },
  { name: '李', url: 'https://youtube.com/@a455106z' },
  { name: '陳重', url: 'https://youtube.com/@chenchung0209' },
  { name: '自由的蘋果', url: 'https://youtube.com/@zydpingguo' }
];

function Yaotou() {
  return (
    <div className="app">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      <header>
        <h1>藥頭專區</h1>
        <p>Featured Clippers & Creators</p>
      </header>
      <main style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {clippers.map(clipper => (
            <a 
              key={clipper.name} 
              href={clipper.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                textDecoration: 'none',
                background: 'var(--card-bg)', 
                borderRadius: '20px', 
                padding: '30px', 
                border: '1px solid rgba(255,215,0,0.1)',
                transition: 'var(--transition)',
                display: 'block'
              }}
              className="clipper-card"
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💊</div>
              <h2 style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>{clipper.name}</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px', fontSize: '0.9rem' }}>前往 YouTube 頻道</p>
            </a>
          ))}
        </div>
      </main>

      <style>{`
        .clipper-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          box-shadow: 0 10px 20px rgba(255, 215, 0, 0.1);
          background: var(--card-hover-bg);
        }
      `}</style>
    </div>
  );
}

export default Yaotou;
