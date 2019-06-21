// var pessoa = {
//     nome: "Luciane",
//     idade: 36,
//     aniversario: function () {
//         pessoa.idade = pessoa.idade +1
//         }
// }


// var rua = [

// ]

// rua = [100,102,105]


// Crie uma função para converter bitcoin em RadioNodeList, dada uma quantia e uma cotação



function converter() {
    var bitcoin = prompt ("Quantos bitcoins você quer converter?");
    var cotacao = prompt ("Quantos reais vale um bitcoin hoje?");
    var resultado = bitcoin*cotacao;
    alert("Você teria " + resultado);
    return resultado;
}

