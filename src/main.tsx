import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router";
import { Landing } from "@/routes/Landing/Landing";
import { App } from "@/routes/App/App";
import { Auth } from "@/routes/Auth/Auth";
import { Login } from "./layout/Login/Login";
import { Registration } from "./layout/Registration/Registration";
import './index.scss';

// Защищенный маршрут - перенаправляет на главную, если пользователь не авторизован
const ProtectedRoute = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

// Маршрут для неавторизованных - перенаправляет в приложение, если пользователь авторизован
const PublicRoute = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/app" replace />
  }

  return <Outlet />
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        path: "auth",
        Component: Auth,
        children: [
          {
            path: 'login',
            element: <Login/>
          },
          {
            path: 'registration',
            element: <Registration />
          }
        ]
      },
    ],
  },
  {
    path: "/app",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);