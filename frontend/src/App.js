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
                <Button variant="success" size="lg">
                    Test button
                </Button>
                <SearchBar />
            </header>
        </div>
    );
}

export default App;
