const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const scopes = [
    "ugc-image-upload",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "streaming",
    "app-remote-control",
    "user-read-email",
    "user-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-library-modify",
    "user-library-read",
    "user-top-read",
    "user-read-playback-position",
    "user-read-recently-played",
    "user-follow-read",
    "user-follow-modify",
];

const PORT = process.env.PORT || 3001;

var spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3001/callback",
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
});

const app = express();

app.get("/login", (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get("/callback", (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error) {
        console.error("Callback Error:", error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    spotifyApi
        .authorizationCodeGrant(code)
        .then((data) => {
            const access_token = data.body["access_token"];
            const refresh_token = data.body["refresh_token"];
            const expires_in = data.body["expires_in"];

            spotifyApi.setAccessToken(access_token);
            spotifyApi.setRefreshToken(refresh_token);

            console.log("access_token:", access_token);
            console.log("refresh_token:", refresh_token);

            console.log(
                `Sucessfully retreived access token. Expires in ${expires_in} s.`
            );
            res.send("Success! You can now close the window.");

            setInterval(async () => {
                const data = await spotifyApi.refreshAccessToken();
                const access_token = data.body["access_token"];

                console.log("The access token has been refreshed!");
                console.log("access_token:", access_token);
                spotifyApi.setAccessToken(access_token);
            }, (expires_in / 2) * 1000);
        })
        .catch((error) => {
            console.error("Error getting Tokens:", error);
            res.send(`Error getting Tokens: ${error}`);
        });
});

app.get("/api", (req, res) => {
    res.json({
        message: `Hello from server!`,
        access_token: spotifyApi.access_token
            ? spotifyApi.access_token
            : "no access",
        refresh_token: spotifyApi.refresh_token
            ? spotifyApi.refresh_token
            : "no refresh",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
