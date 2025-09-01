import type { User } from "@/types/auth";
import AuthContext from "@/context/AuthContext";
import {
  useCallback,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import { authService } from "@/appwrite/authService";

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const loggedIn = async (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    loggedIn,
    logout,
  };

  const fetchUser = useCallback(async () => {
    try {
      const currentUser: User | null = await authService.getCurrentUser();
      if (currentUser) {
        loggedIn(currentUser);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
