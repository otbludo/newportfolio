export function SkillCard({ skill, logoMap, dimmed }) {
  const logoBadges = (skill.badges ?? []).filter((badge) =>
    logoMap[getBadgeLabel(badge).toLowerCase()],
  );

  return (
    <article
      className={`flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-opacity duration-200 ease-out ${
        skill.minH ?? ""
      } ${dimmed ? "opacity-35" : "opacity-100"}`}
    >
      {logoBadges.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {logoBadges.map((badge) => (
            <LogoBadge
              key={getBadgeLabel(badge)}
              badge={badge}
              logoMap={logoMap}
            />
          ))}
        </div>
      )}

      <div className="mt-auto pt-4">
        <h2 className="text-base font-semibold leading-[1.3] text-slate-900">
          {skill.title}
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
          {skill.description}
        </p>
      </div>
    </article>
  );
}

function LogoBadge({ badge, logoMap }) {
  const label = getBadgeLabel(badge);
  const src = logoMap[label.toLowerCase()];

  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-lg"
      title={label}
    >
      <img src={src} alt={label} className="h-full w-full object-contain" />
    </span>
  );
}

function getBadgeLabel(badge) {
  return typeof badge === "string" ? badge : badge.label;
}
