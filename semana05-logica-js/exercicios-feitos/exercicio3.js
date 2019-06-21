// Declare uma variável que receba um objeto vazio.
/*
Declare uma variável `pessoa`, que receba as suas informações pessoais, seguindo os tipos definidos abaixo:
- `nome` - String
- `sobrenome` - String
- `idade` - Number
- `altura` - Number
- `reprograma` - String
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
// var andar = 0;
// var metrosAndados = 0;
// var caminhouQuantosMetros=0;
// var metrosAndados=0;
// var andar= function(metrosAndados){
//     caminouQuantosMetros + metrosAndados;
//     andando= true;
// }
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
/*
Crie um método chamado `meuNomeCompleto`, que retorne a frase:
- "Meu nome é [NOME] [SOBRENOME]"
*/
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "eu tenho [IDADE] anos"
*/
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "minha altura é [ALTURA]"
*/
/*
Agora vamos mostrar as informações do objeto criado!
Qual o nome completo da pessoa? 
*/
/*
Qual a idade da pessoa? 
*/
/*
Qual a altura da pessoa?
*/
/*
Faça a `pessoa` fazer 3 aniversários.
*/
/*
Quantos anos a `pessoa` tem agora? 
*/
/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
/*
A pessoa ainda está andando? 
*/
/*
Se a pessoa ainda está andando, faça-a parar.
*/
/*
Quantos metros a pessoa andou? 
*/
/*
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá! Meu nome é [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
*/
var vazio = {}
var pessoa = {
    nome: 'Luciane',
    sobrenome: 'Martins',
    idade: 36,
    altura: 1.7,
    reprograma: 'turma 7',
    andando: false,
    caminhouQuantosMetros: 0,
}
pessoa.fazerAniversario = function () {
    pessoa.idade++;
}
pessoa.andar = function (metros) {
    pessoa.caminhouQuantosMetros += metros
    // pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + metros;
    pessoa.andando = true;
}
pessoa.parar = function () {
    pessoa.andando = false;
}
pessoa.meuNomeCompleto = function () {
    console.log("Meu nome é " + pessoa.nome + " " + pessoa.sobrenome)
}
pessoa.mostrarIdade = function () {
    console.log("Eu tenho " + pessoa.idade + " anos.")
}
pessoa.mostrarAltura = function () {
    console.log("A minha altura é " + pessoa.altura + ".")
}
pessoa.apresentacao = function () {
    console.log("Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome + ",tenho " + pessoa.idade + " anos, " + pessoa.altura + ", e só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " metros!")
}