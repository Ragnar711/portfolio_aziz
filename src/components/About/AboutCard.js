import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hey there! I'm{" "}
                        <span className="purple">Mohamed Aziz Bechaib</span>,
                        proudly residing in{" "}
                        <span className="purple">Tunis, Tunisia</span>.
                        <br />
                        Currently donning the hat of a{" "}
                        <span className="purple">
                            Full Stack Web Developer
                        </span>{" "}
                        at
                        <span className="purple"> ARA Company</span>.
                        <br />
                        A mechatronics engineer by academic roots, I earned my
                        bachelor's degree in Mechatronics engineering and am now
                        navigating my way through the second year of my
                        engineer's degree.
                        <br />
                    </p>

                    <p style={{ color: "#00ADB5" }}>
                        "Coding the future, one line at a time!"
                    </p>
                    <footer className="blockquote-footer">
                        Mohamed Aziz Bechaib
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
