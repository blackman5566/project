import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className=" w-full min-h-screen flex justify-center items-start">
      <div className="max-w-2xl w-full bg-[#F7F7F7] dark:bg-[#282828] rounded-2xl shadow-lg p-8 mt-8 mb-8">
        {/* 標題 */}
        <h1 className="text-3xl font-bold mb-6 text-[#BC6E6E] text-center">
          {t("about.title")}
        </h1>

        {/* Who am I */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#BC6E6E]">{t("about.who")}</h2>
          <p className="text-[#36393D] dark:text-[#818C96]">{t("about.whoDesc")}</p>
        </section>

        {/* My Story */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#BC6E6E]">{t("about.story")}</h2>
          <p className="text-[#36393D] dark:text-[#818C96]">{t("about.storyDesc")}</p>
        </section>

        {/* Motto */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#BC6E6E]">{t("about.motto")}</h2>
          <blockquote className="italic text-[#BC6E6E] border-l-4 pl-4 border-[#BC6E6E]">
            {t("about.mottoDesc")}
          </blockquote>
          <blockquote className="italic text-[#BC6E6E] border-l-4 pl-4 border-[#BC6E6E]">
            {t("about.mottoDesc1")}
          </blockquote>
          <blockquote className="italic text-[#BC6E6E] border-l-4 pl-4 border-[#BC6E6E]">
            {t("about.mottoDesc2")}
          </blockquote>
          <blockquote className="italic text-[#BC6E6E] border-l-4 pl-4 border-[#BC6E6E]">
            {t("about.mottoDesc3")}
          </blockquote>
          <blockquote className="italic text-[#BC6E6E] border-l-4 pl-4 border-[#BC6E6E]">
            {t("about.mottoDesc4")}
          </blockquote>
          <blockquote className="italic text-[#BC6E6E] border-l-4 pl-4 border-[#BC6E6E]">
            {t("about.mottoDesc5")}
          </blockquote>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#BC6E6E]">{t("about.skills")}</h2>
          <ul className="list-disc pl-6 text-[#36393D] dark:text-[#818C96]">
            {t("about.skillsList", { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Now */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#BC6E6E]">{t("about.now")}</h2>
          <p className="text-[#36393D] dark:text-[#818C96]">{t("about.nowDesc")}</p>
        </section>

        {/* Life */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#BC6E6E]">{t("about.life")}</h2>
          <p className="text-[#36393D] dark:text-[#818C96]">{t("about.lifeDesc")}</p>
        </section>

        {/* Contact */}
        <section className="mb-0">
          <h2 className="text-xl font-semibold mb-2 text-[#BC6E6E]">{t("about.contact")}</h2>
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/blackman5566"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#36393D] dark:text-[#818C96] underline flex items-center gap-1"
            >
              🐱 {t("about.github")}
            </a>
            <a
              href="mailto:pt7922310@gmail.com"
              className="text-[#36393D] dark:text-[#818C96] underline flex items-center gap-1"
            >
              ✉️ {t("about.email")}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

