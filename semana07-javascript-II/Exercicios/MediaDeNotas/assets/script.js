function calcular() {
    let primeira = parseFloat(document.getElementById("1n").value);
    let segunda = parseFloat(document.getElementById("2n").value);
    let resultado = parseFloat((primeira + segunda) / 2);
    if (resultado < 7) {
        alert("Reprovado");
    } else if (resultado >= 7, resultado < 10) {
        alert("Aprovado");
    } else if (resultado = 10) {
        alert("Aprovado com distinção");
    }



    // if (resultado>=7)
    //     if (resultado ==10)
    //         alert ("Uau! Aprovado com distinção!");
    //     else
    //         alert("Parabéns, aprovado! Média " +resultado);
    // else 
    //     alert ("Reprovado")
}