import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container } from "react-bootstrap";

import React from "react";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=ad5ca9a8802d424db83c8c16085dcbae&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
export default function LoginButton() {
    return (
        <Container>
            <Button href={AUTH_URL} variant="success" size="lg">
                Log In with Spotify
            </Button>
        </Container>
    );
}
