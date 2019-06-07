const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")
const cepError = document.getElementById("cep-error")


const exibeResultado = objeto => {
    let endereco = `
    <div>
    <p>cep: ${objeto.cep}</p>
    <p>logradouro: ${objeto.logradouro}</p>
    <p>complemento: ${objeto.complemento}</p>
    <p>bairro: ${objeto.bairro}</p>
    <p>localidade: ${objeto.localidade}</p>
    <p>uf: ${objeto.uf}</p>
    </div>
    `
    document.getElementById("exibe-endereco").innerHTML = endereco
}
const getData = url => {
    return new Promise((resolve, reject) => {
        const requisicao = new XMLHttpRequest()
        requisicao.open("GET", url)
        requisicao.onload = function () {
            if (requisicao.status === 200) {
                const resposta = JSON.parse(requisicao.responseText)
                resolve(resposta)
            } else {
                reject("CEP invalido")
            }
        }
        requisicao.onerror = () => {
            reject("Erro de conexão")
        }
        requisicao.send()
    })
}
// getData("https://viacep.com.br/ws/03425030/json/")

cepInput.addEventListener("blur", () => {

    const valorDoCampo = cepInput.value
    if (valorDoCampo) {
        getData(`https://viacep.com.br/ws/${valorDoCampo}/json/`)
            .then(resultadoDaAPI => {
                cepInput.classList.remove("error")
                cepError.innerHTML = ""
                cepInput.value = resultadoDaAPI.cep
                logradouroInput.value = resultadoDaAPI.logradouro
                bairroInput.value = resultadoDaAPI.bairro
                complementoInput.value = resultadoDaAPI.complemento
                localidadeInput.value = resultadoDaAPI.localidade
                ufInput.value = resultadoDaAPI.uf
            })
            .catch(erro => {
                cepInput.classList.add("error")
                cepError.innerHTML = erro
                logradouroInput.value = ""
                bairroInput.value = ""
                complementoInput.value = ""
                localidadeInput.value = ""
                ufInput.value = ""
            })
    } else {
        cepInput.classList.add("error")
        cepError.innerHTML = "Campo Obrigatório"
        logradouroInput.value = ""
        bairroInput.value = ""
        complementoInput.value = ""
        localidadeInput.value = ""
        ufInput.value = ""
    }
})