import { useEffect } from "react";

import { useFilterForm } from "../../../hooks/useFilterForm";
import { useVehicleStore } from "../../../store/vehicleStore";
import Button from "../../ui/Button";
import Radio from "../../ui/Radio";
import SearchInput from "../../ui/SearchInput";
import Title from "../Title";

function FilterTabs() {
  const { setType, setFilter, type, filter } = useVehicleStore();

  const { register, handleSubmit, watch, formState } = useFilterForm(
    (values) => {
      setType(values.status);
      setFilter(values.search ?? "");
    },
    { status: type, search: filter },
  );

  const status = watch("status");
  const search = watch("search");

  useEffect(() => setType(status), [status, setType]);
  useEffect(() => setFilter(search ?? ""), [search, setFilter]);

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
          <Title title="Lista" />

          <fieldset className="flex gap-5" aria-labelledby="status-legend">
            <legend id="status-legend" className="sr-only">
              Filtrar por status
            </legend>

            <Radio
              id="filtered-tracked"
              value="tracked"
              label="Rastreados"
              checked={status === "tracked"}
              {...register("status")}
            />
            <Radio
              id="filtered-others"
              value="others"
              label="Outros"
              checked={status === "others"}
              {...register("status")}
            />
          </fieldset>
        </div>

        <form
          role="search"
          onSubmit={handleSubmit}
          className="w-full lg:max-w-[445px] flex flex-col md:flex-row items-center gap-4"
        >
          <SearchInput
            placeholder="Buscar por placa ou frota"
            className="w-full md:w-[279px] h-[40px] text-xs text-semibold"
            {...register("search")}
          />

          <Button
            size="lg"
            type="submit"
            className="w-full md:w-[149px] h-[40px] text-xs text-semibold"
          >
            Novo
          </Button>
        </form>
        {formState.errors.search && (
          <p className="text-red-500 text-xs">
            {formState.errors.search.message}
          </p>
        )}
      </header>
    </section>
  );
}

export default FilterTabs;
