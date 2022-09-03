import * as React from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "../../components/Wrappers/PageWrapper/PageWrapper";


export const LandingPage = () => {
    return (
        <PageWrapper>
            <div>Landing page hello</div>
            <Link to={'/auth'}>Go to Auth page</Link>
            <Link to={'/protected'}>Go to private page</Link>
        </PageWrapper >
    )
}