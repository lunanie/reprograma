const numeroParOuImpar = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero % 2 == 0) {
            setTimeout(() => {
                resolve("É um número par")
            }, 2000)
        } else if (numero % 2 != 0) {
            setTimeout(() => {
                resolve("É um número impar")
            }, 2500)
        }
        if (isNaN(numero)) {
            reject("Não é um número")
        };
    })
}
const parImpar = (numero) => {
    numeroParOuImpar(numero)
        .then((numerozinho) => console.log(numerozinho))
        .catch((erro) => alert(erro))
}