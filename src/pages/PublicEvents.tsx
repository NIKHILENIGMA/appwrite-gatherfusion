// import { useEffect, useState } from "react";
// import { eventService } from "@/appwrite/eventService";
import { EventCard, UpcomingCard } from "@/components";

import { events } from "@/contants";

// interface Event {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
//   location: string;
//   poster: string;
//   createdBy: string;
//   isPublic: boolean;
//   maxAttendees: number;
// }

const PublicEvents = () => {
  // const [events, setEvents] = useState<Event[]>([]);

  // const fetchEvents = async () => {
  //   try {
  //     const response = await eventService.getEvents();
  //     console.log(response.rows);
  //     setEvents(
  //       response.rows.map((e) => ({
  //         id: e.$id,
  //         title: e.title,
  //         description: e.description,
  //         date: e.date,
  //         location: e.location,
  //         createdBy: e.createdBy,
  //         isPublic: e.isPublic,
  //         maxAttendees: e.maxAttendees,
  //         poster: e.poster || "https://via.placeholder.com/150",
  //       }))
  //     );
  //   } catch (error) {
  //     console.error("Error fetching events:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-background text-primary">
      <div className="container flex h-full grow flex-col">
        {/* Main */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="mx-auto max-w-7xl">
            {/* Title */}
            <div className="mb-8 px-2">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                Events
              </h1>
            </div>

            {/* Upcoming Events */}
            <div className="mb-8 px-2">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                Upcoming Events
              </h2>
              <UpcomingCard />
            </div>

            {/* Tabs */}
            <div className="mt-12">
              <div className="border-b border-[var(--accent-color)]">
                <nav className="-mb-px flex space-x-6 px-2" aria-label="Tabs">
                  <a className="border-b-2 border-[var(--primary-color)] px-1 pb-3 text-sm font-semibold text-[var(--primary-color)]">
                    All Events
                  </a>
                  <a className="border-b-2 border-transparent px-1 pb-3 text-sm font-semibold text-[var(--text-secondary)] hover:border-gray-500 hover:text-white">
                    Featured
                  </a>
                  <a className="border-b-2 border-transparent px-1 pb-3 text-sm font-semibold text-[var(--text-secondary)] hover:border-gray-500 hover:text-white">
                    Past
                  </a>
                </nav>
              </div>
            </div>

            {/* Events List (example card) */}
            <EventCard events={events} />

            {/* Pagination */}
            <nav
              className="flex items-center justify-center space-x-2 pt-8"
              aria-label="Pagination"
            >
              <a className="inline-flex items-center justify-center rounded-md border border-[var(--accent-color)] bg-[var(--secondary-color)] px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--accent-color)]">
                <span className="material-icons text-lg">chevron_left</span>
              </a>
              <a className="inline-flex items-center justify-center rounded-md border border-[var(--primary-color)] bg-[var(--primary-color)] px-3 py-1.5 text-sm font-medium text-[var(--background-color)]">
                1
              </a>
              <a className="inline-flex items-center justify-center rounded-md border border-[var(--accent-color)] bg-[var(--secondary-color)] px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--accent-color)]">
                2
              </a>
              <a className="inline-flex items-center justify-center rounded-md border border-[var(--accent-color)] bg-[var(--secondary-color)] px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--accent-color)]">
                3
              </a>
              <span className="text-[var(--text-secondary)]">...</span>
              <a className="inline-flex items-center justify-center rounded-md border border-[var(--accent-color)] bg-[var(--secondary-color)] px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--accent-color)]">
                8
              </a>
              <a className="inline-flex items-center justify-center rounded-md border border-[var(--accent-color)] bg-[var(--secondary-color)] px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--accent-color)]">
                <span className="material-icons text-lg">chevron_right</span>
              </a>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PublicEvents;
