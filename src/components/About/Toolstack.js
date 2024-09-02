import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiGitlab,
    SiLinux,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGitlab color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel color="white" />
            </Col>
        </Row>
    );
}

export default Toolstack;
