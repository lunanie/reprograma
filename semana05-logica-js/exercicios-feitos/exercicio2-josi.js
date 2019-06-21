// Crie uma função com dois argumentos (ou parametros), que retorna a subtração deles.
// function é um bloco de código que pode ser chamado
// functions sempre tem que ter nomes, 
function sub (){}

var sub = function(argumento1, argumento2){
    return argumento1 - argumento2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "10" ao resultado retornado da função.
var j = sub(50, 5) + 10

// Qual o valor atualizado dessa variável?
50

// Declare uma nova variável, sem valor.
var y;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/
y = 16

function chamaY(){
    y = 16
    console.log ("O novo valor da minha variável agora é " + y)
    //ou return, ou alert
}


///// criada antes
function nome(x){
    var string = "O novo valor da minha variável agora é "
    return string + x
}

// Invoque a função criada acima.
?

// Qual o retorno da função? (Use comentários de bloco).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/
function nome(arg1, arg2, arg3){
    if("condicao de verdade"){
        //código
    }

    else {"se não vá para o resto"}
}

function nome(arg1, arg2, arg3){
    if(arg1 == undefined || arg2 == undefined || arg3 == undefined){
        console.log("Os argumentos não foram preenchidos")
    }

    else{
        resultado =  arg1 * arg2 * arg3 + 2;
        return resultado;

    //// return arg1 * arg2 * arg3 + 2 CRUZÃO!!!!
    }
}
///// return = arg * agr etc, não precisa do else nesse caso, mas sem problema se colocar

//////
function comida(aveia, banana, cafe){
    if(aveia == 1){
        console.log("Comi aveia hoje")
    }

    else{
        console.log("não comi")
    }
}    

//else = não se encaixa em nenhuma condição (kkk eu), é o resto, é o que sobrou

// Invoque a função criada acima, passando só dois números como argumento.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/
function tres(x, y, z){
    ///2. Se somente um argumento for passado, retorne "entrou no if".
    /// o ponto de exclamação signica não
    ///tres (1)
    /// if (x && y == undefined && z == undefined) É A MESMA COISA DA DE BAIXO!!!
    if(x && !y && !z){
        console.log("entrou na primeira condição")
        /// ou return x
    }

    ///3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    ///tres (1, 2)
    else if(x, y, !z){
        console.log("entrou na segunda condição")
        console.log(x, y)
        /// ou retun x + y
    }

    ///4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    ///tres (1, 2, 3)
    else if(x, y, z){
        console.log("entrou na terceira condição")
        console.log(( x + y) / z)
    }

    ///5. Se nenhum argumento for passado, retorne o valor booleano "false".
    else if(!x && !y && !z){
        console.log("entrou na quarta condição")
        console.log(false)
    }
 

    ///6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
    else{
        console.log(null)
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.