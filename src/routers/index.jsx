import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";

import Blog from "../pages/blogs";
import Homepage from "../pages";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);
