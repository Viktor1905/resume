import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Skills } from "./pages/Skills.tsx";
import { Contacts } from "./pages/Contacts.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);
