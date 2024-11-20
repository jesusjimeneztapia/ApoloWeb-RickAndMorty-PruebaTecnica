import Menu2Icon from "@icons/Menu2Icon";
import { FC, useState } from "react";
import FilterSelect, { FilterSelectProps } from "./FilterSelect";
import XIcon from "@icons/XIcon";

interface AdvancedFiltersButtonProps {
  filters: FilterSelectProps[];
}

const AdvancedFiltersButton: FC<AdvancedFiltersButtonProps> = ({ filters }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleShowFilters = () => setShowFilters((show) => !show);

  return (
    <>
      <button
        className="relative w-full py-5 bg-ricks-hair-blue shadow rounded text-xs font-medium uppercase text-white"
        onClick={toggleShowFilters}
      >
        <i className="absolute left-4 top-1/2 -translate-y-1/2">
          <Menu2Icon className="size-6" />
        </i>
        Filtros Avanzados
      </button>
      {showFilters && (
        <>
          <div
            className="fixed top-0 left-0 z-50 w-screen h-screen bg-intergalactic-black/75"
            onClick={toggleShowFilters}
          />
          <div className="fixed container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center px-6 py-1.5">
            <section className="container bg-white p-4 rounded shadow">
              <header className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Filtros</h3>
                <button onClick={toggleShowFilters}>
                  <XIcon className="size-6" />
                </button>
              </header>
              <ul className="flex flex-col gap-y-4">
                {filters.map(({ id, name, options, placeholder, query }) => (
                  <li key={id}>
                    <FilterSelect
                      id={id}
                      name={name}
                      options={options}
                      placeholder={placeholder}
                      query={query}
                    />
                  </li>
                ))}
              </ul>
              <footer className="mt-8">
                <button
                  className="relative w-full py-2.5 bg-ricks-hair-blue shadow rounded text-xs font-medium uppercase text-white"
                  onClick={toggleShowFilters}
                >
                  Aplicar
                </button>
              </footer>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default AdvancedFiltersButton;
