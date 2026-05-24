import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Videos from './views/Videos';
import About from './views/About';
import Members from './views/Members';
import Community from './views/Community';
import Yaotou from './views/Yaotou';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/community" element={<Community />} />
        <Route path="/yaotou" element={<Yaotou />} />
      </Routes>
    </Router>
  );
}

export default App;
