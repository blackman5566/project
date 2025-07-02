import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "resume";
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.title = lang === 'zh'
      ? '許佳豪 • 個人簡介'
      : 'HSU CHIA-HAO • Personal Profile English Version';
  }, [lang]);

  const toggleDarkMode = () => {
    setDarkMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`${darkMode === 'dark' ? "dark" : ""} flex h-screen overflow-hidden`}>
      {/* ★★ Backdrop for mobile sidebar ★★ */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar (z-20) */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content */}
      <div
        className={`
          flex-1 relative transition-transform duration-300 ease-in-out overflow-y-auto h-full
          ${sidebarOpen && isMobile ? "transform translate-x-64" : ""}
        `}
      >
        <MainContent
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
