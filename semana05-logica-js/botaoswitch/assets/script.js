function desliga (){
    var tela = document.getElementById("fundo");
    if (tela.style.background == "white"){
        tela.style.background = "black";
    }else{
        tela.style.background = "white";
    }
}

function trocaimagem() {
    var trocabotao = document.getElementById("botaocor");
    
    
}


var int = 2;
var img = document.getElementById("teste");
function trocaImg(int){
  if (int == 1)
    {
      img.src = "http://db13.in/wp-content/uploads/2016/07/2000px-Dialog-error-round.svg_.png";
    }
  else if (int == 2)
    {
      img.src = "https://t3.ftcdn.net/jpg/01/45/20/02/160_F_145200260_Mlts2v0PtYabB4v5dz1I8hKNCfieJidW.jpg";
    }
}