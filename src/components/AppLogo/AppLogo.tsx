import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import { pagesPath } from "../../routes/routesConfig";

export const AppLogo = () => {
  return (
    <Link to={pagesPath.index}>
      <Box>Logo</Box>
    </Link>
  );
};
