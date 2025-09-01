import type { Models } from "appwrite";


export type User = Models.User<Models.Preferences>;

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  loggedIn: (user: User) => Promise<void>;
  logout: () => Promise<void>;
};