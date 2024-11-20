export class CharacterNotFoundError extends Error {
  constructor(message = "Character Not Found") {
    super(message);
    this.name = "CharacterNotFoundError";
  }
}
