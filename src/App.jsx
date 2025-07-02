import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function App() {
  //目前頁面
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "resume";
  });

  // 用 state 儲存目前是否 mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 預設 sidebarOpen 根據初始尺寸（之後完全只用 setSidebarOpen 控制）
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  // dark mode state
 const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') || 'light');

  // resize 時只改 isMobile，不改 sidebarOpen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // 同步 currentPage 到 localStorage
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  // toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 只根據 sidebarOpen, isMobile 來調整 MainContent 樣式
  return (
    <div className={`${darkMode === 'dark' ? "dark" : ""} flex h-screen overflow-hidden`}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
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

