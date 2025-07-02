// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zh from "./locales/zh.json";
import en from "./locales/en.json";

const storedLang = localStorage.getItem("lang"); // 新增這行

// 如有安裝自動偵測
// import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // .use(LanguageDetector) // 如果你有裝自動偵測再加這行
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
   lng: storedLang || "zh", // 預設用 localStorage，有就用，沒有用 zh
    fallbackLng: "zh", // 找不到時用中文
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
