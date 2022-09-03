
import * as React from "react"
import { AppHeader } from "../../AppHeader/AppHeader"

export const PageWrapper: React.FC<any> = ({ children }) => {

    return (

        <div>
            {children}
        </div>
    )
}