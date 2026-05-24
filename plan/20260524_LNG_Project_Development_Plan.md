# LNG Timeline Project - 開發計畫

**建立日期**: 2026年5月24日
**階段**: 第一階段 - 專案初始化與核心功能開發

## 1. 專案概述
本專案旨在建立一個視覺效果優異、具備時尚感且符合 LNG Workshop 頻道氛圍的影片導航網站。網站將依發布時間展示影片，並透過自動化腳本定期更新數據。

## 2. 技術棧 (Tech Stack)
- **前端**: React (TypeScript) + Vanilla CSS
- **資料儲存**: 靜態 `videos.json`
- **資料抓取**: Node.js + YouTube Data API v3
- **部署與自動化**: GitHub Pages + GitHub Actions (Cron Job)

## 3. 視覺與互動設計 (Design & UX)
- **主題顏色**: 經典 LNG 黑 (#000000) 與 亮黃 (#FFD700)。
- **藝術風格**: 「手繪風 (Hand-drawn/Sketchy)」。
  - 時間軸線條採用不規則、似手繪的質感。
  - 影片卡片邊框帶有手寫或隨筆感。
- **佈局**: 中央垂直時間軸，影片卡片左右交錯排列。
- **互動**:
  - **無限捲動**: 每次載入 20 部影片，提升首屏速度。
  - **沉浸式播放**: 點擊影片卡片觸發全螢幕背景模糊的彈窗播放器 (4-1)。
  - **懸浮工具列**: 整合「關鍵字搜尋」與「隨機播放 (Surprise Me!)」。

## 4. 開發路線圖 (Roadmap)

### 第一階段：環境初始化 (Phase 1: Setup)
- [ ] 初始化 React 專案架構。
- [ ] 建立資料夾結構 (`src/`, `tests/`, `assets/`, `scripts/`)。
- [ ] 配置基本的 CSS 全域樣式 (Black/Yellow theme)。

### 第二階段：資料抓取腳本 (Phase 2: Data Engine)
- [ ] 撰寫 `scripts/fetch_videos.js`。
- [ ] 透過 YouTube API 抓取 `lngworkshop` 頻道所有影片。
- [ ] 實作自動分類 (精華/存檔) 與時長、點閱率抓取。
- [ ] 生成 `src/data/videos.json`。

### 第三階段：UI/UX 實作 (Phase 3: Frontend Implementation)
- [ ] 實作「手繪風」時間軸核心組件。
- [ ] 實作影片卡片 (Video Card) 組件。
- [ ] 實作沉浸式彈窗播放器 (Modal Player)。
- [ ] 實作搜尋與隨機播放邏輯。

### 第四階段：自動化與部署 (Phase 4: Automation & Deployment)
- [ ] 設定 GitHub Actions 每 24 小時自動更新 `videos.json`。
- [ ] 部署至 GitHub Pages。

## 5. 測試策略 (Testing)
- **單元測試**: 驗證資料過濾與搜尋邏輯。
- **視覺回歸**: 確保手繪風線條在不同螢幕尺寸下保持美觀。
- **整合測試**: 確保 GitHub Actions 能正確提交變動後的資料。

## 6. 預計交付物
- 完整的 React 原始碼。
- 自動化更新腳本。
- `TEST_COVERAGE.md` 文件。
