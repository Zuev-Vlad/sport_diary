import * as React from "react"
import { RecoilRoot } from "recoil"
import { AppRoutes } from "./routes/AppRoutes/AppRoutes"
import { AppWrapper } from "./components/Wrappers/AppWrapper/AppWrapper"


export const App = () => {
    return (
        <RecoilRoot>
            <AppWrapper>
                <AppRoutes />
            </AppWrapper>
        </RecoilRoot>
    )
}