import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './MusicPlayer.css';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container">
      {/* 隱藏的播放器 */}
      <ReactPlayer
        src="https://www.youtube.com/watch?v=xBMGrpvQ5e8"
        playing={isPlaying}
        loop={true}
        volume={0.3}
        width="0"
        height="0"
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      />

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
