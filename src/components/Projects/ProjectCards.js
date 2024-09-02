import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Modal, Carousel } from "react-bootstrap";

function ProjectCards(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="project-card-view" onClick={handleShow}>
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                    {props.ghLink && (
                        <Button
                            variant="primary"
                            href={props.ghLink}
                            target="_blank"
                        >
                            <BsGithub /> &nbsp;
                            {props.isBlog ? "Blog" : "GitHub"}
                        </Button>
                    )}
                    {"\n"}
                    {"\n"}
                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> &nbsp;
                            {"Demo"}
                        </Button>
                    )}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {props.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`Slide ${index}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <p style={{ marginTop: "1rem" }}>{props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    {props.ghLink && (
                        <Button
                            variant="secondary"
                            href={props.ghLink}
                            target="_blank"
                        >
                            <BsGithub /> &nbsp; GitHub
                        </Button>
                    )}
                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="secondary"
                            href={props.demoLink}
                            target="_blank"
                        >
                            <CgWebsite /> &nbsp; Demo
                        </Button>
                    )}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProjectCards;
