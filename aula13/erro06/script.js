function validarIdade(idade) {
    if(typeof idade !== 'number' || idade < 0) {
        throw "A idade deve ser um número positivo."
    }
    if(idade < 18) {
        throw "Você é menor de idade e não pode acessar este conteúdo."
    }
    console.log('Acesso permitido. Bem-vindo!')
}

try {
    validarIdade(18)
} catch(erro) {
    console.log("Ocorreu um erro:", erro)
}