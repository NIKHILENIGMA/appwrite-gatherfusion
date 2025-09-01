import { Client, Databases, ID, Storage } from "appwrite";
import {
  APPWRITE_DATABASE_ID,
  APPWRITE_EVENTS_COLLECTION_ID,
} from "./appwriteConfig";

interface CreateEvent {
  title: string;
  description: string;
  date: string;
  location: string;
}

class EventService {
  private client: Client = new Client();
  private databases: Databases;
  private storage: Storage;
  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT)
      .setDevKey(import.meta.env.VITE_APPWRITE_DEV_KEY);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  public async createEvent(payload: CreateEvent) {
    try {
      const response = await this.databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_EVENTS_COLLECTION_ID,
        ID.unique(),
        payload
      );
      return response;
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    }
  }
}

export const eventService = new EventService();
