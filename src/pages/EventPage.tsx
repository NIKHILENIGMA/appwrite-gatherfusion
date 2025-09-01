import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useParams } from "react-router";
// import { Separator } from "@/components/ui/separator"
import { events } from "@/contants";

export default function EventPage() {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const { eventId } = useParams<{ eventId: string }>();

  const handleRegisterEvent = () => {
    setIsRegistered((prev) => !prev);
  };

  const event = events.find((event) => event.id === eventId);

  return (
    <div className="w-full flex flex-col items-center px-5 md:px-3">
      {/* Header Section */}
      <div className="relative w-full max-w-5xl rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fHww"
          alt="Global Tech Summit"
          className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-12">
          <div className="text-center text-white px-6">
            <h1 className="text-3xl font-bold mb-2">
              Global Tech Summit: Future Innovations
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Calendar size={16} /> October 26, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} /> 9:00 AM - 5:00 PM PST
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={16} /> San Francisco Convention Center, CA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl w-full mt-8 px-4">
        {/* Left - About Event */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">About This Event</h2>
          <p className="text-muted-foreground mb-4">
            {event?.title}
          </p>
          <p className="text-muted-foreground mb-6">
            {event?.description}
            you to drive innovation within your organization.
          </p>
          {isRegistered ? (
            <div className="w-full min-h-32 rounded-2xl bg-muted flex flex-col items-center justify-center p-4 space-y-2">
              <Ticket />
              <h2 className="text-xl font-semibold">
                Successfully Registered!
              </h2>
              <p className="text-muted-foreground text-wrap text-center px-24">
                You are all set for the Global Tech Summit! 2025. A confirmation
                email has been sent to your inbox.
              </p>
              <Button variant={"default"} onClick={handleRegisterEvent} className="cursor-pointer">
                View My Events
              </Button>
            </div>
          ) : (
            <Button variant={"default"} onClick={handleRegisterEvent} className="cursor-pointer">
              Register Now
            </Button>
          )}
        </div>

        {/* Right - Organizer */}
        <Card>
          <CardHeader>
            <CardTitle>Organizer</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Dr. Evelyn Reed"
                className="object-cover"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Dr. Evelyn Reed</p>
              <p className="text-sm text-muted-foreground">
                Lead AI Ethicist, TechForward Institute
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Dr. Reed is a leading voice in ethical AI development and
              responsible innovation. Her work focuses on bridging the gap
              between technological progress and societal well-being. She is
              passionate about fostering a future where technology serves
              humanity equitably.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Event Agenda */}
      <div className="max-w-5xl w-full mt-12 px-4">
        <h2 className="text-xl font-semibold mb-4">Event Agenda</h2>
        <Card>
          <CardContent className="divide-y">
            {[
              {
                time: "9:00 AM - 9:30 AM",
                title: "Opening Keynote: The Dawn of Conscious AI",
              },
              {
                time: "9:30 AM - 11:00 AM",
                title: "Panel Discussion: Sustainable Tech for a Green Future",
              },
              {
                time: "11:00 AM - 12:30 PM",
                title: "Workshop: Building Secure Decentralized Applications",
              },
              { time: "12:30 PM - 1:30 PM", title: "Networking Lunch" },
              {
                time: "1:30 PM - 3:00 PM",
                title:
                  "Breakout Sessions: AI in Healthcare / Quantum Computing Basics",
              },
              {
                time: "3:00 PM - 4:30 PM",
                title:
                  "Fireside Chat: The Future of Remote Work & Digital Collaboration",
              },
              {
                time: "4:30 PM - 5:00 PM",
                title: "Closing Remarks & Future Outlook",
              },
            ].map((item, idx) => (
              <div key={idx} className="py-4">
                <p className="text-sm text-muted-foreground">{item.time}</p>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Venue Details */}
      <div className="max-w-5xl w-full mt-12 px-4">
        <h2 className="text-xl font-semibold mb-4">Venue Details</h2>
        <Card>
          <CardContent className="py-6">
            <p className="font-medium">San Francisco Convention Center</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin size={14} /> 123 Tech Drive, San Francisco, CA 94103
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              A state-of-the-art facility located in the heart of Silicon
              Valley, featuring expansive conference halls, modern meeting
              rooms, and advanced AV technology. Easily accessible by public
              transport and offers ample parking.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Related Events */}
      <div className="max-w-5xl w-full mt-12 px-4 mb-16">
        <h2 className="text-xl font-semibold mb-4">Related Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "AI & Robotics Expo 2024",
              date: "November 15, 2024",
              img: "/related1.jpg",
            },
            {
              title: "Cybersecurity Congress",
              date: "December 2, 2024",
              img: "/related2.jpg",
            },
            {
              title: "Space Exploration Forum",
              date: "January 10, 2025",
              img: "/related3.jpg",
            },
            {
              title: "Data Science Symposium",
              date: "February 5, 2025",
              img: "/related4.jpg",
            },
          ].map((event, idx) => (
            <Card key={idx} className="overflow-hidden">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-32 object-cover"
              />
              <CardContent className="p-4">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
