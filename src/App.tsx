import AppLayout from "@layouts/AppLayout";
import EditCreate from "@pages/EditCreate";
import HomePage from "@pages/Home";
import Login from "@pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <AppLayout protected>
          <HomePage />
        </AppLayout>
      ),
    },
    {
      path: "/autenticacion",
      element: (
        <AppLayout>
          <Login />
        </AppLayout>
      ),
    },
    {
      path: "/personaje",
      element: (
        <AppLayout protected>
          <EditCreate />
        </AppLayout>
      ),
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
