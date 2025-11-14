import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx"; 
import Products from "./pages/Products.tsx";
import Contact from "./pages/Contact.tsx";
import Aboutus from "./pages/Aboutus.tsx";
import "./styles.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutus", element: <Aboutus /> },
      { path: "services", element: <Services />},
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> }
      
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
