import "./App.css";
import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from './pages/users/users';
import Products from './pages/products/products';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import Login from './pages/login/login';

const App = () => {

  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home />
        },
        {
          path: "/users",
          element:<Users />
        },
        {
          path: "/products",
          element:<Products />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
