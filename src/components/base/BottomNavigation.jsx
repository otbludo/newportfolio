import { BriefcaseBusiness, Home, Layers, Plane } from "lucide-react";

const sections = [
  { id: "stacks", label: "Stacks", Icon: Layers },
  { id: "projects", label: "Projets réalisés", Icon: BriefcaseBusiness },
  { id: "travel", label: "Voyages", Icon: Plane },
];

export function BottomNavigation({ activeSection, onSectionChange, onHome }) {
  return (
    <nav
      aria-label="Navigation principale"
      className="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3"
    >
      <button
        type="button"
        aria-label="Accueil"
        aria-pressed={activeSection === "home"}
        title="Accueil"
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
          {sections.map(({ id, label, Icon }) => {
            const isActive = id === activeSection;
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
