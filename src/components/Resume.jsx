import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// 動畫參數
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function Resume() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const data = {
    name: t("name"),
    nameSub: t("nameSub"),
    jobTitle: t("jobTitle"),
    education: t("education", { returnObjects: true }),
    summary: t("summary"),
    experiences: t("experiences", { returnObjects: true }),
    skills: t("skills", { returnObjects: true }),
  };

  const sectionTitles = {
    education: t("educationTitle", { defaultValue: language === "zh" ? "學歷" : "Education" }),
    summary: t("summaryTitle", { defaultValue: language === "zh" ? "個人 Summary" : "Personal Summary" }),
    experience: t("experienceTitle", { defaultValue: language === "zh" ? "工作經歷" : "Work Experience" }),
    skills: t("skillsTitle", { defaultValue: language === "zh" ? "工作技能" : "Skills" }),
  };

  const sections = [
    {
      id: "summary",
      content: (
        <section id="summary" className="section card bg-[#F7F7F7] dark:bg-[#282828] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-[#BC6E6E]">{sectionTitles.summary}</h2>
          <p className="text-[#36393D] dark:text-[#818C96]">{data.summary}</p>
        </section>
      ),
    },
    {
      id: "experience",
      content: (
        <section id="experience" className="section bg-[#F7F7F7] dark:bg-[#282828] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-[#BC6E6E]">{sectionTitles.experience}</h2>
          {data.experiences.map((job, idx) => (
            <div className="item card mb-6">
              <h3 className="font-bold text-base text-[#BC6E6E]">{job.company}</h3>
              <span className="period text-gray-500 text-sm">{job.period}</span>
              <ul className="list-disc list-inside mt-1 mb-2 text-[#36393D] dark:text-[#818C96]">
                {job.details.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
              {/* 專案成就 */}
              {job.projects && job.projects.map((proj, pi) => (
                <div className="project-achievements mt-2" key={proj.name + pi}>
                  <strong className="text-[#BC6E6E]">
                    {proj.link
                      ? <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link underline text-[#BC6E6E]">{proj.name}</a>
                      : proj.name}
                  </strong>
                  <ul className="sub-list list-disc list-inside dark:text-[#818C96] text-[#36393D] pl-4 mt-1">
                    {Array.isArray(proj.achievements)
                      ? proj.achievements.map((a, ai) =>
                          typeof a === 'string'
                            ? <li key={ai}>{a}</li>
                            : (
                              <li key={ai}>
                                <a href={a.link} target="_blank" rel="noopener noreferrer" className="underline dark:text-[#818C96] text-[#36393D]">{a.name}</a>｜{a.desc}
                              </li>
                            )
                        )
                      : null
                    }
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>
      ),
    },
    {
      id: "skills",
      content: (
        <section id="skills" className="section bg-[#F7F7F7] dark:bg-[#282828] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-[#BC6E6E]">{sectionTitles.skills}</h2>
          <ul className="skills-grid grid grid-cols-2 sm:grid-cols-3 gap-2 dark:text-[#36393D] text-[#818C96]">
            {data.skills.map(skill => <li key={skill} className="rounded bg-gray-100 px-2 py-1 text-center">{skill}</li>)}
          </ul>
        </section>
      ),
    },
    {
      id: "education",
      content: (
        <section id="education" className="section card bg-[#F7F7F7] dark:bg-[#282828] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-[#BC6E6E]">{sectionTitles.education}</h2>
          <ul className="list-disc list-inside text-[#36393D] dark:text-[#818C96]">
            {data.education.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>
      ),
    }
  ];

  return (
    <div className="bg-white dark:bg-[#1C1C1E] min-h-screen py-8 px-2 sm:px-0 text-[#BC6E6E]">
      {/* -------- 頁首區 -------- */}
      <header className="top-bar max-w-3xl mx-auto bg-[#F7F7F7] dark:bg-[#282828] rounded-2xl shadow p-6 mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 flex flex-col items-center">
          {data.name}
        </h1>
        <p className="subtitle text-gray-600 dark:text-gray-400 mb-4">{data.jobTitle}</p>
      
      </header>
  
      {/* -------- 主要內容區 -------- */}
      <main className="main-content max-w-3xl mx-auto flex flex-col gap-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            custom={i}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-[#F7F7F7] dark:bg-[#282828] rounded-2xl shadow p-6"
          >
            {section.content}
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Resume;

