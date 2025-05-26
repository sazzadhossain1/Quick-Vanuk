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
