import { type FC } from "react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import type { Event } from "@/types/event";

const EventCard: FC<{ events: Event[] }> = ({ events }) => {
  const navigate = useNavigate();

  const handleRedirect = (eventId: string) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="space-y-6 py-8">
      {events.map((event) => (
        <div
          className="flex flex-col md:flex-row overflow-hidden rounded-2xl bg-secondary/50 shadow-lg transition-transform duration-300 hover:bg-secondary cursor-pointer"
          key={event.id}
          onClick={() => handleRedirect(event.id)}
        >
          <div
            className="md:w-1/3 w-full bg-center bg-no-repeat aspect-video md:aspect-auto bg-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            style={{
              backgroundImage: `url(${event.poster})`,
            }}
          />
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <p className="text-sm text-primary/80 font-semibold">
                {event.date}
              </p>
              <p className="text-xl font-bold text-primary mt-1">
                {event.title}
              </p>
              <p className="text-sm text-primary/70 mt-2">
                {event.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center text-sm text-primary/60">
                <span className="material-icons text-base mr-1">
                  location_on
                </span>
                <span>{event.location}</span>
              </div>
              <Button variant={"default"}>View Details</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
