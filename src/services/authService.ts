import {
  InvalidPasswordError,
  InvalidTokenError,
  UserAlreadyExistsError,
  UserNotFoundError,
} from "@errors/auth.errors";

export interface User {
  email: string;
  password: string;
}

let users: User[] = [];

async function findUserByEmail(email: string) {
  return await Promise.resolve(users.find((user) => user.email === email));
}

async function registerUser(
  { email, password }: User,
  encryptPassword: boolean
) {
  const foundUser = await findUserByEmail(email);
  if (foundUser) {
    throw new UserAlreadyExistsError(); // eslint-disable-line
  }
  let userPassword = password;
  if (encryptPassword) {
    userPassword = btoa(password);
  }
  users = [...users, { email, password: userPassword }];
  return { email, password: userPassword };
}

function validatePassword(encryptedPassword: string, password: string) {
  const isValid = atob(encryptedPassword) === password;
  if (!isValid) {
    throw new InvalidPasswordError(); // eslint-disable-line
  }
}

export async function login({ email, password }: User) {
  const foundUser = await findUserByEmail(email);
  if (!foundUser) {
    throw new UserNotFoundError(); // eslint-disable-line
  }
  validatePassword(foundUser.password, password);
  return foundUser;
}

export async function register(user: User, encryptPassword = true) {
  const createdUser = await registerUser(user, encryptPassword);
  return createdUser;
}

export async function getUserToken() {
  return await Promise.resolve(localStorage.getItem("token"));
}

export async function validateUserToken(token: string) {
  try {
    const user = JSON.parse(token) as User;
    if (user == null || !("email" in user && "password" in user)) {
      // eslint-disable-next-line
      throw new InvalidTokenError();
    }
    return await Promise.resolve(user);
    // eslint-disable-next-line
  } catch (error) {
    // eslint-disable-next-line
    throw new InvalidTokenError();
  }
}

export async function saveUserToken(user: User) {
  const token = JSON.stringify(user);
  localStorage.setItem("token", token);
  return await Promise.resolve(token);
}

export async function deleteUserToken() {
  return await Promise.resolve(localStorage.removeItem("token"));
}
