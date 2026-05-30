# Home Page Layout Adjustment Plan

**Date/Time**: 2026-05-30
**Status**: Implementing

## 1. Goal
Refactor the Home page dashboard to move "Analytics" and "Soundboard" links to the bottom, aligning them with official social media links for better visual hierarchy.

## 2. Changes
- **Main Grid**: Remove `analytics` and `soundboard` from the large tiles.
- **Footer Section**: Add a new `footer` component in `Home.tsx` to hold these two links.
- **Styling**: 
  - Reuse `.official-btn` class for the new links.
  - Add specific hover colors for Analytics (Teal) and Soundboard (Orange).
  - Ensure consistent spacing and responsiveness.

## 3. Verification Plan
- [x] **Build Check**: Run `npm run build` to ensure no regressions.
- [ ] **Visual Check**: Manually verify layout on different screen sizes (Responsive).
- [ ] **Unit Test**: Create a basic smoke test for the Home component.
