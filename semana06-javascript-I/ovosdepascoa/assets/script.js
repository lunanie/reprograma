window.addEventListener('DOMContentLoaded', function () {

    let mensagensOvos = document.querySelector("#mensagensOvos")
    let paisEscolhido = document.querySelector("#paises");

    // function mudarEstado(cidade) {
    //     if ( document.getElementById('divCidades').style.display == "none"){
    //     document.getElementById('divCidades').style.display = "block";
    //     }
    //         else
    //         document.getElementById('divCidades').style.display = "none";
    // }
    // divCidades = "none";
    // brasil.innerHTML= ("#divCidades").hide();

    paisEscolhido.addEventListener('change', function () {
        if (paisEscolhido.value == "aust") {
            mensagensOvos.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬`;
        } else if (paisEscolhido.value == "eua") {
            mensagensOvos.innerHTML = `🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫`;
        } else if (paisEscolhido.value == "ing") {
            mensagensOvos.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬`;
        } else if (paisEscolhido.value == "brasil") {
            document.querySelector("#divCidades").setAttribute('style', 'display: block');
            if (paisEscolhido.value == "aust") {
                mensagensOvos.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬`;
            } else if (paisEscolhido.value == "eua") {
                mensagensOvos.innerHTML = `🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫`;
            } else if (paisEscolhido.value == "ing") {
                mensagensOvos.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬`;
        }

    })

});

