import { Client, ID, Query, TablesDB } from "appwrite";
import {
  APPWRITE_DATABASE_ID,
  APPWRITE_EVENTS_TABLE_ID,
} from "./appwriteConfig";

interface CreateEvent {
  title: string;
  description: string;
  date: string;
  location: string;
  isPublic: boolean;
  createdBy: string;
}

class EventService {
  private client: Client = new Client();
  private tablesDB: TablesDB;
  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT)
      .setDevKey(import.meta.env.VITE_APPWRITE_DEV_KEY);
    this.tablesDB = new TablesDB(this.client);
  }

  public async createEvent({
    title,
    description,
    date,
    location,
    isPublic,
    createdBy,
  }: CreateEvent) {
    try {
      const response = await this.tablesDB.createRow({
        databaseId: APPWRITE_DATABASE_ID, // database ID
        tableId: APPWRITE_EVENTS_TABLE_ID, // table ID
        rowId: ID.unique(), // document ID
        data: {
          title,
          description,
          date,
          location,
          isPublic,
          createdBy,
        },
      });
      return response;
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    }
  }

  public async getEvents() {
    try {
      const response = await this.tablesDB.listRows({
        databaseId: APPWRITE_DATABASE_ID,
        tableId: APPWRITE_EVENTS_TABLE_ID,
        queries: [Query.orderDesc("$createdAt")],
      });
      return response;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  }
}

export const eventService = new EventService();
