import { useAuth } from "@/hooks/useAuth";
import type { FC } from "react";
import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";
import { authService } from "@/appwrite/authService";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
];

const Header: FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await authService.logoutUser();
    logout();
  };

  return (
    <header className="header sticky top-0 w-full h-16 p-4 flex items-center justify-between px-20 backdrop-filter backdrop-blur-md opacity-95 text-foreground z-40">
      <div className="flex items-center">
        <h1 className="text-lg font-bold">My Website</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive ? "text-primary" : "text-foreground"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {user ? (
        <div className="flex items-center space-x-4 p-2">
          <div className="p-1 cursor-pointer">
            <Search size={20} />
          </div>
          <div className="p-1 cursor-pointer">
            <Bell size={20} />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="cursor-pointer"
                />
                <AvatarFallback>
                  {user.name.split(" ")[0].substring(0, 1)}
                  {user.name.split(" ")[1].substring(0, 1)}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="z-50">
              <div className="w-64">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3 py-2">
                    <div className="p-2">
                      <img
                        src="https://github.com/shadcn.png"
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <hr className="my-2 border-muted" />
                  <div className="flex flex-col gap-1">
                    <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase">
                      Settings
                    </p>
                    <Link
                      to="/profile"
                      className="px-3 py-2 rounded hover:bg-muted cursor-pointer transition"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-3 py-2 rounded hover:bg-muted cursor-pointer text-left transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <Button
          variant={"default"}
          className="cursor-pointer rounded-3xl"
          asChild
        >
          <Link to="/login">Login</Link>
        </Button>
      )}
    </header>
  );
};

export default Header;
