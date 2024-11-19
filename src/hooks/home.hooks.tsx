import { useCharactersStore } from "@stores/character.store";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useCharactersList() {
  const characters = useCharactersStore((state) => state.characters);
  const info = useCharactersStore((state) => state.info);
  const loading = useCharactersStore((state) => state.loading);
  const updateCharacters = useCharactersStore(
    (state) => state.updateCharacters
  );

  useEffect(() => {
    // eslint-disable-next-line
    updateCharacters();
    // eslint-disable-next-line
  }, []);

  return { characters, info, loading };
}

export function useCharactersListNavigation() {
  const updateCharacters = useCharactersStore(
    (state) => state.updateCharacters
  );
  const info = useCharactersStore((state) => state.info);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigation = (type: "next" | "prev") => () => {
    const page = Number(searchParams.get("pagina") ?? "1");
    searchParams.set("pagina", `${page + (type === "next" ? 1 : -1)}`);
    setSearchParams(searchParams);
    // eslint-disable-next-line
    updateCharacters();
  };

  return { prev: info?.prev, next: info?.next, handleNavigation };
}

export function useFilterByName() {
  const debounceRef = useRef<number>();
  const [value, setValue] = useState("");
  const updateCharacters = useCharactersStore(
    (state) => state.updateCharacters
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setValue(searchParams.get("nombre") ?? "");
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
    // eslint-disable-next-line
  }, []);

  const onQueryChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    setValue(value);
    const name = value.trim();
    debounceRef.current = setTimeout(() => {
      if (name !== "") {
        searchParams.set("nombre", name);
      } else {
        searchParams.delete("nombre");
      }
      searchParams.delete("pagina");
      setSearchParams(searchParams);
      // eslint-disable-next-line
      updateCharacters();
    }, 350);
  };

  return { onQueryChange, value };
}

export function useFilterSelect({
  name,
  query,
}: {
  name: string;
  query: string;
}) {
  const filters = useCharactersStore((state) => state.filters);
  const updateCharacters = useCharactersStore(
    (state) => state.updateCharacters
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    if (value !== "") {
      searchParams.set(query, value);
    } else {
      searchParams.delete(query);
    }
    searchParams.delete("pagina");
    setSearchParams(searchParams);
    // eslint-disable-next-line
    updateCharacters();
  };

  return { handleChange, value: filters[name as keyof typeof filters] ?? "" };
}
