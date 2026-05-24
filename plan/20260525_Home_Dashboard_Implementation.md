# LNG Portal Project - 第二階段開發計畫：入口主頁與成員導航

**建立日期**: 2026年5月24日 (Updated: 20260525)
**階段**: 第二階段 - 多頁面架構與品牌主頁實作

## 1. 專案目標
將目前的單頁面應用 (SPA) 擴展為包含五大核心區塊的入口導航網，提升品牌的完整性與資訊的可近性。

## 2. 結構規劃
- **Home (/)**: 核心入口，展示五大磁磚卡片。
- **About (/about)**: 網站初衷與 LNG 簡介。
- **Members (/members)**: 六位核心成員的互動名片。
- **Videos (/videos)**: 原有的時間軸影片導航（已開發部分）。
- **Community (/community)**: 粉絲社群連結。
- **Yaotou (/clippers)**: 藥頭（剪輯師）專區。

## 3. 視覺設計 (Modern Dashboard)
- **大網格磁磚 (Grid Cards)**:
  - 邊緣高度圓滑 (`border-radius: 30px`)。
  - **狀態**:
    - 預設: 深色背景, 黃色邊框與文字。
    - 懸浮 (Hover): 背景變為亮黃色, 文字變為黑色, 卡片微放大 + 外流光 (Glow)。
- **全站導航**:
  - 頂部導航列 (Header): 左側 LNG Logo, 中間「LNG Live」標題, 右側「回首頁」圓形按鈕。
- **成員名片**:
  - 展示大頭貼 (IG/FB 來源)。
  - 整合 Facebook, Twitch, IG, YouTube, X 的圖示連結。

## 4. 開發路線圖 (Roadmap)

### 第一步：架構調整 (Refactoring)
- [ ] 安裝 `react-router-dom`。
- [ ] 將原有 `App.tsx` 的內容遷移至 `src/views/Videos.tsx`。
- [ ] 建立基本的路由表 (Router Configuration)。

### 第二步：主頁面開發 (Home Implementation)
- [ ] 實作 `src/views/Home.tsx` 的網格佈局。
- [ ] 撰寫卡片的懸浮動畫與過渡效果。
- [ ] 整合 LNG 官方頭圖作為頁面標誌。

### 第三步：成員與內容開發 (Content Creation)
- [ ] 實作成員頁面：展示六位成員的社群陣列。
- [ ] 實作關於頁面：加入非官方聲明與 LNG 簡介。
- [ ] 實作社群頁面：預留粉絲群組連結。

### 第四步：細節優化 (UX Polishing)
- [ ] 全站「回首頁」按鈕邏輯。
- [ ] 移動端適應 (Mobile Responsive) 檢查。

## 5. 待確認事項
- [ ] 藥頭（剪輯師）的具體連結與名稱。
- [ ] 成員頭像的靜態資源下載或網址確認。
