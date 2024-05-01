let nome = document.getElementById('nome')
let botao = document.getElementById('button')

function validar(event) {
    event.preventDefault()
    if(nome.value === '') {
        alert('Preencha todos os campos')
    } else {
        let novoElemento = document.createElement('div')
        novoElemento.textContent = `${nome.value}`
        document.getElementById('mensagem').appendChild(novoElemento)
        document.getElementById('nome').value = ''
    }
}

botao.addEventListener('click', validar)

