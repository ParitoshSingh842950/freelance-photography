import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Author from "./pages/Author";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Adanna from "./pages/Adanna";
import Options from "./pages/Options";
import Exhibitions from "./pages/Exhibitions";
import Travel from "./pages/Travel";
import Cart from "./pages/Cart";
import Prints from "./pages/Prints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/adanna-eleje",
    element: <Adanna />,
  },
  {
    path: "/options",
    element: <Options />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/exhibition",
    element: <Exhibitions />,
  },
  {
    path: "/travel",
    element: <Travel />,
  },
  {
    path: "/bio",
    element: <Bio />,
  },
  {
    path: "/author",
    element: <Author />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/prints",
    element: <Prints />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
