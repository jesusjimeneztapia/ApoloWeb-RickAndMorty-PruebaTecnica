import { CharacterRequest, CreateCharacterDto } from "types";
import { api } from "./api";
import { CharacterNotFoundError } from "@errors/character.erros";
import { v4 as uuid } from "uuid";

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

export interface CreatedCharacter extends CreateCharacterDto {
  id: string;
}

const CREATED_CHARACTER_EXAMPLE: CreatedCharacter = {
  id: "",
  name: "",
  gender: "Female",
  species: "Alien",
  status: "Alive",
  image: "",
};

let createdCharacters: CreatedCharacter[] = [];

export async function getCharacters({ query: params }: getCharactersProps) {
  const response = await api.get("/character", { params });
  const data = response.data as CharacterRequest | null;
  return data;
}

export async function getCreatedCharacterById(id: string) {
  const foundCharacter = createdCharacters.find(
    (character) => character.id === id
  );
  if (!foundCharacter) {
    throw new CharacterNotFoundError();
  }
  return await Promise.resolve(foundCharacter);
}

export async function getCharacterById(id: number | string) {
  const characterId = Number(id);
  if (isNaN(characterId)) {
    return await getCreatedCharacterById(id.toString());
  }
  const response = await api.get(`/character/${id}`);
  const data = response.data as CharacterRequest | null;
  return data;
}

export async function getCreatedCharacters() {
  const stringCharacters = localStorage.getItem("characters");
  if (stringCharacters == null) {
    return null;
  }
  try {
    const localCharacters = JSON.parse(stringCharacters) as CreatedCharacter[];
    if (!(localCharacters instanceof Array)) {
      throw new Error();
    }
    for (const character of localCharacters) {
      for (const key of Object.keys(CREATED_CHARACTER_EXAMPLE)) {
        if (!(key in character)) {
          throw new Error();
        }
      }
    }
    createdCharacters = localCharacters;
    return Promise.resolve(localCharacters);
    // eslint-disable-next-line
  } catch (error) {
    localStorage.removeItem("characters");
    return null;
  }
}

async function saveCharacter(character: CreateCharacterDto) {
  const id = uuid();
  const newCharacter = { id, ...character };
  createdCharacters = [newCharacter, ...createdCharacters].slice(0, 4);
  localStorage.setItem("characters", JSON.stringify(createdCharacters));
  return await Promise.resolve(newCharacter);
}

export async function createCharacter(character: CreateCharacterDto) {
  return await saveCharacter(character);
}

export async function updateCharacter(
  id: string,
  character: CreateCharacterDto
) {
  const characterIndex = createdCharacters.findIndex(
    (character) => character.id === id
  );
  if (characterIndex < 0) {
    throw new CharacterNotFoundError();
  }
  const updatedCharacter = { id, ...character };
  createdCharacters[characterIndex] = updatedCharacter;
  localStorage.setItem("characters", JSON.stringify([...createdCharacters]));
  return await Promise.resolve(updatedCharacter);
}
