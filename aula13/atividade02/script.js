let name = document.getElementById('name').value
try {
    validateName('Ryan')
} catch(erro) {
    console.error("Ocorreu um erro:", erro)
}

let age = document.getElementById('age').value
try {
    validateAge(21)
} catch(erro) {
    console.error("Ocorreu um erro:", erro)
}


function validateName(name) {
    if(typeof name !== 'string') {
        throw "Insira um nome correto."
    }
    console.log('Nome Inserido com sucesso.')
}



function validateAge(age) {
    if(typeof age !== 'number' || age < 0) {
        throw "A idade deve ser um número positivo."
    }
    if(age < 18) {
        throw "Você é menor de idade e, por isso, não pode acessar nosso conteúdo."
    }
    console.log('Idade Inserida com sucesso.')
}



let email = document.getElementById('email').value
function validateEmail(email) {
    const characteres = "@"
    if(!email.includes(characteres)) {
        throw "Insira um email correto."
    }
    console.log('Email Inserido com sucesso.')
}
try {
    validateEmail('luqi@gmail.com')
} catch(erro) {
    console.error("Ocorreu um erro:", erro)
}

