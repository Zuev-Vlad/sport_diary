import * as React from "react";
import styled from 'styled-components'

interface AppWrapperProps {
    children: React.ReactNode
}

const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100%;
`

export const AppWrapper = ({ children }: AppWrapperProps) => {
    return (
        <AppContainer>
            {children}
        </AppContainer>
    )
}