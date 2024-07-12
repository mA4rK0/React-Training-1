import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";

import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import Homepage from "../pages";
import About from "../pages/about";

import ErrorPage from "../components/errorPage";
import { posts, postById } from "../apis/loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
