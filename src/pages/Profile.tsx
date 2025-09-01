import { useState, type FC } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EventForm {
  name: string;
  date: string;
  description: string;
  location: string;
  time: string;
}

const Profile: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [eventForm, setEventForm] = useState<EventForm>({
    name: "",
    date: "",
    description: "",
    location: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-secondary-foreground font-['Spline_Sans',sans-serif]">
      {/* Main */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile card */}
            <div className="bg-[var(--card-bg)] p-8 rounded-2xl text-center shadow-lg border border-[var(--border-color)]">
              <div className="relative inline-block">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJcmAKYTOZUx3WYHv-3_EYT4Zre2KLlF5WMY83htsu7QrpE2r2Qzo8ImfZY_q0LUttNCMac9IVBbEZN_7sZaSnWhUmQevOoZwK7I91EmHVyzdW4SAotxT9Bi-TkP0-PrAcPCEy0Yh0jyOlFDYyTOyBBtzG3kFrKMltruVkWhzSfGljiU4uEubBb_KRR65n70GY2FM_dqGKOZctlHCW97v3kQECetgzxSmdvd89RTUQ_ecdThFYK6KefWDV7HeWwRVrE3jz8cQB6s"
                  alt="Sophia Clark"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[var(--primary-color)]"
                />
                <span className="absolute bottom-2 right-2 bg-[var(--primary-color)] p-1 rounded-full border-2 border-[var(--card-bg)]">
                  <svg
                    className="h-4 w-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 
                      000 16zm3.707-9.293a1 1 0 
                      00-1.414-1.414L9 10.586 
                      7.707 9.293a1 1 0 
                      00-1.414 1.414l2 2a1 1 0 
                      001.414 0l4-4z"
                    />
                  </svg>
                </span>
              </div>
              <h1 className="text-2xl font-bold mt-4">Sophia Clark</h1>
              <p className="text-[var(--text-secondary)]">Event Organizer</p>
              <p className="text-[var(--text-secondary)] text-sm">
                Joined in 2021
              </p>
              <button className="mt-6 w-full bg-[var(--primary-color)] text-black px-6 py-3 rounded-full hover:bg-[var(--secondary-color)] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 font-bold">
                Edit Profile
              </button>
            </div>

            {/* About */}
            <div className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)]">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Sophia is a passionate event organizer with over 5 years of
                experience. She specializes in creating memorable experiences
                and has a keen eye for detail.
              </p>
            </div>

            {/* Social links */}
            <div className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)]">
              <h2 className="text-xl font-bold mb-4">Social Links</h2>
              <div className="flex justify-center gap-4">
                {/* Globe */}
                <a
                  href="#"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors p-3 bg-black/20 rounded-full"
                >
                  🌐
                </a>
                {/* Twitter */}
                <a
                  href="#"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors p-3 bg-black/20 rounded-full"
                >
                  🐦
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors p-3 bg-black/20 rounded-full"
                >
                  📸
                </a>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2 ">
            {/* Tabs */}
            <div className="border-b border-border mb-6 flex items-center justify-between">
              <nav className="flex space-x-6">
                <a
                  className="pb-3 border-b-2 border-primary text-primary font-semibold"
                  href="#"
                >
                  Overview
                </a>
                <a
                  className="pb-3 border-b-2 border-transparent text-accent-foreground hover:text-primary hover:border-primary transition-all"
                  href="#"
                >
                  Registered Events
                </a>
                <a
                  className="pb-3 border-b-2 border-transparent text-accent-foreground hover:text-primary hover:border-primary transition-all"
                  href="#"
                >
                  Past Events
                </a>
              </nav>
              <div className="pb-1">
                <Button
                  variant="default"
                  className="cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <Plus className="mr-0" />
                  Create Event
                </Button>
              </div>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogContent
                onPointerDownOutside={() => setIsOpen(false)}
                onEscapeKeyDown={() => setIsOpen(false)}
              >
                <DialogHeader>
                  <DialogTitle>Create Event</DialogTitle>
                  <div className="mt-4 flex-col flex ">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        // handle form submission here
                      }}
                      className="space-y-6"
                    >
                      <div>
                        <Label
                          htmlFor="event-name"
                          className="block text-sm font-semibold mb-2 text-primary"
                        >
                          Name
                        </Label>
                        <Input
                          type="text"
                          id="event-name"
                          name="name"
                          placeholder="Global AI Summit 2025"
                          value={eventForm.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="event-date"
                          className="block text-sm font-semibold mb-2 text-primary"
                        >
                          Date
                        </label>
                        <Input
                          type="date"
                          id="event-date"
                          name="date"
                          placeholder="Select event date"
                          value={eventForm.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="event-description"
                          className="block text-sm font-semibold mb-2 text-primary"
                        >
                          Description
                        </Label>
                        <Textarea
                          id="event-description"
                          className=" resize-none"
                          placeholder="Enter event description"
                          rows={4}
                          value={eventForm.description}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="event-location"
                          className="block text-sm font-semibold mb-2 text-primary"
                        >
                          Location
                        </label>
                        <Input
                          id="event-location"
                          name="location"
                          placeholder="Mumbai, India"
                          value={eventForm.location}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="event-time"
                          className="block text-sm font-semibold mb-2 text-primary"
                        >
                          Time
                        </Label>
                        <Input
                          id="event-time"
                          name="time"
                          placeholder="17:00 am to 18:00 pm"
                          value={eventForm.time}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </form>
                    <Button type="submit" variant="default" className="mt-4">
                      Next
                    </Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* Events Sections */}
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4">Registered Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Event card */}
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-uZh6dWL40cmOIPBVjQiMHsZ-Rz4lD4Rtg-iXM3PD0IPJhCdg8iOWsYQcckBfEQnXPiLOm_yC7MMffUkpPEF76-qT0TJA0aQFhx_ybC7JEWeXPH_yEqddiZNaIS0woAPIXlnpjAf3wZwTOiwuIc-puLomiJ-gVXBEbCljHAovOuz65otPelgaAZf1fDcx6sJprPc5aPCwJHonvVcxH1csimS9b7AZ1mweeT8UrlsR3E7xUf3h_AEsqML0x67eXkUFGeX2A9cdeA"
                      alt="Tech Conference 2024"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">
                        Tech Conference 2024
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuCIW_7C_prHwxDXzAsRqUKeV1LoIDjK-i6RVIhyT1Sl47m-Ps4rJG8SOpTPkv99L73iBmBgKmPw5oh8qup92c4ilPMHB4y8qn1ldLom5Mylm_0zXhNoumGPx3PAyddxl45ezaaXeAeJPGCPTfaCiXRA_C0ZmiyYSYMJUMiFYgifmHMjE-2-KcAzGK_GwchhxOSxkaQnsrbv1RwUyPQ2860uZDlMOCZdUkdpgVaZxm7BlcenGHsNA0cWsWOHwFfXNQnnDnOu_6e8c"
                      alt="Music Festival 2024"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">Music Festival 2024</h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Los Angeles, CA
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Past Events, Created Events sections... */}
              {/* (Repeat same structure for past/created events as in your HTML) */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
