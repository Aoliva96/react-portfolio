import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "./Error";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import "./index.css";

// Define routes for app router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
