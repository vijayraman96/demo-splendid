import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../../Pages/Home/Home'
import Brand from "../../Pages/Brand/Brand";
import Contact from "../../Pages/Contact/Contact";
import ThankYou from "../../Pages/ThankYou/ThankYou";
import Creator from "../../Pages/Creator/Creator";
import StoreFront from "../../Pages/StoreFront/StoreFront/StoreFront";
import Store from "../../Pages/StoreFront/Store";
import Explore from "../../Pages/Explore/Explore";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "creator",
      element: <Creator />,
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
    {
      path: "creator-storefront",
      element: <Store />,
    },
    {
      path: "explore",
      element: <Explore />,
    },
  ]);

export default router;
