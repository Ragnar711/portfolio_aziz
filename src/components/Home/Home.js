import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import aziz from "../../Assets/aziz.png";
import hedi from "../../Assets/hedi.jpg";
import eya from "../../Assets/eya.jpg";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpg";
import fablab from "../../Assets/Projects/fablab.PNG";
import mes from "../../Assets/Projects/mes.jpg";
import mes0 from "../../Assets/Projects/mes0.jpg";
import mes1 from "../../Assets/Projects/mes1.jpg";
import mes2 from "../../Assets/Projects/mes2.jpg";
import mes6 from "../../Assets/Projects/mes6.jpg";
import mes7 from "../../Assets/Projects/mes7.jpg";
import mes8 from "../../Assets/Projects/mes8.jpg";
import jama from "../../Assets/Projects/jama.jpg";
import jama1 from "../../Assets/Projects/jama1.jpg";
import mcarre from "../../Assets/Projects/mcarre.jpg";
import mc0 from "../../Assets/Projects/mc0.jpg";
import mc1 from "../../Assets/Projects/mc1.jpg";
import mc2 from "../../Assets/Projects/mc2.jpg";
import sdtm from "../../Assets/Projects/sdtm.jpg";
import sd1 from "../../Assets/Projects/sd1.jpg";
import sd2 from "../../Assets/Projects/sd2.jpg";
import sd3 from "../../Assets/Projects/sd3.jpg";
import sd4 from "../../Assets/Projects/sd4.jpg";
import sd5 from "../../Assets/Projects/sd5.jpg";
import sd6 from "../../Assets/Projects/sd6.jpg";
import sd7 from "../../Assets/Projects/sd7.jpg";

const membresDeLEquipe = [
    {
        nom: "Eya Eloued",
        github: "https://github.com/elouedeya",
        linkedin: "https://www.linkedin.com/in/eya-eloued-811388181/",
        image: eya,
    },
    {
        nom: "Mohamed Hedi Ayadi",
        github: "https://github.com/MohamedHedi1998",
        linkedin: "https://linkedin.com/in/mohamed-hedi-ayadi",
        image: hedi,
    },
    {
        nom: "Mohamed Aziz Bechaib",
        github: "https://github.com/Ragnar711",
        linkedin: "https://linkedin.com/in/medazizbechaib",
        image: aziz,
    },
];

function Accueil() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <h1
                    className="text-center"
                    style={{
                        fontSize: "3em",
                        marginBottom: "2rem",
                        color: "white",
                    }}
                >
                    Un aperçu de l'équipe
                </h1>
                <p
                    className="text-center"
                    style={{ marginBottom: "3rem", color: "white" }}
                >
                    Nous sommes une équipe passionnée de développeurs front-end
                    et back-end, spécialisés dans la création d'applications web
                    modernes et efficaces ainsi que dans le développement
                    d'applications mobiles. Nous utilisons une large gamme de
                    technologies de pointe pour concevoir des solutions robustes
                    et évolutives. Nos compétences couvrent des outils tels que
                    React.js et Next.js pour le développement web, ainsi que
                    React Native pour le développement d'applications mobiles
                    multiplateformes. Pour le back-end, nous utilisons Node.js
                    avec Express.js, et nous maîtrisons la gestion des bases de
                    données avec MongoDB, MySQL, et PostgreSQL. Nos pratiques
                    DevOps incluent l'utilisation de Docker et Kubernetes pour
                    des déploiements simplifiés. Grâce à ces technologies, nous
                    nous engageons à offrir des produits de haute qualité qui
                    répondent aux besoins de nos clients et aux standards les
                    plus élevés de l'industrie.
                </p>
                <Row>
                    {membresDeLEquipe.map((membre, index) => (
                        <Col md={4} key={index} className="mb-5 text-center">
                            <img
                                src={membre.image}
                                alt={membre.nom}
                                className="img-fluid rounded-circle"
                                style={{ maxWidth: "200px" }}
                            />
                            <h2
                                style={{
                                    fontSize: "1.5em",
                                    marginTop: "1rem",
                                    color: "white",
                                }}
                            >
                                {membre.nom}
                            </h2>
                            <ul className="home-about-social-links">
                                <li className="social-icons">
                                    <a
                                        href={membre.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour home-social-icons"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href={membre.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour home-social-icons"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    ))}
                </Row>
                <h1 className="project-heading">
                    Compétences <strong className="purple">Techniques </strong>
                </h1>
                <Techstack />
                <h1 className="project-heading">
                    <strong className="purple">Boîte à outils</strong>
                </h1>
                <Toolstack />
                <Container fluid className="project-section">
                    <Particle />
                    <Container>
                        <h1 className="project-heading">
                            Projets <strong className="purple">Récents</strong>
                        </h1>
                        <p style={{ color: "white" }}>
                            Découvrez quelques-uns des projets récents sur
                            lesquels nous avons travaillé. En tant qu'équipe
                            passionnée, nous nous spécialisons dans la création
                            de solutions innovantes et efficaces, qu'il s'agisse
                            de développement web ou mobile. Nos projets
                            reflètent notre expertise dans des technologies
                            modernes telles que React.js, Next.js, et React
                            Native, ainsi que notre engagement envers des
                            pratiques de développement robustes. Nous utilisons
                            des outils comme Docker et Kubernetes pour assurer
                            des déploiements fluides et des solutions
                            évolutives.
                        </p>
                        <Row
                            style={{
                                justifyContent: "center",
                                paddingBottom: "10px",
                            }}
                        >
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={todo}
                                    images={[todo]} // Ajouter plus d'images ici
                                    isBlog={false}
                                    title="Application ToDo"
                                    ghLink="https://github.com/Ragnar711/ToDo.git"
                                    demoLink="https://to-do-omega-six.vercel.app/"
                                    description="Une application ToDo complète avec des fonctionnalités avancées."
                                />
                            </Col>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={fablab}
                                    images={[fablab]} // Ajouter plus d'images ici
                                    isBlog={false}
                                    title="Site Web FabLab"
                                    ghLink="https://github.com/Ragnar711/fablab.git"
                                    demoLink="https://fablab-one.vercel.app/"
                                    description="Un site web pour FabLab avec des fonctionnalités interactives."
                                />
                            </Col>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={mes}
                                    images={[
                                        mes0,
                                        mes1,
                                        mes2,
                                        mes,
                                        mes6,
                                        mes7,
                                        mes8,
                                    ]} // Plusieurs images pour ce projet
                                    isBlog={false}
                                    title="Système d'Exécution de la Fabrication"
                                    demoLink="https://manufacturing-execution-system.onrender.com/login"
                                    description="Un système pour gérer les processus de fabrication."
                                />
                            </Col>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={jama}
                                    images={[jama, jama1]} // Plusieurs images pour ce projet
                                    isBlog={false}
                                    title="Site E-commerce"
                                    demoLink="https://jama.tn/"
                                    description="Un site e-commerce avec une interface conviviale."
                                />
                            </Col>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={mcarre}
                                    images={[mcarre, mc0, mc1, mc2]} // Plusieurs images pour ce projet
                                    isBlog={false}
                                    title="Site Architecture et Design"
                                    description="Un site présentant des projets d'architecture et de design."
                                />
                            </Col>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={sdtm}
                                    images={[
                                        sdtm,
                                        sd1,
                                        sd2,
                                        sd3,
                                        sd4,
                                        sd5,
                                        sd6,
                                        sd7,
                                    ]} // Plusieurs images pour ce projet
                                    isBlog={false}
                                    title="Site SDTM"
                                    description="Un site pour une entreprise de logistique."
                                />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}

export default Accueil;
