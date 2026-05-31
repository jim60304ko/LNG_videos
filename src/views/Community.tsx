import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';
import imgKetchupfrog from '../assets/icons/ketchupfrog7788.jpg';

function Community() {
  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      <header>
        <h1>LNG 社群</h1>
        <p>Fan Communities & Groups</p>
      </header>
      <main style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Facebook Group */}
        <div style={{ background: 'var(--card-bg)', borderRadius: '30px', padding: '50px', border: '1px solid rgba(255,215,0,0.2)', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>LNG Live Fansclub株式會社</h2>
          <p style={{ marginBottom: '40px', lineHeight: '1.8' }}>
            這是由粉絲們自發組織的 Facebook 社團，<br />
            也是目前最活躍的 LNG 討論社群。
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
            <span>前往 LNG Live Fansclub株式會社</span>
          </a>
        </div>

        {/* Threads Q&A Account */}
        <div style={{ background: 'var(--card-bg)', borderRadius: '30px', padding: '40px', border: '1px solid rgba(255,215,0,0.2)', display: 'flex', alignItems: 'center', gap: '30px', textAlign: 'left' }} className="threads-card">
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary-color)', flexShrink: 0 }}>
            <img src={imgKetchupfrog} alt="ketchupfrog7788" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Threads 問答帳號</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>@ketchupfrog7788 - 歡迎追蹤獲取更多 LNG 相關問答與資訊。</p>
            <a 
              href="https://www.threads.net/@ketchupfrog7788" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                background: 'white',
                color: 'black',
                padding: '10px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '700',
                transition: 'var(--transition)'
              }}
              className="threads-btn"
            >
              追蹤 Threads
            </a>
          </div>
        </div>

      </main>

      <style>{`
        .community-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(24, 119, 242, 0.3);
        }
        .threads-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }
        .threads-card:hover {
          border-color: var(--primary-color);
          transform: translateY(-5px);
          transition: var(--transition);
        }
        @media (max-width: 600px) {
          .threads-card {
            flex-direction: column;
            text-align: center !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Community;
