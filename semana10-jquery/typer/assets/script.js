$(document).ready(function () {
    let qtdPalavras = $('.frase-correta').text().split(" ").length;
    console.log(qtdPalavras);
    $('.qtdPalavras').html(qtdPalavras);

    $('.campo-digitacao').on('input', function () {
        $('.texto-digitado').text($(this).val());

    });
})