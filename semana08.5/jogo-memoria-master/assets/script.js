const cartas = document.querySelectorAll('.carta')
console.log(cartas[0].style.order)

function embaralhar() {
    cartas.forEach(carta => {
        let numeroAleatorio = Math.floor(Math.random() * 12)
        carta.style.order = numeroAleatorio
        console.log(carta)
    })
};
embaralhar();

let primeiraCarta = null
let segundaCarta = null

cartas.forEach(carta => { carta.addEventListener('click', virarCarta) })

function virarCarta() {
    if (primeiraCarta && segundaCarta) {
        return
    } else {
        this.classList.add('flip')
    }
    if (primeiraCarta === null) {
        primeiraCarta = this
    } else {
        if (segundaCarta != null) {
            return
        }
        if (this === primeiraCarta) {
            return
        } else {
            segundaCarta = this
            if (segundaCarta.dataset.framework === primeiraCarta.dataset.framework) {
                primeiraCarta = null
                segundaCarta = null
                return
            } else {
                setTimeout(() => {
                    primeiraCarta.classList.remove('flip')
                    segundaCarta.classList.remove('flip')
                    primeiraCarta = null
                    segundaCarta = null
                }, 1500)
            }
        }
    }
}

function check (carta){
    return carta.classList.contains()
}

cartas.every((carta)=>{return carta.classList.contains('flip')})

