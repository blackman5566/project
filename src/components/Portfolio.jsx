import React from "react";
import { useTranslation } from "react-i18next";

const TimelineCell = ({ companyName, startYear, endYear, items }) => {

  return (
    <div className="flex mb-10 items-center border-b border-dashed border-[var(--border)] pb-4" style={{ marginBottom: 32 }}>
      {/* Left side timeline */}
      <div className="w-20 flex flex-col items-center justify-center relative" style={{ transform: "translateY(-20px)" }}>
        <div className="text-[#BC6E6E] font-bold mb-1 text-center">{companyName}</div>
        <div className="font-semibold text-[#BC6E6E]">{startYear}</div>
        <div
          className="w-[2px] bg-[#BC6E6E] flex-grow my-1"
          style={{ minHeight: 140 }}
        />
        <div className="font-semibold text-[#BC6E6E]">{endYear}</div>
      </div>

      {/* Right side horizontal scroll list */}
      <div className="flex-grow flex items-center gap- pl-5 pr-3 overflow-x-auto min-h-[120px] scrollbar-custom">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[140px] max-w-[180px] bg-[var(--card)] rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center whitespace-normal px-3 py-3 mb-3 text-sm font-medium text-[var(--card-foreground)] break-words"
            style={{ wordBreak: "break-word" }}
          >
            <div className="mb-1 text-center font-semibold">{item.name}</div>
            {item.description && (
              <div className="mb-1 text-center text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
            )}
            {item.role && (
              <div className="mb-2 text-center text-xs text-gray-600 dark:text-gray-500">
                 {item.role}
              </div>
            )}
            {item.technologies && (
              <div className="mb-1 text-center text-xs text-gray-600 dark:text-gray-500 flex flex-wrap justify-center gap-1">
                {" "}
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5 text-[0.55rem] font-mono"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-2 flex-wrap justify-center">
              {item.appstore && (
                <a
                  href={item.appstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded text-xs"
                >
                  App Store
                </a>
              )}
              {item.news && (
                <a
                  href={item.news}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded text-xs"
                >
                  News
                </a>
              )}{item.youtube && (
                <a
                  href={item.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded text-xs"
                >
                  Youtube
                </a>
              )}{item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded text-xs"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Portfolio() {
  // Sample data for multiple companies
  const { t } = useTranslation();
  const companies = [
    {
      companyName: t("Web3_Portfolio"),
      startYear: t("Present"),
      endYear: "2025/07",
      items: [
        {
          name: "Swap DApp",
          description: t("Web3_title"),
          technologies: ["Solidity", "Hardhat", "Ethers.js", "Viem", "RainbowKit", "Wagmi", "Next.js", "TypeScript", "Tailwind CSS"],
          role: t("technicalLead"),
          github: "https://github.com/blackman5566/swap-dapp",
        },
      ],
    },
    {
      companyName: t("dkdtCompany"),
      startYear: "2025/06",
      endYear: "2019/05",
      items: [
        {
          name: "SmartxOffice App",
          description: t("enterprise"),
          technologies: ["Swift", "Objective-C"],
          role: t("technicalLead"),
          github: "https://github.com/blackman5566/SmartxOffice_Feature_Demo",
          appstore: "https://apps.apple.com/mo/app/smartxoffice/id1474181962",
        },
        {
          name: t("gbet"),
          description: t("gbetDescription"),
          technologies: ["Flutter", "Cross-platform","Riverpod"],
          role: t("technicalLead"),
          youtube: "https://youtube.com/shorts/aj8VRR-u2bQ?feature=share",
        },
        {
          name: "YES! Charging App",
          description: t("chargingDescription"),
          technologies: ["Swift", "iOS"],
          role: t("technicalLead"),
          appstore: "https://apps.apple.com/tw/app/yes-%E4%BE%86%E9%9B%BB/id1424897015",
          news:"https://www.yes-charging.com.tw/news"
        },
        {
          name: "Porsche Charging App",
          description:  t("porscheDescription"),
          technologies: ["Swift", "iOS"],
          role: t("technicalLead"),
          appstore: "https://apps.apple.com/tw/app/%E5%8F%B0%E7%81%A3%E4%BF%9D%E6%99%82%E6%8D%B7%E5%85%85%E9%9B%BB-porsche-charging/id1535749069",
          news:"https://news.u-car.com.tw/news/article/64379"
        },
       
      ],
    },
    {
      companyName: t("gameCompany"),
      startYear: "2019/07",
      endYear: "2018/05",
      items: [{ 
        name: "Swapub App",
        description: t("swaupDescription"),
        role: `${t("refactor")}, ReactiveCocoa`,
        technologies: ["Swift","Objective-C", "iOS"],
        news: "https://today.line.me/tw/v2/article/gVNVap",
      }],
    },
    {
      companyName: t("ufCompany"),
      startYear: "2016/03",
      endYear: "2018/05",
      items: [
        { 
          name: t("cosmed"),
          description: t("cosmedDescription"),
          role: t("technicalLead"),
          technologies: ["Swift", "iOS", "RxSwift","MVVM"],
          appstore: "https://apps.apple.com/tw/app/%E5%BA%B7%E6%98%AF%E7%BE%8E/id891609371",
        },
        { name: "Petmaji App",
          description: t("petmajiDescription"),
          role: t("technicalLead"),
          technologies: ["Objective-C", "iOS", "ReactiveCocoa"],
        },
        { name: "全民原能會 App",
          role: t("technicalLead"),
          technologies: ["Objective-C", "iOS"],
          description: t("environmentalDescription"),
         },
      ],
    },
    {
      companyName:  t("hiiirCompany"),
      startYear: "2015/10",
      endYear: "2015/12",
      items: [{ 
        name: t("alleyFood"),
        description: t("alleyFoodDescription"),
        technologies: ["Objective-C", "iOS", "ReactiveCocoa"],
        news:"https://angellulu.net/blog/post/46825393"}],
    },
  ];
  return (
    <div className="p-5">
      {companies.map((company, idx) => (
        <TimelineCell
          key={idx}
          companyName={company.companyName}
          startYear={company.startYear}
          endYear={company.endYear}
          items={company.items}
        />
      ))}
    </div>
  );
}

