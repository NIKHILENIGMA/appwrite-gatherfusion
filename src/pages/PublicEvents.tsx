import { events } from "@/contants";

const PublicEvents = () => {
  return (
    <div className="w-2/3 h-[600px] overflow-y-auto bg-red-500 p-4 rounded-lg shadow">
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[var(--secondary)] rounded-lg shadow-md flex flex-col"
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-t-lg h-32 w-full object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[var(--primary)]">
                {event.title}
              </h2>
              <p className="text-sm text-[var(--foreground)]">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[var(--accent)]">
                <span>
                  <strong>Date:</strong>{" "}
                  {new Date(event.date).toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span>
                  <strong>Location:</strong> {event.location}
                </span>
                <span>
                  <strong>Created By:</strong> {event.createdBy}
                </span>
                <span>
                  <strong>Public:</strong> {event.isPublic ? "Yes" : "No"}
                </span>
                <span>
                  <strong>Max Attendees:</strong> {event.maxAttendees}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicEvents;
