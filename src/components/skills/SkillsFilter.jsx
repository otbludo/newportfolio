export function SkillsFilter({ filters, activeFilter, onFilterChange }) {
  return (
    <nav aria-label="Filter skills" className="mt-6 flex justify-center">
      <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
        {filters.map(({ id, label, Icon }) => {
          const isActive = activeFilter === id;
          return (
            <button
              key={id}
              type="button"
              aria-label={label}
              aria-pressed={isActive}
              title={label}
              onClick={() => onFilterChange(id)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600/40 ${
                isActive
                  ? "bg-black text-white"
                  : "text-slate-500 hover:bg-slate-200"
              }`}
            >
              <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
