import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "../../page/AuthPage/AuthPage";
import { LandingPage } from "../../page/LandingPage/LandingPage";
import { PrivateRoute } from "./../PrivateRoute/PrivateRoute";

export const AppRoutes = () => {
  React.useEffect(() => {
    console.log("Use router component");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/protected"
        element={
          <PrivateRoute>
            <div>Hello private page</div>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
