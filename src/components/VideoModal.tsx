import { Video } from '../types/video';

interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="video-wrapper">
          <iframe 
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="modal-details">
          <span className="channel-badge">{video.channelTitle}</span>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
}
