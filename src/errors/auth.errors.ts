export class UserAlreadyExistsError extends Error {
  constructor(message = "User Already Exists") {
    super(message);
    this.name = "UserAlreadyExistsError";
  }
}

export class UserNotFoundError extends Error {
  constructor(message = "User Not Found") {
    super(message);
    this.name = "UserNotFoundError";
  }
}

export class InvalidPasswordError extends Error {
  constructor(message = "Invalid Password Error") {
    super(message);
    this.name = "InvalidPasswordError";
  }
}

export class InvalidTokenError extends Error {
  constructor(message = "Invalid Token Error") {
    super(message);
    this.name = "InvalidTokenError";
  }
}
