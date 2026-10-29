import { skillsData } from "../data/skills.js";
import { SkillCard } from "../components/skills/SkillCard.jsx";
import { SkillsFilter } from "../components/skills/SkillsFilter.jsx";

export function SkillsPage({ activeFilter, onFilterChange }) {
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
      <header className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-800">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
          Compétences
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Skills that fuel my passion
        </h1>
      </header>

      <SkillsFilter
        filters={skillsData.filters}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
      />

      <section
        aria-label="Skills"
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
      </section>
    </main>
  );
}
