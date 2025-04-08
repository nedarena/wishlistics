import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./routes/App/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Landing } from "./routes/Landing/Landing.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);