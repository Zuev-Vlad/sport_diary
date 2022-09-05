import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AppModel } from "../../../models/AppModel/AppModel";
import { appTemplates } from "../../../state/app/app";
import { STYLE_SIZE_XL } from "../../../utils/StyleTheme/sizes";
import { AppSideBar } from "../../AppSideBar/AppSideBar";
import { AppContent } from "../AppContent/AppContent";
import { AppFooter } from "../AppFooter/AppFooter";
import { AppHeader } from "../AppHeader/AppHeader";

const AppStyleContainer = styled.div`
  display: flex;
  flex: 100% 1 0;
`;
const AppStyleHeaderContainer = styled.div`
  min-height: 70px;
  border-bottom: solid 1px #ccc;
  padding: 1rem;
`;
const AppStyleSidebarContainer = styled.div`
  width: ${STYLE_SIZE_XL.sidebar};
  flex-shrink: 0;
  padding: 1rem;
  border-right: solid 1px #ccc;
`;
const AppStyleContentContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;
const AppFooterContainer = styled.div`
  margin-top: auto;
  padding: 1rem;
  border-top: solid 1px #ccc;
`;

export const AppContainer: React.FC<any> = () => {
  const appModel = new AppModel();
  return (
    <Flex w={"100%"} minH={"100vh"} direction="column">
      {/* Header */}
      {appModel.hasTemplateModule(appTemplates.header) && (
        <AppStyleHeaderContainer>
          <AppHeader />
        </AppStyleHeaderContainer>
      )}
      {/* *** */}

      <AppStyleContainer>
        {/* Sidebar */}
        {appModel.hasTemplateModule(appTemplates.sidebar) && (
          <AppStyleSidebarContainer>
            <AppSideBar />
          </AppStyleSidebarContainer>
        )}
        {/* *** */}

        {/* Content */}
        {appModel.hasTemplateModule(appTemplates.content) && (
          <AppStyleContentContainer>
            <AppContent />
          </AppStyleContentContainer>
        )}
        {/* *** */}
      </AppStyleContainer>
      {/* Footer */}
      {appModel.hasTemplateModule(appTemplates.footer) && (
        <AppFooterContainer>
          <AppFooter />
        </AppFooterContainer>
      )}
      {/* *** */}
    </Flex>
  );
};
