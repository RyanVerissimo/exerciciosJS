try {
    const valor = 10/0
    console.log('valor:', valor)
} catch(ero) {
    console.error("Ocorreu um erro:", erro.message)
} finally {
    console.log('Este código é executado independentemente de exceções.')
}