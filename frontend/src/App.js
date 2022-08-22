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
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="App" style={{ height: "100%" }}>
            <Navegation />
            <div className="App-header">
                <p>{!data ? "Loading..." : data}</p>
                <LoginButton />
                <SpotifyPlayer />
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
