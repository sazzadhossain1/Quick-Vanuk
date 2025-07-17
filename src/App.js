import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import BookAVan from "./components/BookAVan/BookAVan";
import AboutUs from "./components/AboutUs/AboutUs";
import BecomeADriver from "./components/BecomeADriver/BecomeADriver";
import Faqs from "./components/Faqs/Faqs";
import ContactUs from "./components/ContactUs/ContactUs";
import Service from "./components/Service/Service";
import ServiceInnerPage from "./components/ServiceInnerPage/ServiceInnerPage";
import ServicePriceInnerPage from "./components/ServicePriceInnerPage/ServicePriceInnerPage";
import News from "./components/News/News";
import Career from "./components/Career/Career";
import Business from "./components/Business/Business";
import Sustainabillity from "./components/Sustainabillity/Sustainabillity";
import Media from "./components/Media/Media";
import Sponsorship from "./components/Sponsorship/Sponsorship";
import Contact from "./components/Contact/Contact";
import Sitemap from "./components/Sitemap/Sitemap";
import CookiePolicy from "./components/CookiePolicy/CookiePolicy";
import DataPrivacy from "./components/DataPrivacy/DataPrivacy";
import ExclusionOfLiabillty from "./components/ExclusionOfLiabillty/ExclusionOfLiabillty";
import Imprint from "./components/Imprint/Imprint";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/pricing",
          element: <Pricing></Pricing>,
        },
        {
          path: "/bookAVan",
          element: <BookAVan></BookAVan>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/becomeADriver",
          element: <BecomeADriver></BecomeADriver>,
        },
        {
          path: "/faqs",
          element: <Faqs></Faqs>,
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/service",
          element: <Service></Service>,
        },
        {
          path: "/serviceInnerPage",
          element: <ServiceInnerPage></ServiceInnerPage>,
        },
        {
          path: "/servicePriceInnerPage",
          element: <ServicePriceInnerPage></ServicePriceInnerPage>,
        },
        {
          path: "/news",
          element: <News></News>,
        },
        {
          path: "/career",
          element: <Career></Career>,
        },
        {
          path: "/business",
          element: <Business></Business>,
        },
        {
          path: "/sustainabillity",
          element: <Sustainabillity></Sustainabillity>,
        },
        {
          path: "/media",
          element: <Media></Media>,
        },
        {
          path: "/sponsorship",
          element: <Sponsorship></Sponsorship>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/sitemap",
          element: <Sitemap />,
        },
        {
          path: "/cookiePolicy",
          element: <CookiePolicy />,
        },
        {
          path: "/dataPrivacy",
          element: <DataPrivacy />,
        },
        {
          path: "/exclusionOfLiabillty",
          element: <ExclusionOfLiabillty />,
        },
        {
          path: "/imprint",
          element: <Imprint />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
