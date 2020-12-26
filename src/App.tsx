import React from 'react';
import './App.css';
import Contador from "./componentes/Contador";

function App() {
    return (
        <div className="App">
            <Contador valorInicial={321}/>
            <Contador/>
        </div>
    );
}

export default App;
