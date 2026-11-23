import React from "react";

type Props<T extends string> = {
  filters: readonly T[];
  active: T;
  onChange: (filter: T) => void;
};

const FilterBar = <T extends string>({ filters, active, onChange }: Props<T>) => {
  return (
    <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          aria-pressed={active === filter}
          onClick={() => onChange(filter)}
          className={`border px-4 py-2 text-sm transition-colors ${
            active === filter
              ? "border-white bg-white text-black"
              : "border-white/30 text-white/80 hover:border-white hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
