import { authService } from "@/appwrite/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useState, type FC } from "react";
import { useLocation, useNavigate } from "react-router";

const LoginPage: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = await authService.loginUser({
      email: formData.email,
      password: formData.password,
    });

    loggedIn(user);
    setFormData({ email: "", password: "" });

    // Redirect to the homepage after login
    navigate(from, { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm p-6 bg-background rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Login
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadcn-input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadcn-input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" variant="default" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-foreground">
            New user?{" "}
            <a href="/signup" className="text-primary hover:underline">
              Create an account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
