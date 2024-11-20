import {
  deleteUserToken,
  getUserToken,
  login,
  register,
  saveUserToken,
  User,
  validateUserToken,
} from "@services/authService";
import { create } from "zustand";

interface useAuthInterface {
  token: string | null;
  login: (credentials: User) => Promise<void>;
  register: (user: User) => Promise<void>;
  logOut: () => Promise<void>;
}

let token = await getUserToken();
if (token) {
  try {
    const user = await validateUserToken(token);
    await register(user, false);
    // eslint-disable-next-line
  } catch (error) {
    token = null;
  }
}

export const useAuthStore = create<useAuthInterface>((set) => ({
  token,
  login: async (credentials) => {
    const user = await login(credentials);
    const token = await saveUserToken(user);
    set(() => ({ token: token }));
  },
  register: async (user) => {
    const registeredUser = await register(user);
    const token = await saveUserToken(registeredUser);
    set(() => ({ token }));
  },
  logOut: async () => {
    await deleteUserToken();
    set(() => ({ token: null }));
  },
}));
