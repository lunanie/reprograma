// //Javascript
// var list = document.querySelectorAll ('li');
// for (let i=0; i<list.length; i++) {
//     list[i].textContent = 'batatinha';
// }

// $('li').text('potato')

// $('button').text('botaozinho')

// $('.lista2').find('.botao').text('Batatamudou')

function mudaTextoLi() {
  $("li").text("Batatao");
}

$(document).ready(function() {
  alert("carregou");
  console.log("carregggggoooouuu");
  mudaTextoLi();
});
