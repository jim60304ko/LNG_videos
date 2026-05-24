# LNG Live Fan Page 🎙️

> 專為 LNG Workshop 打造的非官方歷史檔案庫與社群導航網站。

![LNG Live Logo](src/data/img/lng_live.png)

## 📌 專案簡介
這是一個由粉絲建立的非官方入口網站，旨在整理 LNG Workshop 長達十多年的直播精華、完整存檔、核心成員社群資訊以及優質的粉絲剪輯師（藥頭）頻道。透過現代化的設計與直覺的導航，讓老粉絲回味、新粉絲快速入坑。

🌐 **Live Demo**: [LNG Live Fan Page](https://jim60304ko.github.io/LNG_videos/)

## ✨ 核心功能

*   **🎛️ 現代化主頁儀表板**
    *   採用「大網格磁磚」佈局，提供流暢的懸浮互動體驗與極簡深色視覺風格。
*   **🕰️ 歷史時間軸導航**
    *   整合「LNG Workshop」官方頻道與「LNG 精華頻道 (@lng6121)」。
    *   時間軸左右交錯顯示，支援無限捲動 (Infinite Scroll) 確保極速載入。
*   **🔍 即時篩選與搜尋**
    *   支援關鍵字搜尋。
    *   膠囊式分類按鈕 (Filter Chips)：快速切換「精華」與「完整存檔」。
    *   **Surprise Me!**：隨機播放功能，拯救選擇困難症。
*   **👤 成員與藥頭名片**
    *   彙整 6 位核心成員的所有官方社群連結（Twitch, YouTube, FB, IG 等）。
    *   專屬「藥頭專區」展示優質的粉絲剪輯師頻道。
*   **🤖 全自動化數據更新**
    *   透過 GitHub Actions，每月自動從 YouTube API 抓取最新影片與點閱率，確保網站永遠保持最新狀態，無需手動維護。

## 🛠️ 技術架構

*   **前端框架**: React 19 + TypeScript + Vite
*   **路由管理**: React Router DOM (HashRouter for GitHub Pages)
*   **視覺設計**: Vanilla CSS (Modern Dark Style / Glassmorphism)
*   **資料引擎**: Node.js + Axios + YouTube Data API v3
*   **自動化 CI/CD**: GitHub Actions
*   **網頁託管**: GitHub Pages

## 🚀 本地開發指南

如果你想在本地運行或修改這個專案：

### 1. 安裝依賴
```bash
npm install
```

### 2. 環境變數設定
在專案根目錄建立 `.env.local` 檔案，並填入你的 YouTube API Key：
```env
VITE_YOUTUBE_API_KEY=你的_API_KEY
```

### 3. 抓取最新資料 (可選)
```bash
node scripts/fetch_videos.cjs
```

### 4. 啟動開發伺服器
```bash
npm run dev
```

### 5. 部署到 GitHub Pages
```bash
npm run deploy
```

## 📜 聲明
本網站為粉絲基於熱愛所製作之非官方專案。網站內所有影片、圖像之版權均屬於 LNG Workshop 原團隊及相關創作者所有。
