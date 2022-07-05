import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navegation from "./Navegation";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";


function App() {
    return (
        <div className="App">
            <Navegation />
            <body className="App-header">
                <LoginButton></LoginButton>
                <SearchBar />
            </body>
        </div>
    );
}

export default App;
