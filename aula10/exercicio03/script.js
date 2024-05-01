let number = document.getElementById('numero')
let vetor = []
let res = document.getElementById('res')

function adicionar() {
    let numero = Number(number.value)
    if(isNaN(numero) || numero < 0) {
        alert('Adicione um número válido!')
        number.focus()
    } else {
        vetor.push(numero)
        number.value = ''
    }
}

function finalizar() {
    let soma = 0
    for(let i = 0;i < vetor.length; i++) {
        soma += vetor[i]
    }
    res.innerHTML = soma
}

document.getElementById('adicionar').addEventListener('click', adicionar)
document.getElementById('finalizar').addEventListener('click', finalizar)