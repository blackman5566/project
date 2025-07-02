import { useTranslation } from "react-i18next";
import LangSwitchBtn from "./LangSwitchBtn";

export default function Sidebar({ sidebarOpen, isMobile ,currentPage,setCurrentPage, darkMode, toggleDarkMode }) {
  const { t, i18n } = useTranslation();
  // 檢查目前語系
  const lang = i18n.language;

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-[#8A2830] dark:bg-[#120E0E] text-gray-900 dark:text-gray-100 z-20
        flex flex-col items-center
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        ${!isMobile ? "relative translate-x-0" : ""}
        md:relative md:translate-x-0
      `}
    >
      {/* 頭像 */}
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="avatar"
        className="w-24 h-24 rounded-full border-4 border-neutral-700 shadow mb-4 mt-8 object-cover"
      />

      {/* 主標 & 副標 */}
      <div className="text-center mb-8">
        <div className="text-2xl font-bold mb-1 text-[#B39C9E] dark:text-[#959393]">{t("name")}</div>
        <div className="text-sm text-[#7F7A7B] dark:text-[#7C7C7C]">{t("motto_no_limits")}</div>
        <div className="text-sm text-[#7F7A7B] dark:text-[#7C7C7C]">{t("past_open_future")}</div>
      </div>
      {/* 選單 */}
       {/* 選單 */}
      <nav className="flex flex-col items-center gap-2 mb-12 w-full">
        <button
          className={`w-36 py-2 rounded-lg font-bold text-center transition
            ${currentPage === "resume" ? "bg-[rgba(255,255,255,0.3)] text-[#FCFCFC] dark:bg-[rgba(255,255,255,0.3)] dark:text-[#FCFCFC]" : "text-[#C99D9F] dark:text-[#929292] hover:bg-[rgba(255,255,255,0.2)] hover:text-[#FCFCFC] dark:hover:bg-[rgba(255,255,255,0.2)] dark:hover:text-[#FCFCFC]"}
          `}
          onClick={() => setCurrentPage("resume")}
        >
          {t("resume")}
        </button>
        <button
          className={`w-36 py-2 rounded-lg font-bold text-center transition
            ${currentPage === "portfolio" ? "bg-[rgba(255,255,255,0.3)] text-[#FCFCFC] dark:bg-[rgba(255,255,255,0.3)] dark:text-[#FCFCFC]" : "text-[#C99D9F] dark:text-[#929292] hover:bg-[rgba(255,255,255,0.2)] hover:text-[#FCFCFC] dark:hover:bg-[rgba(255,255,255,0.2)] dark:hover:text-[#FCFCFC]"}
          `}
          onClick={() => setCurrentPage("portfolio")}
        >
          {t("project")}
        </button>
        <button
          className={`w-36 py-2 rounded-lg font-bold text-center transition
            ${currentPage === "about" ? "bg-[rgba(255,255,255,0.3)] text-[#FCFCFC] dark:bg-[rgba(255,255,255,0.3)] dark:text-[#FCFCFC]" : "text-[#C99D9F] dark:text-[#929292] hover:bg-[rgba(255,255,255,0.2)] hover:text-[#FCFCFC] dark:hover:bg-[rgba(255,255,255,0.2)] dark:hover:text-[#FCFCFC]"}
          `}
          onClick={() => setCurrentPage("about")}
        >
          
{t("abouts")}
        </button>
      </nav>

      {/* Spacer 讓下方 icon 靠底 */}
      <div className="flex-1" />

      {/* 社群 Icon Row */}
      <div className="flex gap-4 pb-4 text-xl">
        <button onClick={toggleDarkMode} className="theme-toggle" title="Toggle theme">
            {darkMode === 'dark' ? '☀️' : '🌙'}
          </button>
        <a href="https://github.com/blackman5566" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">🐱</a>
        <LangSwitchBtn />
        <a href="mailto:pt7922310@gmail.com" className="hover:text-gray-300">✉️</a>
      </div>
    </div>
  );
}
