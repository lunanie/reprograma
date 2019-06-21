const listaDeLivros = JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)

const insertRows = bunda => {
  let table = ''
  bunda.forEach((livro) => {
    table+= `
      <tr>
        <td>${livro.livro}</td>
        <td>${livro.autor}</td>
        <td>${livro.genero}</td>
      </tr>
    `
  })
  return table
}

const ordenarLivro = document.getElementById("ordenar-livro")

ordenarLivro.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if(livroA.livro.toLowerCase() < livroB.livro.toLowerCase()){
      return -1
    }
    if(livroA.livro.toLowerCase() > livroB.livro.toLowerCase()){
      return 1
    }
    return 0
  })
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)




// ordenar autor

const ordenarAutor = document.getElementById("ordenar-autor")

ordenarAutor.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if(livroA.autor.toLowerCase() < livroB.autor.toLowerCase()){
      return -1
    }
    if(livroA.autor.toLowerCase() > livroB.autor.toLowerCase()){
      return 1
    }
    return 0
  })
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)


// ordenar genero
const ordenarGenero = document.getElementById("ordenar-genero")

ordenarGenero.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if(livroA.genero.toLowerCase() < livroB.genero.toLowerCase()){
      return -1
    }
    if(livroA.genero.toLowerCase() > livroB.genero.toLowerCase()){
      return 1
    }
    return 0
  })
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)






const ordenarGenero = document.getElementById("ordenar-genero")

ordenarGenero.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if(livroA.genero.toLowerCase() < livroB.genero.toLowerCase()){
      return -1
    }
    if(livroA.genero.toLowerCase() > livroB.genero.toLowerCase()){
      return 1
    }
    return 0
  })
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)








const ordenarLivro = document.getElementById("ordenar-livro")
const ordenarAutor = document.getElementById("ordenar-autor")
const ordenarGenero = document.getElementById("ordenar-genero")


ordenarLivro.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => orderList
  (livroA, livroB, "livro"))
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})
ordenarAutor.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => orderList
  (livroA, livroB, "autor"))
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})
ordenarGenero.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => orderList
  (livroA, livroB, "genero"))
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

