import { Flex } from "@chakra-ui/react";
import * as React from "react";
import styled from "styled-components";
import { STYLE_SIZE_XL } from "../../../utils/StyleTheme/sizes";
import { AppLogo } from "../../AppLogo/AppLogo";
import { HeaderMenu } from "../../Menu/HeaderMenu/HeaderMenu";
import { UserAccount } from "../../User/UserAccount/UserAccount";

const LogoWrapper = styled.div`
  max-width: ${STYLE_SIZE_XL};
  margin-right: auto;
`;
const HeaderMenuWrapper = styled.div``;

const UserAccountWrapper = styled.div`
  padding-left: 1rem;
`;

export const AppHeader: React.FC<any> = () => {
  return (
    <Flex justifyContent={"flex-end"}>
      {/* Logo */}
      <LogoWrapper>
        <AppLogo />
      </LogoWrapper>

      {/* HeaderMenu */}
      <HeaderMenuWrapper>
        <HeaderMenu>
          <HeaderMenu.Item />
        </HeaderMenu>
      </HeaderMenuWrapper>

      {/* UserAccount */}
      <UserAccountWrapper>
        <UserAccount />
      </UserAccountWrapper>
    </Flex>
  );
};
