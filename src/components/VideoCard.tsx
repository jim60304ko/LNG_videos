import type { Video } from '../types/video';
import { formatDuration, formatViews } from '../utils/format';
import './VideoCard.css';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  showDuration?: boolean;
}

export function VideoCard({ video, onClick, isFavorite, onToggleFavorite, showDuration = true }: VideoCardProps) {
  const date = new Date(video.publishedAt);

  return (
    <div 
      className="video-card" 
      onClick={() => onClick(video)}
      role="button"
      tabIndex={0}
      aria-label={`播放影片：${video.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(video);
        }
      }}
    >
      <div className="video-thumbnail-container">
        <img src={video.thumbnail} alt={`影片縮圖：${video.title}`} className="video-thumbnail" />
        {showDuration && video.duration && (
          <div className="video-duration-tag" aria-label={`影片長度：${formatDuration(video.duration)}`}>
            {formatDuration(video.duration)}
          </div>
        )}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => onToggleFavorite(e, video.id)}
          title={isFavorite ? '從收藏移除' : '加入收藏'}
          aria-label={isFavorite ? `從收藏移除：${video.title}` : `加入收藏：${video.title}`}
          aria-pressed={isFavorite}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="video-info">
        <span className="channel-badge">{video.channelTitle}</span>
        <h3>{video.title}</h3>
        <div className="video-meta">
          <time dateTime={video.publishedAt}>{date.toLocaleDateString()}</time>
          <span>{formatViews(video.viewCount)}</span>
        </div>
      </div>
    </div>
  );
}
