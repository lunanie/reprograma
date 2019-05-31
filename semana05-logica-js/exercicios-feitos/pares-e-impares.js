/*
Mostre no console os números pares entre 1 e 10, e os número ímpares entre 11 e 20, 
usando a estrutura de repetição "while".
*/

var numero = 1
while (numero <= 10){
    if (numero %2===0){
        console.log(numero);
    }
    numero++;
}



var numero = 1
while (numero <= 10){
    if (numero %2===1){
        console.log(numero);
    }
    numero++;
}