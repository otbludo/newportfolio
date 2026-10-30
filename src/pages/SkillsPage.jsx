import { skillsData } from "../data/skills.js";
import { useTranslation } from "react-i18next";
import { SkillCard } from "../components/skills/SkillCard.jsx";
import { SkillsFilter } from "../components/skills/SkillsFilter.jsx";
import { Toggle } from "../components/ui/toggle.jsx";

export function SkillsPage({ activeFilter, onFilterChange }) {
  const { t } = useTranslation();
  const skills = skillsData.columns
    .flat()
    .filter((skill) => (skill.section ?? "stacks") === "stacks");
  const galleryColumns = [
    skills.slice(0, 3),
    skills.slice(3, 5),
    skills.slice(5),
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 pb-28 md:px-6 md:py-10 md:pb-28">
      <header className="mb-8">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-800">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            {t("skills.category")}
          </span>
          <Toggle />
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {t("skills.pageTitle")}
        </h1>
      </header>

      <SkillsFilter
        filters={skillsData.filters}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
      />

      <section
        aria-label={t("skills.category")}
        className="mt-[30px] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)_minmax(0,1.15fr)]"
      >
        {galleryColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="contents lg:block lg:space-y-3"
          >
            {column.map((skill) => (
              <SkillCard
                key={skill.title}
                skill={skill}
                logoMap={skillsData.logoMap}
                dimmed={
                  activeFilter !== "all" && activeFilter !== skill.category
                }
              />
            ))}
          </div>
        ))}
        <h2 className="col-span-full mt-6 text-xl font-semibold tracking-tight text-slate-900">
          {t("skills.chartTitle")}
        </h2>
        <div
          role="region"
          aria-label={t("skills.chartRegion")}
          tabIndex={0}
          className="col-span-full w-full overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
        >
          <img
            src="https://ghchart.rshah.org/otbludo"
            alt={t("skills.chartAlt")}
            className="block w-[700px] max-w-none sm:w-full sm:max-w-full"
          />
        </div>
      </section>
    </main>
  );
}
