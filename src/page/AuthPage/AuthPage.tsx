import * as React from "react";
import { UserModel } from '../../models/UserModel/UserModel';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from '../../components/Auth/Auth';


const AuthPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
    background: #232c47;
`



export const AuthPage = () => {

    const userModel = new UserModel()

    if (userModel?.state?.isAuth) {
        return <Navigate to="/home" replace />
    }

    return (
        <AuthPageContainer>
            <div className="mx-auto">
                <Auth />
            </div>
        </AuthPageContainer>
    )
}