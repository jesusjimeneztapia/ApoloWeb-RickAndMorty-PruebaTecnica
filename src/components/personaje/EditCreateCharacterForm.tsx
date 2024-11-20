import { DEFAULT_CHARACTER_IMAGE } from "@constants/character";
import { useCharacterForm } from "@hooks/personaje.hooks";
import { FC } from "react";
import { CreateCharacterDto } from "types";

const SELECTS = [
  {
    id: "filter-by-species",
    name: "species",
    placeholer: "Selecciona Especie",
    options: [
      { value: "Alien", label: "Alienígena" },
      { value: "Animal", label: "Animal" },
      { value: "Cronenberg", label: "Cronenberg" },
      { value: "Disease", label: "Enfermedad" },
      { value: "Human", label: "Humano" },
      { value: "Humanoid", label: "Humanoide" },
      { value: "Mythological Creature", label: "Criatura Mitológica" },
      { value: "Poopybutthole", label: "Poopybutthole" },
      { value: "Robot", label: "Robot" },
      { value: "unknown", label: "Desconocido" },
    ],
  },
  {
    id: "filter-by-gender",
    name: "gender",
    placeholer: "Selecciona Género",
    options: [
      { value: "Female", label: "Femenino" },
      { value: "Male", label: "Masculino" },
      { value: "Genderless", label: "Sin Género" },
      { value: "unknown", label: "Desconocido" },
    ],
  },
  {
    id: "filter-by-status",
    name: "status",
    placeholer: "Selecciona Estado",
    options: [
      { value: "Alive", label: "Vivo" },
      { value: "Dead", label: "Muerto" },
      { value: "unknown", label: "Desconocido" },
    ],
  },
];

interface CreateCharacterFormProps {
  character?: CreateCharacterDto;
}

const CreateCharacterForm: FC<CreateCharacterFormProps> = ({ character }) => {
  const form = useCharacterForm({ defaultValues: character });

  return (
    <form
      className={`bg-white/70 p-4 shadow-lg backdrop-blur rounded border md:bg-transparent md:shadow-none md:backdrop-blur-0 md:rounded-none md:border-0 md:row-start-1 lg:p-6`}
      onSubmit={form.handleSubmit as never}
    >
      <h2
        className={`font-get-schwifty font-bold text-3xl mb-4 ${
          character ? "text-ricks-hair-blue" : "text-portal-green"
        }`}
      >
        {character ? "Editar Personaje" : "Crear Personaje"}
      </h2>
      <picture className="block aspect-[312/232] w-full bg-slimy-yellow overflow-hidden rounded mb-4">
        <img
          className="object-cover object-center bg-no-repeat w-full h-full transition-all duration-300 ease-linear group-hover:scale-110"
          src={
            form.watch().image || // eslint-disable-line
            DEFAULT_CHARACTER_IMAGE
          }
          alt="Preview"
        />
      </picture>
      <div className="group mb-4">
        <div className="relative mb-1">
          <input
            id="nombre"
            className={`w-full h-14 py-4 px-4 border rounded-lg ${
              form.formState.errors.name &&
              "border-morty-red text-morty-red placeholder:text-morty-red/45 focus:text-intergalactic-black focus:outline-morty-red"
            }`}
            placeholder="Nombre"
            {...form.register("name")}
          />
        </div>
        <p className="text-sm text-morty-red">
          {form.formState.errors.name?.message}
        </p>
      </div>
      {SELECTS.map(({ id, name, placeholer, options }) => (
        <div key={id} className="mb-4">
          <select
            id={id}
            className={`
              relative bg-white w-full h-14 py-4 px-4 border rounded-lg appearance-none bg-chevron-down bg-no-repeat bg-[calc(100%-12px)] mb-1
              ${
                form.formState.errors[name as keyof CreateCharacterDto] &&
                "border-morty-red text-morty-red focus:text-intergalactic-black focus:outline-morty-red"
              }
            `}
            value={form.getValues()[name as never] ?? ""}
            {...form.register(name as never)}
          >
            <option value="" disabled>
              {placeholer}
            </option>
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <p className="text-sm text-morty-red">
            {form.formState.errors[name as keyof CreateCharacterDto]?.message}
          </p>
        </div>
      ))}
      <div className="group mb-4">
        <div className="relative mb-1">
          <input
            id="image"
            className={`w-full h-14 py-4 px-4 border rounded-lg ${
              form.formState.errors.image &&
              "border-morty-red text-morty-red placeholder:text-morty-red/45 focus:text-intergalactic-black focus:outline-morty-red"
            }`}
            placeholder="URL de la Imagen"
            {...form.register("image")}
          />
        </div>
        <p className="text-sm text-morty-red">
          {form.formState.errors.image?.message}
        </p>
      </div>
      <p className="mb-4 text-morty-red text-sm text-end">
        {form.formState.errors.root?.message}
      </p>
      <button
        className={`w-full uppercase rounded py-3 text-sm font-medium shadow text-white mb-4 disabled:bg-opacity-50 ${
          character ? "bg-ricks-hair-blue" : "bg-portal-green"
        }`}
        type="submit"
        disabled={Object.values(form.formState.errors).length > 0}
      >
        {character ? "Guardar" : "Crear"}
      </button>
    </form>
  );
};

export default CreateCharacterForm;
