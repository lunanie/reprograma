import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

// // let contadorNum = 0;
// // let contadorDois = 3

// // function verificarNum(contador){
// //     if (contador === 0){
// //         return <p>Contador não iniciado</p>
// //     } else{
// //         return <p>Contador iniciado</p>
// //     }
// // }

// // const nome = {
// //   primeiroNome: "Luciane",
// //   sobreNome: "Martins"
// // };

// // function nomeCompleto(nome) {
// //   if (nome) {
// //     return nome.primeiroNome + " " + nome.sobreNome;
// //   } else {
// //     return "desconhecido";
// //   }
// // }

// // const template = (
// //   <div className="contador">
// //     <h1>Count: {contadorNum}</h1>
// //     <h2>Oi, {nome.primeiroNome}</h2>
// //     <h3>Olá, {nomeCompleto(nome)}</h3>
// //     <div>
// //       <button>-1</button>
// //       <button>+1</button>
// //       <button>Reset</button>
// //     </div>
// //     {verificarNum(contadorNum)}
// //   </div>
// // );

// // setInterval(function() {
// //   contadorNum++;
// //   console.log(contadorNum);
// // }, 1000);s

// // function BemVinda(props) {
// //   console.log(props)
// //   return (
// //     <h1>
// //       Oi, {props.apelido} {props.idade} {props.saudacao} {props.signo}
// //     </h1>
// //   );
// // }

// // function App(props) {
// //   return (
// //     <div>
// //       <BemVinda apelido="Luciane"
// //       saudacao='Oi amora'
// //       signo='Áries'
// //       />
// //       <BemVinda apelido="Mellina"
// //       saudacao='Oi amorinhaaaa'
// //       signo='Gêmeos'
// //       />
// //     </div>
// //   );
// // }

// class Comentario extends React.Component {
//   render() {
//     return (
//       <div className="comentario">
//         <div className="comentario__perfil">
//           <img className="comentario__perfil" src={this.props.imagem} />
//         </div>
//         <div>
//           <h2 className="comentario__nome">{this.props.apelido}</h2>
//           <h3 className="comentario__subtitulo">{this.props.mensagem}</h3>
//           <hr />
//           <p>{this.props.texto}</p>
//         </div>
//       </div>
//     );
//   }
// }

// function App(props) {
//   return (
//     <div>
//       <Comentario
//         apelido="Cachorríneozinho"
//         imagem="http://www.dicasdemulher.com.br/wp-content/uploads/2013/06/como-se-organizar-para-ter-um-cachorrinho.jpg"
//         mensagem="Oi sou um cachorrinéo muito lindo"
//         texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem veritatis ducimus perspiciatis ipsa molestias officia commodi! Quis totam ipsam iure id, aliquid quas, laudantium error adipisci vel facere rem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore "
//       />

//       <Comentario
//         apelido="Cachorrineooooooooodoooissss"
//         imagem="https://image.cachorrogato.com.br/textimages/cachorrinho-ideal"
//         mensagem="Oi sou um cachorrinéo muito lindo"
//         texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem veritatis ducimus perspiciatis ipsa molestias officia commodi! Quis totam ipsam iure id, aliquid quas, laudantium error adipisci vel facere rem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore "
//       />
//     </div>
//   );
// }

// // ReactDOM.render(<BemVinda apelido='Luluzinha' signo='Áries'/>, document.getElementById("root"))

// ReactDOM.render(<App />, document.getElementById("root"));

// class Chocolate extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Reprograma - Chocolate</h1>
//         <Comentario
//           apelido="Cachorrineooooooooodoooissss"
//           imagem="https://image.cachorrogato.com.br/textimages/cachorrinho-ideal"
//           mensagem="Oi sou um cachorrinéo muito lindo"
//           texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem veritatis ducimus perspiciatis ipsa molestias officia commodi! Quis totam ipsam iure id, aliquid quas, laudantium error adipisci vel facere rem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore "
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Chocolate />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// const mell = {
//   nome: "melina",
//   apelido: "mell",
//   idade: 27
// };

// elemento.addEventListener("click", function(){})

let count = 0;

class Contador extends React.Component {
  addUm = () => {
    count++;
    console.log(count);
    ReactDOM.render(<Contador />, document.getElementById("root"));
  };
  menosUm = () => {
    count--;
    console.log(count);
    ReactDOM.render(<Contador />, document.getElementById("root"));
  };
  resetando = () => {
    count = 0;
    console.log(count);
    ReactDOM.render(<Contador />, document.getElementById("root"));
  };
  render() {
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={this.addUm}>+1</button>
        <button onClick={this.menosUm}>-1</button>
        <button onClick={this.resetando}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Contador />, document.getElementById("root"));

serviceWorker.unregister();
