import { Link } from 'react-router-dom';
import '../App.css';

const members = [
  {
    name: '六嘆 (6tan)',
    links: {
      twitch: 'https://www.twitch.tv/sixwong',
      youtube: 'https://youtube.com/@6tanchannel',
      facebook: 'https://www.facebook.com/6tantan',
      instagram: 'https://www.instagram.com/6tan'
    }
  },
  {
    name: '鳥屎 (Niaws)',
    links: {
      twitch: 'https://www.twitch.tv/scspple7545',
      youtube: 'https://youtube.com/@niaws-5352',
      facebook: 'https://www.facebook.com/LNGniaws/',
      instagram: 'https://www.instagram.com/scspple7545/'
    }
  },
  {
    name: '老王 (WannaSinging)',
    links: {
      twitch: 'https://www.twitch.tv/wannasinging',
      youtube: 'https://www.youtube.com/@wannasinging',
      facebook: 'https://www.facebook.com/WannaSinging',
      instagram: 'https://www.instagram.com/wannasinging_retry/'
    }
  },
  {
    name: 'Leggy',
    links: {
      twitch: 'https://www.twitch.tv/rekileggy',
      youtube: 'https://youtube.com/@reki305',
      facebook: 'https://www.facebook.com/LeggyReki/',
      instagram: 'https://www.instagram.com/ym78305/'
    }
  },
  {
    name: '小六 (Mabushii)',
    links: {
      twitch: 'https://www.twitch.tv/mabushii0611',
      youtube: 'https://www.youtube.com/@wildboy0611',
      facebook: 'https://www.facebook.com/Mabushii0611/',
      instagram: 'https://www.instagram.com/mabushii0611/'
    }
  },
  {
    name: '八毛 (Bamow)',
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
          <div key={member.name} style={{ background: 'var(--card-bg)', borderRadius: '30px', padding: '30px', border: '1px solid rgba(255,215,0,0.1)', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', background: '#333', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👤</div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>{member.name}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              {Object.entries(member.links).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', textTransform: 'capitalize', fontSize: '0.9rem' }}>
                  {platform}
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Members;
