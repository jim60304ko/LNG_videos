import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

// Lazy load views
const Home = lazy(() => import('./views/Home'));
const VideoNav = lazy(() => import('./views/VideoNav'));
const Videos = lazy(() => import('./views/Videos'));
const AllVideos = lazy(() => import('./views/AllVideos'));
const About = lazy(() => import('./views/About'));
const Members = lazy(() => import('./views/Members'));
const Community = lazy(() => import('./views/Community'));
const Yaotou = lazy(() => import('./views/Yaotou'));
const Analytics = lazy(() => import('./views/Analytics'));

const Loading = () => (
  <div className="loading-fallback">
    <div className="loader"></div>
    <p>Loading LNG Archive...</p>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoNav />} />
        <Route path="/videos/timeline" element={<Videos />} />
        <Route path="/videos/all" element={<AllVideos />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/community" element={<Community />} />
        <Route path="/yaotou" element={<Yaotou />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Suspense fallback={<Loading />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
