export type Event = {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string
  location: string;
  createdBy: string;
  isPublic: boolean;
  maxAttendees: number;
  image: string;
};