// let objeto = {
//     propriedade: valor da propriedade
//     prorpiedade 2: valor da propriedade 2
//     metodo: function(){}
// }

let listaProdutos = [];

let camiseta = {
    tamanho: ['P','M','G','GG'],
    cor: ['preta','braca','roxa','lilás'],
    modelo: ['babylook','normal'],
    descricao: 'Camiseta {reprograma} estilo diva function',
    preco: 35,
    descrevaMe: function () { alert(`${this.descricao} - Preço R$ ${(this.preco)}`) },
    descrevaMe2() { alert(this.descricao + '  - Preço R$ ' + this.preco) }
}

let caneca = {
    tamanho: '430ml',
    cor: ['preta','braca','roxa','lilás'],
    modelo: ['chá','café'],
    descricao: 'Caneca {reprograma} estilo coding divas',
    preco: 25,
}

let adesivo = {
    cor: ['preta','braca','roxa','lilás'],
    modelo: ['transparente','opaco'],
    descricao: 'Adesivo {reprograma} estilo chaves',
    preco: 5,
}

listaProdutos.push(camiseta)
listaProdutos.push(caneca)
listaProdutos.push(adesivo)

console.log(camiseta.descricao)