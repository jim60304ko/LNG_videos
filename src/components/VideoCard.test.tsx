import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { VideoCard } from './VideoCard';
import type { Video } from '../types/video';

const mockVideo: Video = {
  id: 'test-id',
  title: 'Test Video',
  description: 'Test Description',
  publishedAt: '2026-01-01T00:00:00Z',
  thumbnail: 'test-thumb.jpg',
  channelTitle: 'Test Channel',
  viewCount: '1000',
  duration: 'PT10M',
  category: 'Full'
};

describe('VideoCard', () => {
  it('should render video information correctly', () => {
    render(
      <VideoCard 
        video={mockVideo} 
        onClick={() => {}} 
        isFavorite={false} 
        onToggleFavorite={() => {}} 
      />
    );

    expect(screen.getByText('Test Video')).toBeInTheDocument();
    expect(screen.getByText('Test Channel')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByAltText('影片縮圖：Test Video')).toBeInTheDocument();
  });

  it('should call onClick when card is clicked', () => {
    const handleClick = vi.fn();
    render(
      <VideoCard 
        video={mockVideo} 
        onClick={handleClick} 
        isFavorite={false} 
        onToggleFavorite={() => {}} 
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /播放影片/ }));
    expect(handleClick).toHaveBeenCalledWith(mockVideo);
  });

  it('should call onToggleFavorite when favorite button is clicked', () => {
    const handleToggle = vi.fn();
    render(
      <VideoCard 
        video={mockVideo} 
        onClick={() => {}} 
        isFavorite={false} 
        onToggleFavorite={handleToggle} 
      />
    );

    const favoriteBtn = screen.getByRole('button', { name: /加入收藏/ });
    fireEvent.click(favoriteBtn);
    expect(handleToggle).toHaveBeenCalled();
  });
});
