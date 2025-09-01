import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layout/MainLayout";
import { LoginPage, Home, Profile, EventPage, PublicEvents, SignupPage } from "@/pages";
import { PublicRoute, ProtectedRoutes, NotFound } from "@/components";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/events",
        element: <PublicEvents />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/events/:eventId",
        element: (
          <PublicRoute>
            <EventPage />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
