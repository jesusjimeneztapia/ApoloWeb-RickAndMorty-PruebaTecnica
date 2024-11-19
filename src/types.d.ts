export interface CharacterRequest {
  info: RequestInfo;
  results: Character[];
}

export interface RequestInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type CharacterStatus = "Alive" | "Dead" | "unknown";
export type CharacterSpecie =
  | "Alien"
  | "Animal"
  | "Cronenberg"
  | "Disease"
  | "Human"
  | "Humanoid"
  | "Mythological Creature"
  | "Poopybutthole"
  | "Robot"
  | "unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: CharacterSpecie;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
