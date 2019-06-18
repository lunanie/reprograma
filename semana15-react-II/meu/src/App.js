import React from "react";
import Home from "./paginas/Home";
import Cadastro from "./paginas/Cadastro";
import Chat from "./paginas/Chat";
import "./App.css";
import Nav from "./componentes/nav/Nav";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <div>
        <Nav />
        
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/chat" component={Chat} />
      </div>
    </Switch>
  );
}

export default App;
