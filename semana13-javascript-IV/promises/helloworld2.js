const retornaPromessa = () => {
    return new Promisse((resolve, reject) ={
        resolve("Hello World")
    }, 2000)
}



const job = () => {
    .then((resposta) => {
        console.log(resposta)
    }).catch((erro) => {
        console.log(erro)
    });

}
