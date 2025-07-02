import { useTranslation } from "react-i18next";

export default function LangSwitchBtn() {
  const { i18n } = useTranslation();
  // 讀當前語言
  const lang = i18n.language;

  // 切換語言邏輯
  const toggleLang = () => {
    const nextLang = lang === "en" ? "zh" : "en";
    i18n.changeLanguage(nextLang);
    // 寫入本地端
    localStorage.setItem("lang", nextLang);
  };

  // 可根據語言顯示不同旗幟或label
  const btnIcon = lang === "en" ? "🇹🇼" : "🇺🇸";

  return (
    <button
      onClick={toggleLang}
      className="hover:text-gray-300 text-2xl"
      title={lang === "en" ? "切換中文" : "Switch to English"}
    >
      {btnIcon}
    </button>
  );
}
