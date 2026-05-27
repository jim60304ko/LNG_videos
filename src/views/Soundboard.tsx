import { Link } from 'react-router-dom';
import './Soundboard.css';

const sounds = [
  { id: 'niaws_laugh', title: '鳥屎大笑', file: 'niaws_laugh.mp3' },
  { id: '6tan_omg', title: '六嘆 OMG', file: '6tan_omg.mp3' },
  { id: 'bamow_angry', title: '八毛生氣', file: 'bamow_angry.mp3' },
  { id: 'leggy_cute', title: 'Leggy 賣萌', file: 'leggy_cute.mp3' },
  { id: 'wannasinging_fail', title: '老王翻車', file: 'wannasinging_fail.mp3' },
  { id: 'mabushii_wow', title: '小六 Wow', file: 'mabushii_wow.mp3' },
  { id: 'lng_intro', title: 'LNG 開場', file: 'lng_intro.mp3' },
  { id: 'clapper', title: '拍手', file: 'clapper.mp3' },
  { id: 'yaotou_edit', title: '藥頭剪輯', file: 'yaotou_edit.mp3' },
];

function Soundboard() {
  const playSound = (fileName: string) => {
    const audio = new Audio(`/src/assets/audio/${fileName}`);
    audio.play().catch(e => {
      console.error('Audio play failed:', e);
      alert('音效檔案尚未準備好，請將 .mp3 放入 src/assets/audio/ 資料夾中！');
    });
  };

  return (
    <div className="app soundboard-page">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      
      <header>
        <h1>語音迷因板</h1>
        <p>Classic LNG Sounds & Memes</p>
      </header>

      <main className="sound-grid">
        {sounds.map(sound => (
          <button 
            key={sound.id} 
            className="sound-pad"
            onClick={() => playSound(sound.file)}
          >
            <div className="pad-content">
              <span className="pad-icon">🔊</span>
              <span className="pad-title">{sound.title}</span>
            </div>
            <div className="pad-glow"></div>
          </button>
        ))}
      </main>

      <div className="instruction-card">
        <h3>💡 如何使用？</h3>
        <p>點擊上方按鈕即可播放經典音效。目前為功能演示，請確保 <code>src/assets/audio/</code> 資料夾中存有對應的檔案。</p>
      </div>
    </div>
  );
}

export default Soundboard;
