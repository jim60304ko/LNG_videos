import { describe, it, expect } from 'vitest';
import { formatDuration, formatViews } from './format';

describe('formatDuration', () => {
  it('should format full duration correctly', () => {
    expect(formatDuration('PT1H2M3S')).toBe('1:02:03');
  });

  it('should format minutes and seconds correctly', () => {
    expect(formatDuration('PT5M30S')).toBe('05:30');
  });
  
  it('should format minutes only correctly', () => {
    expect(formatDuration('PT10M')).toBe('10:00');
  });

  it('should format seconds only correctly', () => {
    expect(formatDuration('PT45S')).toBe('00:45');
  });

  it('should handle empty or invalid input', () => {
    expect(formatDuration('')).toBe('');
    expect(formatDuration('INVALID')).toBe('INVALID');
  });
});

describe('formatViews', () => {
  it('should format views under 10000 correctly', () => {
    expect(formatViews('9500')).toBe('9500次觀看');
  });

  it('should format views over 10000 correctly', () => {
    expect(formatViews('15000')).toBe('1.5萬次觀看');
    expect(formatViews('100000')).toBe('10.0萬次觀看');
  });

  it('should handle invalid input', () => {
    expect(formatViews('NaN')).toBe('NaN');
  });
});
