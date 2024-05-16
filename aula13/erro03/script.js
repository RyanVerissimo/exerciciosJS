try {
    const valor = 10/2
    console.log('valor:', valor)
} catch(erro) {
    console.error('Ocorreu um erro:', erro.message)
} finally {
    console.log('Este códigoo é executado independentemente de exceções. ')
}