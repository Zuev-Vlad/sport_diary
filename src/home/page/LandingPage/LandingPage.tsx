import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageWrapper } from "../../components/Wrappers/PageWrapper/PageWrapper";


export const LandingPage = () => {
    return (
        <PageWrapper>
            <div>Landing page hello</div>
            <Row>
                <Col xs={12}>
                    <Link to={'/auth'}>Go to Auth page</Link>
                </Col>
                <Col xs={12}>
                    <Link to={'/protected'}>Go to private page</Link>
                </Col>
            </Row>
        </PageWrapper>
    )
}