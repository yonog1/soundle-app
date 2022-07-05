import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navegation from "./Navegation";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";


function App() {
    return (
        <div className="App" style={{height: '100%'}}>
            <Navegation />
            <div className="App-header">
                <LoginButton/>
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
