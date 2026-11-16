import { useTranslation } from "react-i18next";

export function SkillCard({ skill, logoMap, dimmed }) {
  const { t } = useTranslation();
  const badges = skill.badges ?? [];
  const logoBadges = badges.filter((badge) => logoMap[badge.toLowerCase()]);
  const points = t(`skills.cards.${skill.id}.points`, {
    returnObjects: true,
    defaultValue: [],
  });

  return (
    <article
      className={`flex w-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-opacity duration-200 ease-out ${
        dimmed ? "opacity-35" : "opacity-100"
      }`}
    >
      {logoBadges.length > 0 && (
        <div className="flex flex-wrap justify-start gap-6 md:justify-center">
          {logoBadges.map((badge) => (
            <span
              key={badge}
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              title={badge}
            >
              <img
                src={logoMap[badge.toLowerCase()]}
                alt={badge}
                className="h-full w-full object-contain"
              />
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4">
        <h2 className="text-base font-semibold leading-[1.3] text-slate-900">
          {t(`skills.cards.${skill.id}.title`)}
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
          {t(`skills.cards.${skill.id}.description`)}
        </p>
        {Array.isArray(points) && points.length > 0 && (
          <ul className="mt-2.5 space-y-1 text-xs leading-relaxed text-slate-700">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-slate-500"
                />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
