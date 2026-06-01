import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useFavorites } from './useFavorites';

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with empty favorites', () => {
    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual([]);
  });

  it('should toggle favorite status', () => {
    const { result } = renderHook(() => useFavorites());
    
    act(() => {
      result.current.toggleFavorite('video1');
    });
    expect(result.current.favorites).toEqual(['video1']);
    expect(result.current.isFavorite('video1')).toBe(true);

    act(() => {
      result.current.toggleFavorite('video1');
    });
    expect(result.current.favorites).toEqual([]);
    expect(result.current.isFavorite('video1')).toBe(false);
  });

  it('should persist to localStorage', () => {
    const { result } = renderHook(() => useFavorites());
    
    act(() => {
      result.current.toggleFavorite('video2');
    });
    
    const stored = JSON.parse(localStorage.getItem('lng_favorites') || '[]');
    expect(stored).toEqual(['video2']);
  });
});
