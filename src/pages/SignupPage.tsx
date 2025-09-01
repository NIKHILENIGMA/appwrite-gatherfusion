import { useState, type ChangeEvent, type FC } from "react";
import { Eye, EyeClosed, Terminal } from "lucide-react";
import { authService } from "@/appwrite/authService";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<{
    message: string;
    description: string;
  }>({
    message: "",
    description: "",
  });
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const errorResponse = (err: string) => {
    // Normalize error message for easier matching
    const normalizedErr = err.trim().toUpperCase();

    if (
      normalizedErr.includes(
        "USER WITH THE SAME ID, EMAIL, OR PHONE ALREADY EXISTS"
      )
    ) {
      setError({
        message: "An account with this email already exists.",
        description: `Please try logging in or use a different email address.`,
      });
    } else if (normalizedErr.includes("INVALID_EMAIL")) {
      setError({
        message: "Invalid email address.",
        description: "Please enter a valid email address.",
      });
    } else if (normalizedErr.includes("INVALID `PASSWORD`")) {
      console.log(`Weak password: ${normalizedErr}`);

      setError({
        message: "Weak password.",
        description:
          "Your password is too weak. Please use at least 8 characters, including a number and a symbol.",
      });
    } else {
      setError({
        message: "Unknown error.",
        description:
          "Something went wrong. Please try again or contact support.",
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({ message: "", description: "" });

    try {
      await authService.registerUser({
        email: formData.email,
        password: formData.password,
        name: `${formData.firstName} ${formData.lastName}`,
      });

      const user = await authService.loginUser({
        email: formData.email,
        password: formData.password,
      });

      loggedIn(user);
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error during signup:", (error as Error).message);
      errorResponse((error as Error).message);
      throw error;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      {!!error.message && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50">
          <Alert
            variant="default"
            className="shadow-lg border border-destructive bg-background"
          >
            <Terminal className="mr-2 h-5 w-5 text-destructive" />
            <AlertTitle className="text-destructive font-semibold">
              {error.message}
            </AlertTitle>
            <AlertDescription className="text-muted-foreground">
              {error.description.includes("logging in") ? (
                <div>Please try <Link to="/login" className="text-primary font-medium">logging in</Link> or use a different email address.</div>
              ) : (
                error.description
              )}
            </AlertDescription>
          </Alert>
        </div>
      )}
      <div className="w-full max-w-md rounded-lg bg-card shadow-lg p-8">
        <div className="flex justify-center mb-6">
          {/* Logo */}
          <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                required
              />
            </div>
            <div className="flex-1">
              <Label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                required
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-foreground"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              required
            />
          </div>
          <div className="relative">
            <Label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-foreground"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-foreground hover:underline absolute right-3 top-1/2 transform cursor-pointer"
            >
              {showPassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
          <Button type="submit" variant="default" className="w-full">
            Sign Up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
