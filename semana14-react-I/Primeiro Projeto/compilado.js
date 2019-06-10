"use strict";

console.log('app carregado');
var app = document.getElementById('app');
var a = 'segunda-feira';
var template = React.createElement("div", null, "React na Reprograma, na ", a);
var template2 = React.createElement("h1", null, "DEU CERTO QUERO CAFE DA TARDE AGORA PORQUE TO COM FOME DE CHOCOLATE. Beijos, Tchau! beijao beijao beijao");
ReactDOM.render(template2, app);
