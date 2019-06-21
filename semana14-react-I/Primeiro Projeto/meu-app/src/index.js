import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let contadorNum = 0;

const nome = {
    primeiroNome: "Luciane",
    sobreNome: "Martins",
}

function nomeCompleto(nome){
    if (nome){
        return nome.primeiroNome + ' ' + nome.sobreNome;
    }else{
        return 'desconhecido';
    }

}

const template = 
<div className="contador"> 
    <h1>Count: {contadorNum}</h1>
    <h2>Oi, {nome.primeiroNome}</h2>
    <h3>Olá, {nomeCompleto(nome)}</h3>
    <div> 
        <button>+1</button> 
        <button>-1</button>
        <button>Reset</button>
    </div>
</div>

setInterval(function(){
    contadorNum++
    console.log(contadorNum)
    const template = 
})

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
