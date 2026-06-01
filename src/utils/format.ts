/**
 * Formats a YouTube ISO 8601 duration (e.g., PT1H2M3S) into a readable string (e.g., 1:02:03).
 */
export function formatDuration(isoDuration: string): string {
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

/**
 * Formats a view count string into a localized Chinese string (e.g., 1.5萬次觀看).
 */
export function formatViews(views: string): string {
  const num = parseInt(views);
  if (isNaN(num)) return views;
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '萬次觀看';
  }
  return num + '次觀看';
}
