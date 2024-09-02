import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiHtml5,
    DiCss3,
    DiPython,
} from "react-icons/di";
import {
    SiNextdotjs,
    SiPostgresql,
    SiMysql,
    SiDocker,
    SiKubernetes,
    SiExpress,
    SiPrisma,
    SiJest,
    SiTypescript,
    SiSocketdotio,
    SiLinux,
    SiAndroid,
    SiIos,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPrisma color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJest color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSocketdotio color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroid color="white" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIos color="white" />
            </Col>
        </Row>
    );
}

export default Techstack;
