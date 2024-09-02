import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpg";
import fablab from "../../Assets/Projects/fablab.PNG";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Projets <strong className="purple">Récents</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Découvrez quelques-uns des projets récents sur lesquels nous
                    avons travaillé. En tant qu'équipe passionnée, nous nous
                    spécialisons dans la création de solutions innovantes et
                    efficaces, qu'il s'agisse de développement web ou mobile.
                    Nos projets reflètent notre expertise dans des technologies
                    modernes telles que React.js, Next.js, et React Native,
                    ainsi que notre engagement envers des pratiques de
                    développement robustes. Nous utilisons des outils comme
                    Docker et Kubernetes pour assurer des déploiements fluides
                    et des solutions évolutives.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={todo}
                            isBlog={false}
                            title="Application ToDo"
                            description="Optimisez la gestion de vos tâches avec cette application To-Do simple, construite en utilisant Svelte et stylisée avec Tailwind CSS."
                            ghLink="https://github.com/Ragnar711/ToDo.git"
                            demoLink="https://to-do-omega-six.vercel.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={fablab}
                            isBlog={false}
                            title="Site Web FabLab"
                            description="Site web inachevé que j'ai commencé à créer pour le club FabLab de mon université."
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
