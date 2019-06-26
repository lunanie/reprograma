import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import NavMenu from "./componentes/NavMenu/NavMenu";

function App() {
  return (
    <Cabecalho>
      <NavMenu usuario='lunanie'></NavMenu>
    </Cabecalho>
  );
}

export default App;
