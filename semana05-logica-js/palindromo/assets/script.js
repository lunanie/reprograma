function palindromo(){
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");
    for (var i = 0; i<palavra.length/2; i++){
        if(palavra[i] != palavra[palavra.length -1 -i]){
            resposta.innerText="Não é =("
            return
        }
        else{
            resposta.innerText="Simm! =D"
        }
    }
}