const usuario = 'Amélia';
const idade = 25;

console.log(`O usuário ${usuario} possui ${idade} anos`);

var endereco = {
    curso: 'Reprograma',
    local: 'Estação Hack',
    rua: 'Avenida Paulista',
    numero: 1374,
    bairro: 'Bela Vista',
    cidade: 'São Paulo',
    uf: 'SP'
};
console.log(`O curso da ${endereco.curso} acontece na ${endereco.local} que fica localizada em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na "${endereco.rua}", nº ${endereco.numero}.`);

var usuarios = [{
        nome: 'Bruna',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriela',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
];



function exibeHabilidades(usuarios) {
    for (elemento of usuarios)
        console.log(
            `A ${elemento.nome} possui as habilidades ${elemento.habilidades.join("-")}`
        );
}

exibeHabilidades(usuarios)
//     function nomezinho() {
//         for (nomezinho in usuarios)
//             console.log(`A ${usuarios.nome} possui as habilidades: ${nomezinho[habilidades]}`)
//     }
//     A Bruna possui as habilidades: Javascript, ReactJS, Redux
// A Gabriela possui as habilidades: VueJS, Ruby on Rails, Elixir

function exibeHabilidades(usuarios) {
    for (elemento of usuarios)
        console.log(
            `A ${elemento.nome} possui as habilidades ${elemento.habilidades}`
        );
}

exibeHabilidades(usuarios)

// parte da tarde


1 º exercício
Converta as funções nos seguintes trechos de código em Arrow Functions:

    const arr = [1, 2, 3, 4, 5];

arr.map(function (item) {
    return item + 10;
});

// Dica: Utilize uma constante pra function

const usuario = {
    nome: 'Diego',
    idade: 23
};

function mostraIdade(usuario) {
    return usuario.idade;
}

mostraIdade(usuario);
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
    return {
        nome,
        idade
    };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

function mostraIdade(usuario) {
    return usuario.idade;
}
mostraIdade(usuario);

const mostraIdade = (usuario) => {
    return usuario.idade
}


let objeto = {
    nome: "Luciane ",
    idade: 28
};

mostraIdade(objeto1);


const listComponent = (data) => {
    return data.map((item, indice) => {
        return (
            `
            <li>
            <span>${item.id}</span>
            <span>${item.name}</span>
            </li>
            `
        )
    })
}