import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Author from "./pages/Author";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Collection />
        <Bio />
        <Contact />
      </>
    ),
  },
  {
    path: "/collection",
    element: <Author />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
