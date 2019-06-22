import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

class EscondeAparece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilidade: true
    };
  }
  componentDidMount() {
    console.log("componente criado");
    alert("componente criado");
  }
  mudarVisibilidade = () => {
    this.setState(estadoAnterior => {
      return {
        visibilidade: !estadoAnterior.visibilidade
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Esconde-Aparece</h1>
        <button onClick={this.mudarVisibilidade}>
          {this.state.visibilidade ? "Esconder Detalhes" : "Mostrar Detalhes"}
        </button>
        <p>{this.state.visibilidade ? "Eu sou maravilhosa" : ""}</p>
      </div>
    );
  }
}

// function Esconde() {
//   return (
//     <div>
//       <h1>Esconde-Aparece</h1>
//       <button onClick={this.addUm}>Esconder detalhes</button>
//     </div>
//   );
// }

// let cont = 0;

// class Contador extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cont: 0
//     };
//     this.addUm = this.addUm.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   addUm = () => {
//     this.setState(estadoAnterior => {
//       return {
//         cont: estadoAnterior.cont + 1
//       };
//     });
//   };

//   reset = () => {
//     this.setState(() => {
//       return {
//         cont: 0
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2> Count: {this.state.cont} </h2>{" "}
//         <button onClick={this.addUm}> -1 </button>{" "}
//         <button onClick={this.addUm}> +1 </button>{" "}
//         <button onClick={this.reset}> Reset </button>{" "}
//       </div>
//     );
//   }
// }

ReactDOM.render(<EscondeAparece />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
