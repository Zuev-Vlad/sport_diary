import { Box } from "@chakra-ui/react";
import * as React from "react";
import { AppRoutes } from "../../../routes/AppRoutes/AppRoutes";

export const AppContent: React.FC<any> = () => {
  return (
    <Box>
      <AppRoutes />
    </Box>
  );
};
