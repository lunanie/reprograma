window.addEventListener('DOMContentLoaded', function (event) {
    let button = document.querySelector('#button');
    let result = document.querySelector('#result');
    button.addEventListener('click', function () {
        let checkedBoxes = document.querySelectorAll('input[name=question]:checked').length;
        document.querySelector('#result').scrollIntoView({
            behavior: 'smooth'
        });
        if (checkedBoxes <= 2) {
            result.innerHTML = `Você marcou ${checkedBoxes} de 10 nessa lista. Você não gosta de doces`;
        } else if (checkedBoxes <= 2 || checkedBoxes <= 5) {
            result.innerHTML = `Você marcou ${checkedBoxes} de 10 nessa lista. Você come só um pouco de doces`;
        } else if (checkedBoxes <= 5 || checkedBoxes <= 7) {
            result.innerHTML = `Você marcou ${checkedBoxes} de 10 nessa lista.Caramba, você MUITO doce! Parabéns!`;
        } else {
            result.innerHTML = `Você marcou ${checkedBoxes} de 10 nessa lista. Meu Deus! Deixa eu esconder meus doces de você!`;
        }
    });
});
