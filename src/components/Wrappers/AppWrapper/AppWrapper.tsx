import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import * as React from "react";
import styled from 'styled-components'
import { AppModel } from "../../../models/AppModel/AppModel";
import { colorModeType } from "../../../state/app/app";
import { AppHeader } from "../../AppHeader/AppHeader";
import { AppSideBar } from "../../AppSideBar/AppSideBar";

interface AppWrapperProps {
    children: React.ReactNode
}

const AppContainer = styled.div<{ colorMode?: string }>`
    background: ${({ colorMode }) => colorMode == colorModeType.dark ? "#000" : "#fff"};
    color: ${({ colorMode }) => colorMode == colorModeType.dark ? "#fff" : "#000"};
    min-height: 100vh;
    min-width: 100%;
`


export const AppWrapper = ({ children }: AppWrapperProps) => {
    const appModel = new AppModel();

    return (
        <AppContainer colorMode={appModel.getState()?.colorMode}>
            <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                
                <GridItem colSpan={1}>
                    <AppSideBar />
                </GridItem>

                <GridItem colSpan={4}>
                    <AppHeader />
                    <Box maxW='container.xl' mx={'auto'}>
                        {children}
                    </Box>
                </GridItem>

            </Grid>


        </AppContainer>
    )
}