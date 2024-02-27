import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpg";
import MES from "../../Assets/Projects/MES.PNG";
import fablab from "../../Assets/Projects/fablab.PNG";

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
                            imgPath={todo}
                            isBlog={false}
                            title="ToDo App"
                            description="Streamline your task management with this straightforward To-Do app, built using Svelte and styled with practicality in mind using Tailwind CSS."
                            ghLink="https://github.com/Ragnar711/ToDo.git"
                            demoLink="https://to-do-omega-six.vercel.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={MES}
                            isBlog={false}
                            title="Manufacturing Execution System"
                            description="Computerized system that manages and tracks manufacturing processes in real-time to improve efficiency, quality, and overall performance. Use 9898 for matricule, and 1234 for password"
                            ghLink="https://github.com/Ragnar711/MES-demo.git"
                            demoLink="https://mes-demo-r84s.vercel.app"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={fablab}
                            isBlog={false}
                            title="FabLab Website"
                            description="Unfinished website I started creating for FabLab club in my university"
                            ghLink="https://github.com/Ragnar711/fablab.git"
                            demoLink="https://fablab-one.vercel.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
