import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import VideoNav from './views/VideoNav';
import Videos from './views/Videos';
import AllVideos from './views/AllVideos';
import About from './views/About';
import Members from './views/Members';
import Community from './views/Community';
import Yaotou from './views/Yaotou';
import Analytics from './views/Analytics';
import Soundboard from './views/Soundboard';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoNav />} />
        <Route path="/videos/timeline" element={<Videos />} />
        <Route path="/videos/all" element={<AllVideos />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/community" element={<Community />} />
        <Route path="/yaotou" element={<Yaotou />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/soundboard" element={<Soundboard />} />
      </Routes>
    </Router>
  );
}

export default App;
