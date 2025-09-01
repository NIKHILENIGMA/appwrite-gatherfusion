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
    <header className="header sticky top-0 w-full h-20 p-2 flex items-center justify-between bg-transparent text-foreground px-20">
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
          <PopoverContent>
            <div className="flex flex-col gap-2">
              <Button variant="outline" asChild>
                <Link to="/settings">Settings</Link>
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="cursor-pointer"
              >
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Button variant={'default'} className="cursor-pointer rounded-3xl" asChild>
          <Link to="/login">Login</Link>
        </Button>
      )}
    </header>
  );
};

export default Header;
