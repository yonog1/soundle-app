import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container } from "react-bootstrap";

import React from "react";
import env from "react-dotenv";

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID; //here ill use some env variables
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET; //here ill use some env variables

export default function LoginButton() {
    return (
        <Container>
            <Button
                href="http://localhost:3001/callback"
                variant="success"
                size="lg"
                style={{ marginBottom: "15px" }}
            >
                Log In with Spotify
            </Button>
        </Container>
    );
}
