import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../../Pages/Home/Home'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "creator",
      element: <Home />,
    },
    {
      path: "brand",
      element: <Home />,
    },
    {
      path: "contact",
      element: <Home />,
    },
  ]);

export default router;
