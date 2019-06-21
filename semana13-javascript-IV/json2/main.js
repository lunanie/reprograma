const listaDeLivros = JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)

const insertRows = bunda => {
  let table = ''
  bunda.forEach((livro) => {
    table += `
      <tr>
        <td>${livro.livro}</td>
        <td>${livro.autor}</td>
        <td>${livro.genero}</td>
      </tr>
    `
  })
  return table
}
const ordernarLivro = document.getElementById("ordenar-livro")
ordernarLivro.addEventListener("click", (e) => {
  listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
      return -1
    }
    if (livroA.toLowerCase() > livroB.toLowerCase()) {
      return 1
    }
    if (livroA.toLowerCase() = livroB.toLowerCase()) {
      return 0
    }
  })
})


document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)