import { CharacterRequest } from "types";
import { api } from "./api";

export interface getCharactersProps {
  query: {
    name?: string;
    status?: "alive" | "dead" | "unknown";
    species?: string;
    gender?: "female" | "male" | "genderless" | "unknown";

    page?: number;
  };
}
export type QueryKey = keyof getCharactersProps["query"];

export async function getCharacters({ query: params }: getCharactersProps) {
  const response = await api.get("/character", { params });
  const data = response.data as CharacterRequest | null;
  return data;
}
