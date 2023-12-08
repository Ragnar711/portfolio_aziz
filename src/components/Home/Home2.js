import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            A GLIMPSE INTO{" "}
                            <span className="purple">WHO I AM</span>
                        </h1>
                        <p className="home-about-body">
                            As a passionate{" "}
                            <b className="purple">MERN Stack Developer</b> with
                            a love for programming, I have honed my skills in
                            various technologies.
                            <br />
                            <br />
                            Proficient in{" "}
                            <i>
                                <b className="purple">
                                    HTML, CSS, and Javascript
                                </b>
                            </i>
                            , my expertise extends to encompassing the entire
                            MERN stack, utilizing technologies such as
                            <i>
                                <b className="purple">
                                    {" "}
                                    MongoDB, Express.js, React.js, and Node.js
                                </b>
                            </i>
                            .
                            <br />
                            <br />
                            Additionally, I am well-versed in database
                            management, adeptly handling both
                            <i>
                                <b className="purple"> MySQL</b>
                            </i>{" "}
                            and{" "}
                            <i>
                                <b className="purple">PostgreSQL</b>
                            </i>
                            . My coding endeavors are complemented by the
                            precision of{" "}
                            <i>
                                <b className="purple">Typescript</b>
                            </i>
                            .
                            <br />
                            <br />
                            Delving into the realm of DevOps, I leverage{" "}
                            <i>
                                <b className="purple">Docker</b>
                            </i>{" "}
                            and{" "}
                            <i>
                                <b className="purple">Kubernetes</b>
                            </i>
                            for seamless containerization and orchestration. My
                            workflows are streamlined with the power of{" "}
                            <i>
                                <b className="purple">GitLab CI/CD</b>
                            </i>
                            .
                            <br />
                            <br />
                            In pursuit of optimal development practices, I
                            thrive on creating scalable and innovative
                            solutions. My passion extends to crafting modern
                            applications using technologies such as
                            <b className="purple"> Node.js</b>,{" "}
                            <i>
                                <b className="purple">React.js</b>
                            </i>
                            , and{" "}
                            <i>
                                <b className="purple">Next.js</b>
                            </i>
                            .
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Ragnar711"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="www.linkedin.com/in/medazizbechaib"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
