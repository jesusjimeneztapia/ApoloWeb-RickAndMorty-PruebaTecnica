import { getCharactersProps } from "@services/characterService";

type QueryFiltersKeys = keyof getCharactersProps["query"];

export const QUERY_FILTERS: Record<string, QueryFiltersKeys> = {
  nombre: "name",
  especie: "species",
  genero: "gender",
  estado: "status",
  pagina: "page",
} as const;
