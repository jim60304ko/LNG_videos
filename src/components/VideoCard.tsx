import type { Video } from '../types/video';
import './VideoCard.css';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  showDuration?: boolean;
}

function formatDuration(isoDuration: string) {
  if (!isoDuration) return '';
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return isoDuration;
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  const parts = [];
  if (hours) parts.push(hours.padStart(1, '0'));
  parts.push((minutes || '0').padStart(2, '0'));
  parts.push((seconds || '0').padStart(2, '0'));

  return parts.join(':');
}

function formatViews(views: string) {
  const num = parseInt(views);
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '萬次觀看';
  }
  return num + '次觀看';
}

export function VideoCard({ video, onClick, isFavorite, onToggleFavorite, showDuration = true }: VideoCardProps) {
  const date = new Date(video.publishedAt);

  return (
    <div className="video-card" onClick={() => onClick(video)}>
      <div className="video-thumbnail-container">
        <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
        {showDuration && video.duration && (
          <div className="video-duration-tag">{formatDuration(video.duration)}</div>
        )}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => onToggleFavorite(e, video.id)}
          title={isFavorite ? '從收藏移除' : '加入收藏'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="video-info">
        <span className="channel-badge">{video.channelTitle}</span>
        <h3>{video.title}</h3>
        <div className="video-meta">
          <span>{date.toLocaleDateString()}</span>
          <span>{formatViews(video.viewCount)}</span>
        </div>
      </div>
    </div>
  );
}
