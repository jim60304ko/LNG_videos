import { Link } from 'react-router-dom';
import '../App.css';

// 匯入頭像
import img6tan from '../data/img/6tan.jpg';
import imgNiaws from '../data/img/niaws.jpg';
import imgWannasinging from '../data/img/wannasinging.png';
import imgLeggy from '../data/img/leggy.jpg';
import imgMabushii from '../data/img/mabushii.jpg';
import imgBamow from '../data/img/bamow.jpg';

// 匯入 Icon
import iconTwitch from '../data/img/icon/twitch.png';
import iconYoutube from '../data/img/icon/youtube.webp';
import iconFacebook from '../data/img/icon/facebook.webp';
import iconInstagram from '../data/img/icon/ig.webp';
import iconX from '../data/img/icon/x.webp';

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
    name: '小六 (Mabushii)',
    img: imgMabushii,
    socials: [
      { platform: 'Twitch', url: 'https://www.twitch.tv/mabushii0611' },
      { platform: 'YouTube', url: 'https://youtube.com/@wildboy0611' },
      { platform: 'Facebook', url: 'https://www.facebook.com/Mabushii0611/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/mabushii0611/' }
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
  }
];

function Members() {
  return (
    <div className="app">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      <header>
        <h1>LNG 成員</h1>
        <p>The Core Workshop Members</p>
      </header>
      
      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '20px' }}>
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
      `}</style>
    </div>
  );
}

export default Members;
