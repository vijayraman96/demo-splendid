import * as ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Brand from "../../Pages/Brand/Brand";
import Contact from "../../Pages/Contact/Contact";
import ThankYou from "../../Pages/ThankYou/ThankYou";
import Creator from "../../Pages/Creator/Creator";
import StoreFront from "../../Pages/StoreFront/StoreFront/StoreFront";
import Store from "../../Pages/StoreFront/Store";
import Explore from "../../Pages/Explore/Explore";
import About from "../../Pages/About/About";
import Privacy from "../../Pages/Privacy/Privacy";
import Terms from "../../Pages/Terms/Terms";
import ExploreBrand from "../../Pages/ExploreBrand/ExploreBrand";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "creator",
//     element: <Creator />,
//   },
//   {
//     path: "brand",
//     element: <Brand />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
//   {
//     path: "thankyou",
//     element: <ThankYou />,
//   },
//   {
//     path: "creator-storefront",
//     element: <Store />,
//   },
//   {
//     path: "explore",
//     element: (
//       <>
//         <Explore />
//         <Outlet />
//       </>
//     ),
//     children: [
//       {
//         path: "brand/:id",
//         element: (
//           <>
//             <ExploreBrand /> <Outlet />
//           </>
//         ),
//       },
//     ],
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "terms-conditions",
//     element: <Terms />,
//   },
//   {
//     path: "privacy-policy",
//     element: <Privacy />,
//   },
// ]);
const router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
        </Route>
        <Route path="/creator">
          <Route index={true} element={<Creator />} />
        </Route>
        <Route path="/brand">
          <Route index={true} element={<Brand />} />
        </Route>
        <Route path="/contact">
          <Route index={true} element={<Contact />} />
        </Route>
        <Route path="/thankyou">
          <Route index={true} element={<ThankYou />} />
        </Route>
        <Route path="/creator-storefront">
          <Route index={true} element={<Store />} />
        </Route>
        <Route path="/explore">
          <Route index={true} element={<Explore />} />
          <Route index={false} path="brand/:id" element={<ExploreBrand />} />
          {/* <Route index={false} path="new" element={<NewTeamForm />} /> */}
        </Route>
        <Route path="/about">
          <Route index={true} element={<About />} />
        </Route>
        <Route path="/terms-conditions">
          <Route index={true} element={<Terms />} />
        </Route>
        <Route path="/privacy-policy">
          <Route index={true} element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default router;
