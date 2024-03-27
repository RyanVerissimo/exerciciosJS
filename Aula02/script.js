// Atividade 01
// function isPositiveAndEven(number) {
//     if(number > 0 && number % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// function askNumber() {
//     let number = prompt('Número: ')
//     return parseFloat(number)
// }

// let inputNumber = askNumber()
// let result = isPositiveAndEven(inputNumber)

// if(result) {
//     console.log(`O número ${inputNumber} é positivo e par.`)
// } else {
//     console.log(`O número ${inputNumber} não é positivo e par.`)
// }

// Atividade 02
// function returnImc(weight, height) {
//     return weight/(height*height) * 10000
// }

// function returnCategory (imc){
//     if(imc < 18.5) {
//         return "Magreza"
//     } else if (imc >= 18.5 && imc <= 24.9) {
//         return "Normal"
//     } else if (imc >= 25 && imc <= 29.9) {
//         return "Sobrepeso"
//     } else if (imc >= 30 && imc <= 39.9) {
//         return "Obesidade"
//     } else {
//         return "Obesidade mórbida"
//     }
// }

// let weight = Number(prompt('Peso em kg: '))
// let height = Number(prompt('Altura em metros: '))

// let imc = returnImc(weight, height)
// let category = returnCategory(imc)

// console.log(`Seu IMC é: ${imc.toFixed(2)}`)
// console.log(`Sua Categoria do IMC: ${category}`)

// Atividade 03
// let value = Number(prompt('Valor do produto:'))
// let age = Number(prompt('Sua idade:'))

// function returnDiscount(age) {
//     if(age > 0 && age < 18) {
//         return `Você ganhou um desconto por ter menos de 18 anos. Novo valor: ${(value * 0.9).toFixed(2)}`
//     } else {
//         return `Você não ganhou desconto por ter 18+ anos. Valor: ${(value).toFixed(2)}`
//     }
// }

// let finalInformation = returnDiscount(age)
// console.log(finalInformation)

// Atividade 04

// let lado1 = Number(prompt('Comprimento do lado1:'))
// let lado2 = Number(prompt('Comprimento do lado2:'))
// let lado3 = Number(prompt('Comprimento do lado3:'))

// if(lado1 + lado2 > lado3 &&
//     lado1 + lado3 > lado2 &&
//     lado3 + lado2 > lado1) {
//         if(lado1 === lado2 && lado2 === lado3) {
//             console.log('O triângulo é equilátero')
//         } else if(lado1 === lado2 || lado1 === lado3 || lado3 === lado2) {
//             console.log('O triângulo é isósceles')
//         } else {
//             console.log('O triângulo é escaleno')
//         }
//     } else {
//         console.log('Os lados digitados não formam um triângulo')
//     }

// atividade 05
// let weekNumber = Number(prompt('Digite um número da semana:'))

// switch(weekNumber) {
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda-feira')
//         break
//     case 3:
//         console.log('Terça-feira')
//         break
//     case 4:
//         console.log('Quarta-feira')
//         break
//     case 5:
//         console.log('Quinta-feira')
//         break
//     case 6:
//         console.log('Sexta-feira')
//         break
//     case 7:
//         console.log('Sábado')
//         break
//     default:
//         console.log('Número inválido!')
// }

// Atividade 06
//     let number = Number(prompt("Insira um número:"))

//     if (number <= 1) {
//         console.log(number + " não é um número primo.")
//     } else {
//         let isPrime = true
//         let divider = 2

//         while (divider * divider <= number && isPrime) {
//         if (number % divider === 0) {
//             isPrime = false
//         }
//         divider++ 
//         }

//         if (isPrime) {
//         console.log(`${number} é um número primo.`)
//         } else {
//         console.log(`${number} não é um número primo.`)
//         }
//     }

// Desafio

function triangleArea(base, height) {
    return (base * height)/2
}

function rectangleArea(base, height) {
    return base * height
}

function cubeVolume(edge) {
    return edge**3
}

function circleArea(ray) {
    return Math.PI * (ray**2)
}

console.log('Escolha a área desejada:')
console.log('[1] - Calcular Área do Triângulo')
console.log('[2] - Calcular Área do Retângulo')
console.log('[3] - Calcular Volume do Cubo')
console.log('[4] - Calcular Área do Círculo')
console.log('[5] - Sair')

let option = Number(prompt('Escolha o número correspondente:'))

switch(option) {
    case 1:
        let triangleBase = Number(prompt('Valor da base do triângulo:'))
        let triangleheight = Number(prompt('Valor da altura do triângulo:'))
        console.log(`O valor da área do triângulo é: ${triangleArea(triangleBase, triangleheight).toFixed(2)}`)
        break
    case 2:
        let rectangleBase = Number(prompt('Valor da base do retângulo:'))
        let rectangleheight = Number(prompt('Valor da altura do retângulo:'))
        console.log(`O valor da área do retângulo é: ${rectangleArea(rectangleBase, rectangleheight).toFixed(2)}`)
        break
    case 3:
        let edgeValue = Number(prompt('Valor da aresta do cubo:'))
        console.log(`O valor do volume do cubo é: ${cubeVolume(edgeValue).toFixed(2)}`)
        break
    case 4:
        let rayValue = Number(prompt('Valor do raio do círculo:'))
        console.log(`O valor da área do círculo é: ${circleArea(rayValue).toFixed(2)}`)
        break
    case 5:
        console.log('Sessão Terminada!')
        break
    default:
        console.log('Opção Inválida!')
}