import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

// 匯入藥頭頭像
import imgSunzusa from '../assets/clippers/Sunzusa.jpg';
import imgTarzanwawa from '../assets/clippers/Tarzanwawa.jpg';
import imgVegetableyee from '../assets/clippers/vegetableyee.jpg';
import imgZydpingguo from '../assets/clippers/zydpingguo.jpg';
import imgChenchung0209 from '../assets/clippers/chenchung0209.jpg';

const clippers = [
  { name: '玉子燒', url: 'https://youtube.com/@sunzusa_', img: imgSunzusa },
  { name: '泰山娃娃', url: 'https://youtube.com/@tarzanwawa', img: imgTarzanwawa },
  { name: '椰菜 vegetableyee', url: 'https://youtube.com/@a455106z', img: imgVegetableyee },
  { name: '嘎特', url: 'https://youtube.com/@chenchung0209', img: imgChenchung0209 },
  { name: '自由的蘋果', url: 'https://youtube.com/@zydpingguo', img: imgZydpingguo }
];

function Yaotou() {
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
        <h1>藥頭專區</h1>
        <p>Featured Clippers & Creators</p>
      </header>
      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', padding: '20px' }}>
          {clippers.map(clipper => (
            <a 
              key={clipper.name} 
              href={clipper.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                textDecoration: 'none',
                background: 'var(--card-bg)', 
                borderRadius: '30px', 
                padding: '40px 20px', 
                border: '1px solid rgba(255,215,0,0.1)',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
              className="clipper-card"
            >
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                marginBottom: '20px',
                border: '3px solid var(--primary-color)',
                boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
              }}>
                <img src={clipper.img} alt={clipper.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', marginBottom: '10px' }}>{clipper.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>前往 YouTube 頻道</p>
            </a>
          ))}
        </div>
      </main>

      <style>{`
        .clipper-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.15);
          background: var(--card-hover-bg);
        }
      `}</style>
    </motion.div>
  );
}

export default Yaotou;
