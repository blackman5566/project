import React from "react";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import About from "./About";
import { useTranslation } from "react-i18next";

// MainContent.jsx
export default function MainContent({ sidebarOpen, setSidebarOpen,currentPage}) {
const { t, i18n } = useTranslation();

  const pageTitles = {
  resume: t("resume"),
  portfolio: t("project"),
  about: t("abouts"),
};

  return (
    <div className="bg-white dark:bg-[#1C1C1E] text-gray-900 dark:text-gray-100 min-h-full">
      {/* 上方工具列 */}
      <div className="flex items-center h-12 bg-white dark:bg-[#27282B] mb-4 px-2 shadow-md dark:shadow-black/50">
        {/* 畫面小於 md 才顯示 */}
        <button
          className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
        <h1 className="ml-4 text-xl text-[#A5A5A5] dark:text-[#737474]">
          {pageTitles[currentPage] || "主要內容"}</h1>
      </div>
      <div className="p-6">
      {currentPage === "resume" && <Resume />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "about" && <About />}
    </div>
    </div>
  );
}
