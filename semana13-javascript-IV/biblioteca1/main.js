const listaDeLivros = JSON.stringify(batata)
const listaDeLivrosJs = JSON.parse(listaDeLivros)

const insertListinha = (bunda, attr) => {
    let listinha = ''
    bunda.forEach((livro) => {
        listinha += `
        <p>${livro[attr]}</p>
      `
    })
    return listinha
}
const listandoAutores = document.getElementById("listarAutores")
const listandoLivros = document.getElementById("listarLivros")
const listandoGenero = document.getElementById("listarGenero")



listandoLivros.addEventListener("click", (e) => {
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
        if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
            return -1
        }
        if (livroA.livro.toLowerCase() > livroB.livro.toLowerCase()) {
            return 1
        }
        return 0
    })
    document.getElementById("disponibilidade").innerHTML = insertListinha(listaOrdenada, "livro")
})



listandoAutores.addEventListener("click", (e) => {
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
        if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
            return -1
        }
        if (livroA.livro.toLowerCase() > livroB.livro.toLowerCase()) {
            return 1
        }
        return 0
    })
    document.getElementById("disponibilidade").innerHTML = insertListinha(listaOrdenada, "autor")
})


const listandoGeneros = document.getElementById("listarGenero")

listandoGeneros.addEventListener("click", (e) => {
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
        if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
            return -1
        }
        if (livroA.livro.toLowerCase() > livroB.livro.toLowerCase()) {
            return 1
        }
        return 0
    })
    document.getElementById("disponibilidade").innerHTML = insertListinha(listaOrdenada, "genero")
})

get qtd () {
    return batata.livros.length;
}

biblioteca = new Biblioteca(autores.livros);

document.getElementById("quantidadeLivros").innerHTML = qtd.length

