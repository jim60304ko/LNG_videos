import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './MusicPlayer.css';

const MusicPlayer: React.FC = () => {
  // 初始設為 false，等第一次互動後再開啟，以符合瀏覽器自動播放政策
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setIsPlaying(true);
      // 移除監聽器以節省效能
      window.removeEventListener('mousedown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('mousedown', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('mousedown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container">
      {/* 隱藏的播放器：將其移出可視區域以確保能正常播放且不被看見 */}
      <div style={{ position: 'fixed', top: '-1000px', left: '-1000px', width: '640px', height: '360px', pointerEvents: 'none' }}>
        <ReactPlayer
          src="https://www.youtube.com/watch?v=xBMGrpvQ5e8"
          playing={isPlaying}
          loop={true}
          volume={0.3}
          width="100%"
          height="100%"
        />
      </div>

      {/* 懸浮控制按鈕 */}
      <button 
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={togglePlay}
        title={isPlaying ? '暫停 BGM' : '播放 BGM'}
      >
        <div className="music-icon-wrapper">
          {isPlaying ? (
            <div className="music-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <span className="play-icon">🎵</span>
          )}
        </div>
        <span className="music-tooltip">{isPlaying ? 'BGM ON' : 'BGM OFF'}</span>
      </button>
    </div>
  );
};

export default MusicPlayer;
