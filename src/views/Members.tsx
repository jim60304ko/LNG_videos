import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

// 匯入頭像
import img6tan from '../assets/avatars/6tan.jpg';
import imgNiaws from '../assets/avatars/niaws.jpg';
import imgWannasinging from '../assets/avatars/wannasinging.png';
import imgLeggy from '../assets/avatars/leggy.jpg';
import imgMabushii from '../assets/avatars/mabushii.jpg';
import imgBamow from '../assets/avatars/bamow.jpg';

// 匯入 Icon
import iconTwitch from '../assets/icons/twitch.png';
import iconYoutube from '../assets/icons/youtube.webp';
import iconFacebook from '../assets/icons/facebook.webp';
import iconInstagram from '../assets/icons/ig.webp';
import iconX from '../assets/icons/x.webp';

const platformIcons: { [key: string]: string } = {
  'Twitch': iconTwitch,
  'YouTube': iconYoutube,
  'YT 生活頻道': iconYoutube,
  'YT 遊戲精華': iconYoutube,
  'YT VOD頻道': iconYoutube,
  'Facebook': iconFacebook,
  'Instagram': iconInstagram,
  'X': iconX
};

// 按照指定順序排列：六嘆、鳥屎、老王、Leggy、八毛、小六
const members = [
  {
    name: '六嘆 (6tan)',
    img: img6tan,
    socials: [
      { platform: 'Twitch', url: 'https://www.twitch.tv/sixwong' },
      { platform: 'YT 生活頻道', url: 'https://youtube.com/@sixwong' },
      { platform: 'YT 遊戲精華', url: 'https://youtube.com/@6tanchannel' },
      { platform: 'YT VOD頻道', url: 'https://youtube.com/@6tanvod' },
      { platform: 'Facebook', url: 'https://www.facebook.com/6tantan' },
      { platform: 'Instagram', url: 'https://www.instagram.com/6tan' },
      { platform: 'X', url: 'https://x.com/6tan' }
    ]
  },
  {
    name: '鳥屎 (Niaws)',
    img: imgNiaws,
    socials: [
      { platform: 'Twitch', url: 'https://www.twitch.tv/scspple7545' },
      { platform: 'YouTube', url: 'https://youtube.com/@niaws-5352' },
      { platform: 'Facebook', url: 'https://www.facebook.com/LNGniaws/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/scspple7545/' }
    ]
  },
  {
    name: '老王 (WannaSinging)',
    img: imgWannasinging,
    socials: [
      { platform: 'Twitch', url: 'https://www.twitch.tv/wannasinging' },
      { platform: 'YouTube', url: 'https://www.youtube.com/@wannasinging' },
      { platform: 'Facebook', url: 'https://www.facebook.com/WannaSinging' },
      { platform: 'Instagram', url: 'https://www.instagram.com/wannasinging_retry/' }
    ]
  },
  {
    name: 'Leggy',
    img: imgLeggy,
    socials: [
      { platform: 'Twitch', url: 'https://www.twitch.tv/rekileggy' },
      { platform: 'YouTube', url: 'https://youtube.com/@reki305' },
      { platform: 'Facebook', url: 'https://www.facebook.com/LeggyReki/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/ym78305/' }
    ]
  },
  {
    name: '八毛 (Bamow)',
    img: imgBamow,
    socials: [
      { platform: 'Twitch', url: 'https://www.twitch.tv/bamow' },
      { platform: 'YouTube', url: 'https://www.youtube.com/@Bamowmow' },
      { platform: 'Facebook', url: 'https://www.facebook.com/LngBamow/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/bamowmow/' }
    ]
  },
  {
    name: '小六 (Mabushii)',
    img: imgMabushii,
    socials: [
      { platform: 'Twitch', url: 'https://www.twitch.tv/mabushii0611' },
      { platform: 'YouTube', url: 'https://youtube.com/@wildboy0611' },
      { platform: 'Facebook', url: 'https://www.facebook.com/Mabushii0611/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/mabushii0611/' }
    ]
  }
];

function Members() {
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
        <h1>LNG 成員</h1>
        <p>The Core Workshop Members</p>
      </header>
      
      <main style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '30px', 
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }} className="members-grid">
        {members.map(member => (
          <div key={member.name} style={{ background: 'var(--card-bg)', borderRadius: '30px', padding: '30px', border: '1px solid rgba(255,215,0,0.1)', textAlign: 'center', transition: 'var(--transition)' }} className="member-card">
            <div style={{ width: '150px', height: '150px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary-color)', boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' }}>
              <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>{member.name}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {member.socials.map(social => (
                <a 
                  key={social.url} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: 'var(--text-muted)', 
                    textDecoration: 'none', 
                    fontSize: '0.85rem', 
                    border: '1px solid #333', 
                    padding: '8px 14px', 
                    borderRadius: '20px', 
                    transition: 'var(--transition)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }} 
                  className="member-link"
                >
                  {platformIcons[social.platform] && (
                    <img 
                      src={platformIcons[social.platform]} 
                      alt={social.platform} 
                      style={{ width: '18px', height: '18px', objectFit: 'contain' }} 
                    />
                  )}
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>

      <style>{`
        .member-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.1);
        }
        .member-link:hover {
          color: var(--primary-color);
          border-color: var(--primary-color);
          background: rgba(255, 215, 0, 0.05);
          transform: scale(1.05);
        }
        @media (max-width: 1024px) {
          .members-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .members-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Members;
