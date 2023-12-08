import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/todo.jpg";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Recent <strong className="purple">Projects</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Explore some of the recent projects I've been involved in.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="ToDo App"
                            description="Streamline your task management with this straightforward To-Do app, built using Svelte and styled with practicality in mind using Tailwind CSS."
                            ghLink="https://github.com/Ragnar711/ToDo.git"
                            demoLink="https://to-do-omega-six.vercel.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
