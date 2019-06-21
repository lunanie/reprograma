/*
Usando a estrutura SWITH, crie uma função que transforme quatro cores passadas por parâmetro em formato 'string', para os equivalentes hexadecimais.
Se a cor passada não estiver entre as que você selecionou, mostre a seguinte frase "Não temos o equivalente hexadecimal para [cor]".
*/
function transformaCor(cor){
    switch(cor){
        case "Azul":
        console.log('O hexadecimal de ' + cor + ' é #00ff00');
        break;
        case "Amarelo":
        console.log('O hexadecimal de ' + cor +  ' é #ffff000');
        break;
        case "Vermelho":
        console.log('O hexadecimal de ' + cor + ' é #ff0000');
        break;
        case "Verde":
        console.log('O hexadecimal de ' + cor + ' é #00ff00');
        break;
        default:
        console.log("Não temos o equivalente hexadecimal para " +cor+ ".")
    }
}