import { QUERY_FILTERS } from "@constants/queryFilters";
import {
  createCharacter,
  CreatedCharacter,
  getCharacterById,
  getCharacters,
  getCharactersProps,
  getCreatedCharacters,
  updateCharacter,
} from "@services/characterService";
import {
  Character,
  CharacterDto,
  CreateCharacterDto,
  RequestInfo,
} from "types";
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

interface useACharacterStoreInterface {
  loading: boolean;
  character: CharacterDto | null;
  findCharacter: (id: number | string) => Promise<void>;
  createCharacter: (character: CreateCharacterDto) => Promise<void>;
  updateCharacter: (character: CreateCharacterDto) => Promise<void>;
  reset: () => Promise<void>;
}

export const useACharacterStore = create<useACharacterStoreInterface>(
  (set, get) => ({
    loading: true,
    character: null,
    findCharacter: async (id) => {
      set(() => ({ loading: true }));
      const character = (await getCharacterById(id)) as never;
      set(() => ({ character, loading: false }));
    },
    createCharacter: async (character) => {
      await createCharacter(character);
    },
    updateCharacter: async (characterDto) => {
      const { character } = get();
      await updateCharacter(character?.id as never, characterDto);
    },
    reset: async () => {
      set(() => ({ loading: true }));
      await Promise.resolve(set(() => ({ character: null })));
      set(() => ({ loading: false }));
    },
  })
);

interface useCreatedCharactersStoreInterface {
  loading: boolean;
  characters: CreatedCharacter[] | null;
  updateCharacters: () => Promise<void>;
}

export const useCreatedCharactersStore =
  create<useCreatedCharactersStoreInterface>((set) => ({
    loading: true,
    characters: null,
    updateCharacters: async () => {
      set(() => ({ loading: true }));
      const characters = await getCreatedCharacters();
      set(() => ({ characters, loading: false }));
    },
  }));
