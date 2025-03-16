import ReactDom from "react-dom/client";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Herosection from "./Components/Herosection.jsx/Herosection.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Footer from "./Components/Footer/footer.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./Components/About/About.jsx";
import Service from "./Components/Service/Service.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {}
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Herosection />
      {/* <Collections /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
