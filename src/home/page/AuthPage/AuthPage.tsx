import * as React from "react";
import { UserModel } from '../../models/UserModel/UserModel';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from '../../components/Auth/Auth';
import { Col, Row } from "react-bootstrap";


const AuthPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
`



export const AuthPage = () => {

    const userModel = new UserModel()

    if (userModel?.state?.isAuth) {
        return <Navigate to="/home" replace />
    }

    return (
        <Row className="mt-3">
            <Col xs={3} className="mx-auto">
                <Auth />
            </Col>
        </Row>
    )
}