import * as React from "react";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./routes/AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "./components/AppTemplate/AppContainer/AppContainer";

export const App = () => {
  return (
    <RecoilRoot>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
    </RecoilRoot>
  );
};
