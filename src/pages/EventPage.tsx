import type { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type EventDetails = {
    name: string;
    description: string;
    date: string;
    location: string;
    image: string;
    maxAttendees: number;
};

const event: EventDetails = {
    name: "React Conference 2024",
    description: "Join us for a day of React talks and networking.",
    date: "2024-08-15",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    maxAttendees: 300,
};

const EventPage: FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <Card className="max-w-md w-full shadow-lg">
                <CardHeader>
                    <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-48 object-cover rounded-t-md"
                    />
                    <CardTitle className="mt-4 text-primary">{event.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-2">{event.description}</p>
                    <div className="mb-2">
                        <span className="font-semibold">Date:</span> {event.date}
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Location:</span> {event.location}
                    </div>
                    <div>
                        <span className="font-semibold">Max Attendees:</span> {event.maxAttendees}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EventPage;
