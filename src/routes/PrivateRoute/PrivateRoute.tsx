import * as React from "react";
import { Navigate } from "react-router-dom";
import { UserModel } from "../../models/UserModel/UserModel";
import { pagesPath } from "../routesConfig";


export const PrivateRoute: React.FC<any> = ({ children }) => {
    const userModel = new UserModel()

    React.useLayoutEffect(() => {
        console.log("Hello private router")
    }, [])

    return userModel.state?.isAuth
        ? children
        : <Navigate to={pagesPath.index} replace />
}