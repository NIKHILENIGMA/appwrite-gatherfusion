import type { FC } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

const NotFound: FC = () => {
  const navigate = useNavigate();

  // Todo: Style NotFound component
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-destructive mb-4">
        404 - Not Found
      </h1>
      <p className="text-muted-foreground text-lg mb-6">
        The page you are looking for does not exist.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
