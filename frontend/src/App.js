import logo from "./favicon.ico";
import "./App.css";
import {
    Navbar,
    Button,
    Alert,
    Breadcrumb,
    Card,
    Nav,
    NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Navbar bg="Nav-Styling" variant="light" sticky="fix" expand="sm">
                <Navbar.Brand>
                    <img className="Nav-Image" src={logo}></img>
                    Musicle
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="user-stats">Stats</Nav.Link>
                    <Nav.Link href="info">More Info</Nav.Link>
                    <NavDropdown>
                        <Nav.Link href="how-to-play">How to play</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="contact">Contact Us</Nav.Link>
                    </NavDropdown>
                </Nav>
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
