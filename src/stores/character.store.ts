import { QUERY_FILTERS } from "@constants/queryFilters";
import { getCharacters, getCharactersProps } from "@services/characterService";
import { Character, RequestInfo } from "types";
import { create } from "zustand";

interface useCharactersInterface {
  loading: boolean;
  info: RequestInfo | null;
  characters: Character[] | null;
  filters: getCharactersProps["query"];
  updateCharacters: () => Promise<void>;
  updateFilters: () => void;
}

export const useCharactersStore = create<useCharactersInterface>(
  (set, get) => ({
    loading: true,
    info: null,
    characters: [],
    filters: {},
    updateCharacters: async () => {
      set(() => ({ info: null, loading: true }));
      const { updateFilters } = get();
      updateFilters();
      const { filters } = get();
      try {
        const response = await getCharacters({ query: filters });
        set(() => ({
          characters: [...response!.results],
          info: response!.info,
          loading: false,
        }));
        // eslint-disable-next-line
      } catch (error) {
        set(() => ({ characters: null, info: null, loading: false }));
      }
    },
    updateFilters: () => {
      const searchParams = location.search
        .replace("?", "")
        .split("&")
        .map((search) => search.split("="));

      const filters: Partial<getCharactersProps["query"]> = {};
      searchParams.forEach(([key, value]) => {
        if (value != null && value !== "") {
          const queryKey = QUERY_FILTERS[key];
          filters[queryKey] = value.replace(/\+/g, " ") as never;
        }
      });

      set(() => ({ filters }));
    },
  })
);
