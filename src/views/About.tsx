import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

function About() {
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
        <h1>關於 LNG Portal</h1>
        <p>Fan-made Archive & Portal</p>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', background: 'var(--card-bg)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,215,0,0.2)' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>本站初衷</h2>
        <p style={{ marginBottom: '20px' }}>這是一個由粉絲製作的非官方網站，旨在整理 LNG Workshop 漫長歷史中的影片與資訊，方便新老粉絲回味那些爆笑的夜晚。</p>
        
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>關於 LNG Workshop</h2>
        <p style={{ marginBottom: '20px' }}>LNG Workshop 成立於 2010 年代初期，由六嘆、鳥屎、老王等好友組成。以隨性的聊天開台、獨特的幽默感以及與觀眾的互動聞名，是台灣網路直播界的先行者之一。</p>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '40px' }}>※ 本網站所有影片版權均屬原頻道所有。本站僅提供導航與連結功能。</p>
      </main>
    </motion.div>
  );
}

export default About;
