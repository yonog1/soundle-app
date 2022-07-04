import React from "react";
import logo from "./favicon.ico";
import "./App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navegation() {
    return (
        <div>
            <Navbar
                bg="Nav-Styling"
                variant="light"
                sticky="fix"
                expand="xxxxl"
                className="justify-content-center"
            >
                <Navbar.Brand>
                    <img className="Nav-Image" src={logo}></img>
                    <a href="/" className="homepage-link">
                        Musicle
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggle-always"/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="user-stats">Stats</Nav.Link>
                        <Nav.Link href="how-to-play">How to play</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
