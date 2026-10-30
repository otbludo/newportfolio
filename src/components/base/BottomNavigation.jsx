import { BriefcaseBusiness, Home, Layers, Plane } from "lucide-react";
import { useTranslation } from "react-i18next";

const sections = [
  { id: "stacks", Icon: Layers },
  { id: "projects", Icon: BriefcaseBusiness },
  { id: "travel", Icon: Plane },
];

export function BottomNavigation({ activeSection, onSectionChange, onHome }) {
  const { t } = useTranslation();

  return (
    <nav
      aria-label={t("navigation.main")}
      className="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3"
    >
      <button
        type="button"
        aria-label={t("navigation.home")}
        aria-pressed={activeSection === "home"}
        title={t("navigation.home")}
        onClick={onHome}
        className={`flex h-11 w-11 items-center justify-center rounded-full shadow-lg shadow-slate-900/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600/40 ${
          activeSection === "home"
            ? "bg-black text-white"
            : "bg-white text-slate-700 hover:bg-slate-200"
        }`}
      >
        <Home aria-hidden="true" className="h-5 w-5" />
      </button>
      <div className="rounded-full border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10">
        <ul className="flex items-center gap-1">
          {sections.map(({ id, Icon }) => {
            const isActive = id === activeSection;
            const label = t(`navigation.sections.${id}`);
            return (
              <li key={id}>
                <button
                  type="button"
                  aria-label={label}
                  aria-pressed={isActive}
                  title={label}
                  onClick={() => onSectionChange(id)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600/40 ${
                    isActive
                      ? "bg-black text-white"
                      : "text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
