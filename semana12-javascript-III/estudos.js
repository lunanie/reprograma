let curss = 'reprograma'
undefined
for (let c in curss) {
    console.log(curss[c]);
}
let cursos = ["front", "back", "full"];
undefined
for (let curss of cursos) {
    console.log(curss);
}
// Crie uma função que leia um valor e exiba se ele é par ou ímpar:    
function imparPar(numero) {
    if (numero % 2 == 0) {
        console.log("é par");
    } else
        console.log("é impar");
}
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function printPar(a, b) {
    for (var i = a; i <= b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
// function experiencia(anos) {
//   // código aqui
// }
// var anosEstudo = 7;
// experiencia(anosEstudo);
// // De 0-1 ano: Iniciante
// // De 1-3 anos: Intermediário
// // De 3-6 anos: Avançado
// // De 7 acima: Jedi Master
function experiencia(anos) {
    if (anos <= 1) {
        console.log("Iniciante");
    } else if (anos <= 3 && anos > 1) {
        console.log("Intermediário");
    } else if (anos <= 7 && anos > 3) {
        console.log("Avançado");
    } else if (anos > 7) {
        console.log("Jedi Master");
    }
}

