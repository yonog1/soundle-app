import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container } from "react-bootstrap";

import React from "react";
import env from "react-dotenv";

const clientId = "ad5ca9a8802d424db83c8c16085dcbae"; //here ill use some env variables
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET //here ill use some env variables
console.log(process.env.REACT_APP_SPOTIFY_CLIENT_SECRET, 'fff');
const AUTH_URL = ``;
export default function LoginButton() {
    return (
        <Container>
            <p>{process.env.REACT_APP_SPOTIFY_CLIENT_ID}</p>
            <Button href={AUTH_URL} variant="success" size="lg" style={{marginBottom:'15px'}}>
                Log In with Spotify
            </Button>
        </Container>
    );
}
