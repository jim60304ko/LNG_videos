# Project Enhancement and Testing Plan 🚀

**日期**: 2026年6月1日
**狀態**: 尚未開始 (Not Started)
**目標**: 針對專案 Review 提出的改進點進行優化，提升程式碼品質、無障礙性並建立測試基礎設施。

## 📋 任務清單

### 第一階段：程式碼重構與優化 (Refactoring & Quality)
- [ ] **1.1 輔助函數抽離**:
    - 建立 `src/utils/format.ts`。
    - 將 `VideoCard.tsx` 中的 `formatDuration` 與 `formatViews` 移至該檔案並匯出。
    - 更新所有引用這些函數的組件。
- [ ] **1.2 錯誤處理加強**:
    - 在 `Home.tsx` 的 `playSecretSound` 中加入更嚴謹的錯誤處理與提示。
- [ ] **1.3 無障礙性 (Accessibility) 提升**:
    - 為 `VideoCard` 中的收藏按鈕及其他互動元素添加 `aria-label`。
    - 確保所有圖片都有適當的 `alt` 屬性。

### 第二階段：測試基礎設施建立 (Testing Setup)
- [ ] **2.1 測試框架安裝**:
    - 安裝 `vitest` 與 `jsdom`。
    - 安裝 `@testing-library/react` 與 `@testing-library/jest-dom`。
- [ ] **2.2 設定測試腳本**:
    - 在 `package.json` 中添加 `test` 與 `test:coverage` 腳本。
    - 建立 `vitest.setup.ts`。

### 第三階段：單元與組件測試 (Testing Implementation)
- [ ] **3.1 工具函數測試**:
    - 為 `src/utils/format.ts` 編寫單元測試。
- [ ] **3.2 Hook 測試**:
    - 為 `src/hooks/useFavorites.ts` 編寫測試，驗證 LocalStorage 操作。
- [ ] **3.3 組件測試**:
    - 針對 `VideoCard` 撰寫組件測試，驗證渲染與點擊行為。

### 第四階段：維護與文件 (Maintenance)
- [ ] **4.1 更新文件**:
    - 更新 `README.md` 中的技術文件部分。
    - 更新 `TEST_COVERAGE.md` 紀錄目前的測試狀況。

## 🛠️ 技術細節
- **測試框架**: Vitest (與 Vite 整合度最高)
- **環境**: jsdom (模擬瀏覽器 API)
- **斷言庫**: Testing Library

## 📅 預期進度
1. 第一階段：預計 1 輪開發。
2. 第二、三階段：預計 2 輪開發。
3. 第四階段：預計 0.5 輪開發。
