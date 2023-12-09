import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";

function Home() {
    return ( 
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <div className="greeting-container">
                                <h1
                                    className="heading"
                                    style={{ paddingBottom: 15 }}
                                >
                                    Hey, Wanderer!{" "}
                                    <span
                                        className="wave"
                                        role="img"
                                        aria-labelledby="wave"
                                        alt="wave"
                                    >
                                        👋🏻
                                    </span>
                                </h1>

                                <h1 className="heading-name">
                                    I go by{" "}
                                    <strong className="main-name">
                                        Mohamed Aziz Bechaib
                                    </strong>{" "}
                                    .
                                </h1>
                            </div>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
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
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;
