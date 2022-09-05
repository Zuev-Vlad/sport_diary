import * as React from "react";
import { UserModel } from "../../models/UserModel/UserModel";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Auth } from "../../components/Auth/Auth";
import { AppModel } from "../../models/AppModel/AppModel";
import { appTemplates } from "../../state/app/app";

const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  background: #232c47;
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
      <div className="mx-auto">
        <Auth />
      </div>
    </AuthPageContainer>
  );
};
