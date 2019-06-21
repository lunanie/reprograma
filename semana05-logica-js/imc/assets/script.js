function calculoIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif= document.getElementById("lugarGif");
    var gif;
    var resultado = (peso / (altura * altura)).toFixed(2);
    var text;
    var cssclass;
    if (resultado <= 18.5) {
        text= "Você está magérrima!💃";
        gif = `<img src="https://media.giphy.com/media/Pegcy6PgsjRy8/giphy.gif" alt="Gif da Amy Winehouse">`
        cssclass="linha1";
    }
    else if (resultado > 18.5 && resultado <= 24.9) {
        text="Você está bombando!💃";
        gif = `<img src="https://media.giphy.com/media/13x9lPFNYt5o76/giphy.gif" alt="Gif da Lana Del Rey">`;
        cssclass="linha2";
    }
    else if (resultado > 25 && resultado <= 29.9) {
        text= "Você está gostosíssima!💃";
        gif = `<img src="https://media.giphy.com/media/OJbr914LLiETe/giphy.gif" alt="Gif da Beyonce">`;
        cssclass="linha3";
    }
    else if (resultado > 30 && resultado <= 39.9) {
        text="Ai meu coração!💃";
        gif = `<img src="https://media.giphy.com/media/115quIlEidBFPq/giphy.gif" alt="Gif da Adele">`;
        cssclass="linha4";
    }
    else {
        text="Diva sem defeitos!!!💃";
        gif = `<img src="https://media.giphy.com/media/eSQKNSmg07dHq/giphy.gif" alt="Gif da Olsen comendo macarrão">`;
        cssclass="linha5";
    }
    resposta.innerHTML= resultado +' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML=gif;

}