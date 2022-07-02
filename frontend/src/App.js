import logo from "./favicon.ico";
import "./App.css";
import { Navbar, Button, Alert, Breadcrumb, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Navbar bg="Nav-Styling" variant="light" sticky="fix">
                <Navbar.Brand>
                    <img className="Nav-Image" src={logo}></img>
                    Musicle
                </Navbar.Brand>
                <Navbar.Toggle>
                    <Navbar.Collapse>y=</Navbar.Collapse>
                </Navbar.Toggle>
            </Navbar>
            <div className="content">This is content.</div>
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
            </header>
        </div>
    );
}

export default App;
