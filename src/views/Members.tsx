import { Link } from 'react-router-dom';
import '../App.css';

// 匯入頭像
import img6tan from '../data/img/6tan.jpg';
import imgNiaws from '../data/img/niaws.jpg';
import imgWannasinging from '../data/img/wannasinging.png';
import imgLeggy from '../data/img/leggy.jpg';
import imgMabushii from '../data/img/mabushii.jpg';
import imgBamow from '../data/img/bamow.jpg';

const members = [
  {
    name: '六嘆 (6tan)',
    img: img6tan,
    links: {
      twitch: 'https://www.twitch.tv/sixwong',
      youtube: 'https://youtube.com/@6tanchannel',
      facebook: 'https://www.facebook.com/6tantan',
      instagram: 'https://www.instagram.com/6tan'
    }
  },
  {
    name: '鳥屎 (Niaws)',
    img: imgNiaws,
    links: {
      twitch: 'https://www.twitch.tv/scspple7545',
      youtube: 'https://youtube.com/@niaws-5352',
      facebook: 'https://www.facebook.com/LNGniaws/',
      instagram: 'https://www.instagram.com/scspple7545/'
    }
  },
  {
    name: '老王 (WannaSinging)',
    img: imgWannasinging,
    links: {
      twitch: 'https://www.twitch.tv/wannasinging',
      youtube: 'https://www.youtube.com/@wannasinging',
      facebook: 'https://www.facebook.com/WannaSinging',
      instagram: 'https://www.instagram.com/wannasinging_retry/'
    }
  },
  {
    name: 'Leggy',
    img: imgLeggy,
    links: {
      twitch: 'https://www.twitch.tv/rekileggy',
      youtube: 'https://youtube.com/@reki305',
      facebook: 'https://www.facebook.com/LeggyReki/',
      instagram: 'https://www.instagram.com/ym78305/'
    }
  },
  {
    name: '小六 (Mabushii)',
    img: imgMabushii,
    links: {
      twitch: 'https://www.twitch.tv/mabushii0611',
      youtube: 'https://www.youtube.com/@wildboy0611',
      facebook: 'https://www.facebook.com/Mabushii0611/',
      instagram: 'https://www.instagram.com/mabushii0611/'
    }
  },
  {
    name: '八毛 (Bamow)',
    img: imgBamow,
    links: {
      twitch: 'https://www.twitch.tv/bamow',
      youtube: 'https://www.youtube.com/@Bamowmow',
      facebook: 'https://www.facebook.com/LngBamow/',
      instagram: 'https://www.instagram.com/bamowmow/'
    }
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
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              {Object.entries(member.links).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', textTransform: 'capitalize', fontSize: '0.9rem', border: '1px solid #333', padding: '4px 10px', borderRadius: '15px', transition: 'var(--transition)' }} className="member-link">
                  {platform}
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
        }
      `}</style>
    </div>
  );
}

export default Members;
