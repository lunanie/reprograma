const numeroUm = document.getElementById('num1')
const numeroDois = document.getElementById('num2')
const formulario = document.getElementById('form')
const resultado = document.getElementById('resultado')

function soma(a, b) {
  return a + b
}

formulario.addEventListener('submit', function(chuchu){
  chuchu.preventDefault();
  
  const numeroUmValor = parseInt(numeroUm.value)
  const numeroDoisValor = parseInt(numeroDois.value)

  console.log('tipo de numero1', typeof numeroUmValor)
  console.log('tipo de numero2', typeof numeroDoisValor)
  
  resultado.innerHTML =
          soma(numeroUmValor, numeroDoisValor);
})
