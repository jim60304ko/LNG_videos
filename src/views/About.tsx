import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';
import './About.css';

function About() {
  const milestones = [
    { year: '2009.09', text: '起點：六嘆於 Justin.tv 創立「六嘆嘆白目電視台」，最初以電繪與遊戲直播為主。' },
    { year: '2010', text: '好友鳥屎加入直播，奠定雙人搭檔的基礎。' },
    { year: '2011.06', text: '創立「薩爾納加洞穴美術館 (XNCart)」粉絲專頁。' },
    { year: '2011.09', text: '邀請嘉賓老王後效果極佳，正式湊齊 L-N-G 核心成員，LNG Radio 成立。' },
    { year: '2012', text: '更名為「LNG Workshop」，隨後 Leggy、八毛、小六等成員陸續加入。' },
    { year: '2018.02', text: '更名為「LNG Live」，確立每月固定直播一次的傳統，並開設精華頻道。' },
  ];

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

      <main className="about-container">
        <section className="about-section">
          <h2><span>✨</span> 本站初衷</h2>
          <p>這是一個由粉絲製作的非官方網站，旨在整理 LNG Workshop 漫長歷史中的影片與資訊。我們希望透過這個門戶，讓老粉絲能輕鬆回味那些爆笑的夜晚，也讓新粉絲能快速了解這群陪伴我們多年的好友。</p>
        </section>

        <section className="about-section">
          <h2><span>🎙️</span> 團隊故事</h2>
          <p>LNG 的故事最早可追溯至 2009 年。團隊以隨性的雜談開台、即興的幽默感以及與觀眾如朋友般的互動聞名，是台灣網路直播界的先行者之一。核心成員包括六嘆、鳥屎、老王，以及後來陸續加入的 Leggy、八毛、小六。</p>
          <p>目前團隊保持著每個月開台直播一次的傳統，每次直播的精華與完整存檔都是粉絲們珍貴的集體回憶。</p>
        </section>

        <section className="about-section">
          <h2><span>📅</span> 歷史里程碑</h2>
          <div className="milestone-list">
            {milestones.map((m, index) => (
              <div key={index} className="milestone-item">
                <span className="milestone-year">{m.year}</span>
                <span className="milestone-text">{m.text}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="about-footer">
          <a 
            href="https://zh.wikipedia.org/zh-tw/LNG_Live" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="source-link"
          >
            📖 參考資料：LNG Live - 維基百科
          </a>
          <p className="disclaimer">※ 本網站為非官方粉絲專案。站內所有影片、圖像之版權均屬於 LNG Workshop 團隊及相關創作者所有。</p>
        </footer>
      </main>
    </motion.div>
  );
}

export default About;
