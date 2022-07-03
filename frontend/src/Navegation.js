import React from "react";
import logo from "./favicon.ico";
import "./App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navegation() {
    return (
        <Navbar bg="Nav-Styling" variant="light" sticky="fix" expand="sm">
            <Navbar.Brand>
                <img className="Nav-Image" src={logo}></img>
                Musicle
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="user-stats">Stats</Nav.Link>
                <NavDropdown title="More Info">
                    <Nav.Link href="how-to-play">How to play</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="contact">Contact Us</Nav.Link>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}
