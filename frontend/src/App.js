import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navegation from "./Navegation";
import SearchBar from "./SearchBar";
import { Button, Card } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navegation />
            <header className="App-header">
                <Card className="Card-Image" style={{ color: "#000" }}>
                    <Card.Img src="./favicon.ico" width="50" />
                    <Card.Body></Card.Body>
                    <Card.Title>example</Card.Title>
                    <Card.Text>example</Card.Text>
                    <Button variant="success">Read more</Button>
                </Card>

                <Button variant="success" size="lg">
                    Test button
                </Button>
                <SearchBar />
            </header>
        </div>
    );
}

export default App;
