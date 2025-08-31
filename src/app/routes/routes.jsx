import { createBrowserRouter } from "react-router";
import App from "../../App";
import Login from "../pages/Login/Login.pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/auth",
        Component: Login,
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Auth Page</h1>,
  },
]);

export default router;
