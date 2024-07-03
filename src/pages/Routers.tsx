import { FC, ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./Login"));

const AppRoutes: FC = (): ReactElement => {
  return (
    <Suspense>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
