import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
    const [expand, setExpand] = useState(false);
    const [navbar, setNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navbar ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        setExpand(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/"
                                onClick={() => setExpand(false)}
                            >
                                <AiOutlineHome
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => setExpand(false)}
                            >
                                <AiOutlineUser
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => setExpand(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => setExpand(false)}
                            >
                                <CgFileDocument
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
