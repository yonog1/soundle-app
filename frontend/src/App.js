import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegation from "./Navegation";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import SpotifyPlayer from "react-spotify-web-playback";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    const [refreshToken, setRefreshToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((accessToken) => setAccessToken(accessToken.access_token));
    }, []);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((refreshToken) =>
                setRefreshToken(refreshToken.refresh_token)
            );
    }, []);

    return (
        <div className="App" style={{ height: "100%" }}>
            <Navegation />
            <div className="App-header">
                <p>{!accessToken ? "Loading..." : accessToken}</p>
                <p>{!refreshToken ? "Loading..." : refreshToken}</p>
                <LoginButton />
                <SpotifyPlayer
                    token={refreshToken}
                    uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
                />
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
