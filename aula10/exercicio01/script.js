let nome = document.getElementById('nome')
let email = document.getElementById('email')
let senha = document.getElementById('senha')
let botao = document.getElementById('button')
let divMsgERRO = document.getElementById('mensagemErro')
let formulario = document.getElementById('meuFormulario');

function msgErro(event) {
    event.preventDefault();

    if(nome.value === '' || email.value === '' || senha.value === '') {
        divMsgERRO.textContent = 'Erro na validação, certifique os campos!'
    } else {
        divMsgERRO.textContent = ''
        alert('Formulário Enviado com sucesso')
    }
}

function validarEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

botao.addEventListener('click', msgErro)
formulario.addEventListener('submit', msgErro);

