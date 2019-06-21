/*
Crie um objeto que simule uma conta corrente, com as seguintes chaves: nome, agencia, conta e saldo.
Depois, crie funções para depositar dinheiro, remover dinheiro, consultar saldo da conta e mostrar todos os dados da conta;
*/
var conta = {
    nome: "Nubank",
    agencia: 341,
    conta: 06360,
    saldo: 1,
}
var depositarDinheiros = function(valor){
    var valor;
    conta.saldo = conta.saldo + valor;
    return conta.saldo;
}
var removerDinheiros = function (valor) {
    var valor;
    conta.saldo = conta.saldo - valor;
    return conta.saldo;
}
var consultarSaldo = function (valor) {
    console.log("SALDO: " + conta.saldo);
}
var mostrarTudo = function(){
    console.log("Nome: " +conta.nome);
    console.log("Agência: " +conta.agencia);
    console.log("Saldo: " +conta.saldo);
}