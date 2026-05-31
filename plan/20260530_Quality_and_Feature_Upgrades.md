# Project Quality and Feature Upgrade Plan

**Date/Time**: 2026-05-30
**Status**: Planning
**Tasks**: ESLint Fixes, Code Splitting, PWA, Framer Motion

## 1. Quality: Fix ESLint Errors and Warnings
- **ThemeToggle.tsx**: 
  - *Issue*: `setState` in `useEffect` causes cascading renders.
  - *Fix*: Initialize state directly from `localStorage` using a lazy initializer: `const [isLight, setIsLight] = useState(() => localStorage.getItem('lng-theme') === 'light');`.
- **Analytics.tsx**:
  - *Issue*: `any` type in Tooltip formatter.
  - *Fix*: Define a proper interface for the tooltip data.
- **VideoNav.tsx**:
  - *Issue*: `Math.random()` in `useMemo` is an impure function call during render.
  - *Fix*: Move the random shuffle logic to a `useEffect` or use a ref-based approach to ensure it only happens once without triggering purity warnings.

## 2. Quality: Implement Route-based Code Splitting
- **App.tsx**:
  - Replace static imports with `React.lazy(() => import('./views/...'))`.
  - Wrap the `<Routes>` component in `<Suspense fallback={<div className="loader-container">Loading...</div>}>`.
  - Ensure the loader has a basic CSS style.

## 3. Feature: PWA (Progressive Web App) Support
- **Dependencies**: Install `vite-plugin-pwa`.
- **Config**: Update `vite.config.ts` to include the PWA plugin with:
  - `manifest`: Name, description, theme_color, icons.
  - `registerType: 'autoUpdate'`.
  - `workbox`: Basic caching strategy.
- **Assets**: Ensure icons are correctly linked in the manifest.

## 4. Feature: Framer Motion Page Transitions
- **Dependencies**: Install `framer-motion`.
- **App.tsx**:
  - Use `useLocation()` to provide a unique key to `Routes`.
  - Wrap `<Routes>` in `<AnimatePresence mode="wait">`.
- **Views**:
  - Wrap the top-level container of each view in `<motion.div>` with initial, animate, and exit props (e.g., fade and slide).

## 5. Execution Roadmap
1. **Step 1**: Fix ESLint errors (immediate feedback).
2. **Step 2**: Implement Code Splitting and verify the build.
3. **Step 3**: Install and configure `vite-plugin-pwa`.
4. **Step 4**: Install and implement `framer-motion` transitions.
5. **Step 5**: Run final build and lint check.
