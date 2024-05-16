function dividir(a,b) {
    if(b===0) {
        throw "Divisão por zero não é permitida."
    }
    return a/b
}
try {
    const resultado = dividir(10,0)
    console.log("Resultado:", resultado)
} catch(erro) {
    console.error("Ocorreu um erro:", erro)
}