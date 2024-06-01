import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/news/:id",
        element: <PrivateRoutes>
          <News />
        </PrivateRoutes>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
