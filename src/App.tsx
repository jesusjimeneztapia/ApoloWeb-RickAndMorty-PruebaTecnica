import HomePage from "@pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
