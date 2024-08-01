import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../../Pages/Home/Home'
import Brand from "../../Pages/Brand/Brand";
import Contact from "../../Pages/Contact/Contact";
import ThankYou from "../../Pages/ThankYou/ThankYou";

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
      element: <Brand />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "thankyou",
      element: <ThankYou />,
    },
  ]);

export default router;
