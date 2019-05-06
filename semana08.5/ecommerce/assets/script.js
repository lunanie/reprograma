console.log(listaProdutos)

const produtos = document.querySelector('.produtos')

listaProdutos.forEach((produto,indice) => {
    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML =
        ` <h3>Produto:${produto.descricao.split(' ')[0]}</h3>
    <p> Descrição: ${produto.descricao}</p>
    <p> Valor: ${produto.preco}</p>
    <a href=# id= ${indice}'>Adicionar ao Carrinho</a>`
    produtos.appendChild(card)
})

let botoes = document.querySelectorAll('a')

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', function () {
        console.log(botao.id)
    })
})