import * as React from "react";
import { UserModel } from "../../models/UserModel/UserModel";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Auth } from "../../components/Auth/Auth";
import { AppModel } from "../../models/AppModel/AppModel";
import { appTemplates } from "../../state/app/app";
import { APP_COLOR } from "../../styles/app/stylesApp";

const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 5rem auto;
  background-color: ${APP_COLOR.dark};
`;

export const AuthPage = () => {
  const userModel = new UserModel();
  const app = new AppModel();

  if (userModel?.state?.isAuth) {
    return <Navigate to="/home" replace />;
  }

  React.useLayoutEffect(() => {
    const appTmp = { ...appTemplates };
    delete appTmp.sidebar;
    app.setTemplateModule(Object.values(appTmp));

    return () => app.setTemplateModule(app.getState()?.useTemplates);
  }, []);

  return (
    <AuthPageContainer>
      <Auth />
    </AuthPageContainer>
  );
};
