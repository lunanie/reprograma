const listaDeLivros =
    JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)




const insertRows = listaDelivros => {
    let table = ''
    listaDelivros.forEach((livro => {
        table += `
        <tr>
            <td>${livro.livro}</td>
            <td>${livro.autor}</td>
            <td>${livro.genero}</td>
        </tr>
        `
    })
    return 
    )
}