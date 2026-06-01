# LNG Live Fan Page 🎙️

> 專為 LNG Workshop 打造的非官方歷史檔案庫與社群導航網站。

![LNG Live Logo](src/assets/brand/lng_live.png)

## 📌 專案簡介
這是一個由粉絲建立的非官方入口網站，旨在整理 LNG Workshop 長達十多年的直播精華、完整存檔、核心成員社群資訊以及優質的粉絲剪輯師（藥頭）頻道。透過現代化的設計與直覺的導航，讓老粉絲回味、新粉絲快速入坑。

🌐 **Live Demo**: [LNG Live Fan Page](https://jim60304ko.github.io/LNG_videos/)

## ✨ 核心功能

*   **🎛️ 現代化主頁儀表板**
    *   採用「大網格橫向磁磚」佈局，提供流暢的懸浮互動體驗與極簡設計。
    *   快速連結至官方 Facebook 與 Twitch 社群。

*   **🌓 雙色主題切換**
    *   **深/淺色模式**：具備時尚的滑動切換開關 (Sliding Toggle)。
    *   **智慧記憶**：自動儲存主題偏好於瀏覽器 (LocalStorage)。

*   **📽️ 雙重影片瀏覽視圖**
    *   **所有影片 (Grid View)**：以標準網格形式快速瀏覽所有 700+ 部影片。
    *   **時間軸 (Timeline View)**：具備精確到「年份/月份」的統一亮黃色標籤導航，直觀感受 LNG 的歷史脈絡。
    *   **隨機影片跑馬燈**：在選單頁面下方實作無限水平滾動列，每次進入隨機挖寶。

*   **🔍 強大搜尋與篩選系統**
    *   **即時搜尋**：輸入關鍵字即刻過濾標題。
    *   **膠囊篩選鈕**：一鍵切換「精華」與「實際存檔」。
    *   **動態計數器**：標題下方即時顯示當前篩選後的影片總數。
    *   **🎲 Surprise Me!**：隨機播放功能，從當前篩選列表中隨機抽籤。

*   **👤 成員與藥頭名片**
    *   **核心成員**：展示 6 位成員（六嘆、鳥屎、老王、Leggy、八毛、小六）的互動名片，整合所有社群連結與 Icon。
    *   **藥頭專區**：彙整優質的粉絲剪輯師頻道（玉子燒、泰山娃娃、椰菜、嘎特、自由的蘋果），展示專屬頭像與連結。

*   **📱 全方位響應式佈局**
    *   針對手機與平板進行深度優化，確保在各種螢幕尺寸下都能擁有最佳的瀏覽與播放體驗。

*   **❤️ 我的收藏系統 (Local Favorites)**
    *   在影片卡片上新增愛心圖示，一鍵收藏喜愛的影片。
    *   提供專屬篩選器，方便快速回味個人清單，數據儲存於本地瀏覽器。

*   **✨ 歷史上的今天 (On This Day)**
    *   首頁動態展示過去同月同日發布的經典影片，像時光機一樣帶你回到過去。

*   **📊 數據可視化儀表板 (Analytics Dashboard)**
    *   使用 `recharts` 繪製 LNG 頻道的歷年發片趨勢、影片分類比例以及觀看數 Top 10 影片排行。

*   **🔊 語音迷因板 (Soundboard)**
    *   收錄經典的成員語音與迷因按鈕，並隱藏了 Logo 互動彩蛋。

*   **🤖 全自動化數據更新**
    *   透過 GitHub Actions，每月自動從 YouTube API 抓取最新影片與點閱率，確保網站永遠保持最新狀態。

## 🛠️ 技術架構

*   **前端框架**: React 19 + TypeScript + Vite
*   **測試框架**: Vitest + React Testing Library
*   **路由管理**: React Router DOM (HashRouter)
*   **視覺設計**: Vanilla CSS (Modern Dark Style / Glassmorphism)
*   **資料引擎**: Node.js + Axios + YouTube Data API v3
*   **自動化 CI/CD**: GitHub Actions
*   **網頁託管**: GitHub Pages

## 🧪 測試與驗證

本專案使用 Vitest 進行測試，涵蓋了工具函數、自定義 Hook 以及核心 UI 組件。

*   **執行測試**: `npm run test`
*   **涵蓋率報告**: `npm run test:coverage`

## 📜 聲明
本網站為粉絲基於熱愛所製作之非官方專案。網站內所有影片、圖像之版權均屬於 LNG Workshop 原團隊及相關創作者所有。
