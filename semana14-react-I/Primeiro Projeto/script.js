console.log('app carregado')

const app = document.getElementById('app')
const a = 'segunda-feira'
var template = React.createElement("div", null, "React na Reprograma, na ", a);



var template2 = <h1>DEU CERTO QUERO CAFE DA TARDE AGORA PORQUE TO COM FOME DE CHOCOLATE. Beijos, Tchau!
    beijao 
    beijao beijao
</h1>

ReactDOM.render(template2, app)