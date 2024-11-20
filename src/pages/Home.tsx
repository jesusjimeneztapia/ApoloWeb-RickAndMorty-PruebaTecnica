import banner from "@assets/images/banner.webp";
import AdvancedFiltersButton from "@components/home/AdvancedFiltersButton";
import CharactersList from "@components/home/CharactersList";
import FilterByName from "@components/home/FilterByName";
import FilterSelect from "@components/home/FilterSelect";

const FILTERS = [
  {
    id: "filter-by-species",
    name: "species",
    placeholder: "Seleccionar Especie",
    query: "especie",
    options: [
      { value: "alien", label: "Alienígena" },
      { value: "animal", label: "Animal" },
      { value: "cronenberg", label: "Cronenberg" },
      { value: "disease", label: "Enfermedad" },
      { value: "human", label: "Humano" },
      { value: "humanoid", label: "Humanoide" },
      { value: "mythological creature", label: "Criatura Mitológica" },
      { value: "poopybutthole", label: "Poopybutthole" },
      { value: "robot", label: "Robot" },
      { value: "unknown", label: "Desconocido" },
    ],
  },
  {
    id: "filter-by-gender",
    name: "gender",
    placeholder: "Seleccionar Género",
    query: "genero",
    options: [
      { value: "female", label: "Femenino" },
      { value: "male", label: "Masculino" },
      { value: "genderless", label: "Sin Género" },
      { value: "unknown", label: "Desconocido" },
    ],
  },
  {
    id: "filter-by-status",
    name: "status",
    placeholder: "Seleccionar Estado",
    query: "estado",
    options: [
      { value: "alive", label: "Vivo" },
      { value: "dead", label: "Muerto" },
      { value: "unknown", label: "Desconocido" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <picture className="mx-auto">
        <img
          className="aspect-[640/208] max-h-32 lg:max-h-52"
          src={banner}
          alt="Rick y Morty"
        />
      </picture>
      <ul className="grid gap-y-4 md:grid-cols-3 md:gap-x-6 md:gap-y-3 lg:gap-x-4 xl:grid-cols-4 xl:gap-x-5">
        <li className="relative group md:col-span-3 xl:col-span-1">
          <FilterByName />
        </li>
        {FILTERS.map(({ id, name, placeholder, options, query }) => (
          <li key={id} className="hidden group md:inline-block">
            <FilterSelect
              id={id}
              name={name}
              placeholder={placeholder}
              options={options}
              query={query}
            />
          </li>
        ))}
        <li className="md:hidden">
          <AdvancedFiltersButton filters={FILTERS} />
        </li>
      </ul>
      <CharactersList />
    </>
  );
}
