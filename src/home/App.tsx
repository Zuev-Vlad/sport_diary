import * as React from "react"
import { RecoilRoot } from "recoil"
import { AppRoutes } from "./routes/AppRoutes/AppRoutes"
import { AppWrapper } from "./components/Wrappers/AppWrapper/AppWrapper"

import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => {
    return (
        <RecoilRoot>
            <AppWrapper>
                <AppRoutes />
            </AppWrapper>
        </RecoilRoot>
    )
}