import { useState } from "react";

import Button from "../../ui/Button";
import Radio from "../../ui/Radio";
import SearchInput from "../../ui/SearchInput";
import TitlePage from "../Title";

function FilterTabs() {
  const [filter, setFilter] = useState<"tracked" | "others">("tracked");

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value as "tracked" | "others");
  }

  return (
    <section
      aria-labelledby="filter-heading"
      className="flex items-center w-full h-[200px] md:h-[140px] lg:h-[80px] px-8 my-2"
    >
      <header
        id="filter-heading"
        className="w-full h-full border-b border-tertiary gap-3 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <div className="w-full ls:max-w-[445px] flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-30">
          <TitlePage title="Lista" />

          <fieldset className="flex gap-5" aria-labelledby="status-legend">
            <legend id="status-legend" className="sr-only">
              Filtrar por status
            </legend>

            <Radio
              id="filtered-tracked"
              name="status"
              value="tracked"
              label="Rastreados"
              checked={filter === "tracked"}
              onChange={handleFilterChange}
            />
            <Radio
              id="filtered-others"
              name="status"
              value="others"
              label="Outros"
              checked={filter === "others"}
              onChange={handleFilterChange}
            />
          </fieldset>
        </div>

        <form
          role="search"
          className="w-full lg:max-w-[445px] flex flex-col md:flex-row items-center gap-4"
        >
          <SearchInput
            placeholder="Buscar por placa ou frota"
            className="w-full md:w-[279px] h-[40px] text-xs text-semibold"
          />

          <Button
            size="lg"
            type="submit"
            className="w-full md:w-[149px] h-[40px] text-xs text-semibold"
          >
            Novo
          </Button>
        </form>
      </header>
    </section>
  );
}

export default FilterTabs;
