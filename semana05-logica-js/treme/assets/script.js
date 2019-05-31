var elogios = [
    "Diva sem defeitos",
    "Você não é o Github mas é uma gatinha",
    "Ícone incompreendido",
    "Responsivo #SQN",
    "Universal",
    "Maravilhindo",
    "Cristal",
    "Sensato",
    "Fada sensata",
    "Maravigold",
    "Zero defeitos",
    "Um neném",
    "Um pão",
    "Jóia rara",
    "Um pão",
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}