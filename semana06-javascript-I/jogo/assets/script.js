let mostrarGif = document.querySelector('#botao');
let mostrarSeriado = document.getElementById('mostrarSeriado')
let mostrarTexto = document.getElementById('help')

let imagensSeriados = [
    `<img src="./assets/friends.gif" alt="Gif do seriado Friends">`,
    `<img src="./assets/grey.gif" alt="Gif do seriado Grey's Anatomy">`,
    `<img src="./assets/tbbt.gif" alt="Gif do seriado The Big Bang Theory">`,
]

let frases = [
    `<p>Friends</p>`,
    `<p>Grey's Anatomy</p>`,
    `<p>The Big Bang Theory</p>`,

]

mostrarGif.addEventListener('click', function () {
    mostrarSeriado.innerHTML = imagensSeriados[0];
    setTimeout(function(){mostrarSeriado.innerHTML = imagensSeriados[1];},2000);
    setTimeout(function(){mostrarSeriado.innerHTML = imagensSeriados[2];},4000);
    setTimeout(function(){mostrarSeriado.innerHTML = frases[0];},8000);
    setTimeout(function(){mostrarSeriado.innerHTML = frases[1];},10000);
    setTimeout(function(){mostrarSeriado.innerHTML = frases[2];},12000);
    setTimeout(function(){mostrarSeriado.innerHTML = imagensSeriados[2];},14000);
    // setTimeout(function(){mostrarTexto.innerHTML = imagensSeriados[2];},15000);
});
