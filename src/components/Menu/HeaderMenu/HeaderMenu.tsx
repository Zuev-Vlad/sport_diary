import { Link as ChakraLink } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { pagesPath } from "../../../routes/routesConfig";

interface HeaderMenuProps {
  children: React.ReactNode;
}

const HeaderMenuWrapper = styled.ul`
  display: flex;
`;

export function HeaderMenu({ children }: HeaderMenuProps) {
  return <HeaderMenuWrapper>{children}</HeaderMenuWrapper>;
}

const HeaderMenuItem = () => {
  return <Link to={pagesPath.auth}>Auth</Link>;
};

HeaderMenu.Item = HeaderMenuItem;
