// Import the necessary components from the react-router-dom package and other custom components
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav"
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Feed from "./pages/Feeds";
import "./style.scss";
import AboutPage from "./pages/AboutPage";

// Create a Layout component that defines the structure of the web page
const Layout = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <Outlet />
      <Footer />
    </>
  );
};

// Define the application routes and components using the createBrowserRouter function
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // Remember that Home, Single post and Write are the pages that will have a Navbar and a Footer 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/feeds",
    element: <Feed />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

// Define the App function that returns the RouterProvider component that provides the routing context to the entire app
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;
