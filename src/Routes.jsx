import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import routePaths from "./constants/routes.constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path={routePaths.home} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
