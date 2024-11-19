import { useFilterByName } from "@hooks/home.hooks";
import SearchIcon from "@icons/SearchIcon";

export default function FilterByName() {
  const { onQueryChange, value } = useFilterByName();

  return (
    <>
      <label
        className="text-intergalactic-black/50 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-intergalactic-black"
        htmlFor="search-by-name"
      >
        <SearchIcon className="size-6" />
      </label>
      <input
        id="search-by-name"
        name="name"
        className="w-full h-14 py-4 pl-12 pr-4 border rounded-lg"
        type="text"
        placeholder="Filtrar por nombre..."
        onChange={onQueryChange}
        value={value}
      />
    </>
  );
}
