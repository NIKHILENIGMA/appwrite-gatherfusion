import { Client, Account, ID } from "appwrite";
import type { User } from "@/types/auth";

interface RegisterUserParams {
  email: string;
  password: string;
  name: string;
}

interface LoginUserParams {
  email: string;
  password: string;
}

class AuthService {
  private client: Client = new Client();
  private account: Account;

  constructor() {
    // Initialize Appwrite client
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
      .setDevKey(import.meta.env.VITE_APPWRITE_DEV_KEY);

    // Initialize Appwrite account
    this.account = new Account(this.client);
  }

  public async registerUser({
    email,
    password,
    name,
  }: RegisterUserParams): Promise<User> {
    try {
      const response = await this.account.create(
        `${ID.unique()}`,
        email,
        password,
        name
      );
      return response;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }

  public async loginUser({ email, password }: LoginUserParams) {
    try {
      await this.account.createEmailPasswordSession(email, password);
      return await this.getCurrentUser();
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  }

  public async logoutUser() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.error("Error logging out user:", error);
      throw error;
    }
  }

  public async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error fetching current user:", error);
      throw error;
    }
  }
}

export const authService = new AuthService();
