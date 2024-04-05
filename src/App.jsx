import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Author from "./pages/Author";
import Bio from "./pages/Bio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/author",
    element: <Author />,
  },
  {
    path: "/bio",
    element: <Bio />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
