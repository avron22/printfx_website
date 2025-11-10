import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Infocus from "./pages/Infocus.tsx"; 
import GRWMRR from "./pages/GRWMRR.tsx";
import Contact from "./pages/Contact.tsx";
import Mainboard from "./pages/Mainboard.tsx";
import "./styles.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "mainboard", element: <Mainboard /> },
      { path: "infocus", element: <Infocus />},
      
      { path: "grwmrr", element: <GRWMRR /> },
      { path: "contact", element: <Contact /> }
      
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
