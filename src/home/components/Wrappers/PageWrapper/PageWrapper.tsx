
import * as React from "react"
import { Container } from "react-bootstrap"

export const PageWrapper: React.FC<any> = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )
}