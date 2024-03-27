//Atividade 01
// let number = Number(prompt('Número:'))
// let count = 0

// while(number >= count) {
//     console.log(number)
//     number --
// }

//Atividade 02
// function returnAvarage(notes) {
//     let sum = 0
//     for(let i = 0; i < notes.length; i++) {
//        sum += notes[i] 
//     }
//     return sum/notes.length
// }

// function loopAvarage() {
//     let notes = []
//     let repeat = true

//     while(repeat) {
//         let note = Number(prompt('Digite a nota (ou digite qualquer letra para finalizar):'))

//         if(isNaN(note)) {
//             repeat = false
//         } else {
//             notes.push(note)
//             const avarage = returnAvarage(notes)
//             console.log(`Sua média está: ${avarage.toFixed(2)}`)
//         }
//     }
// }

// loopAvarage()

//Atividade 03 
// function numberSum(numbers) {
//     let sum = 0
//     for(let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     return sum
// }

// function loopSum () {
//     let numbers = []
//     let repeat = true

//     while(repeat) {
//         let number = Number(prompt('Número (ou digite "0" para encerrar):'))
//         if(number === 0) {
//             repeat = false
//         } else {
//             numbers.push(number)
//             const sum = numberSum(numbers)
//             console.log(`A soma dos números adicionados é: ${sum}`)
//         }
//     }
// }

// loopSum()

//Atividade 04
// function checkPassword(username, password) {
//     if(password === username) {
//         return alert('[ERRO]Senha não pode ser a mesma que o nome de usuário.')
//     }
// }

// let username = prompt('Nome de usuário:')
// let password = prompt('Senha:')

// function loopRegister() {
//     while(username === password) {
//         checkPassword(username, password)
//         username = prompt('Nome de usuário:')
//         password = prompt('Senha:')
//     }
//     console.log(`${username}, ${password}`)
// }

// loopRegister()

//Atividade 05
// function ageSum(ages) {
//     let sum = 0
//     for(let i = 0; i < ages.length; i++) {
//         sum += ages[i]
//     }
//     return sum
// }

// let ages = []
// let count = 0
// while(count < 5) {
//     let age = Number(prompt('Idade:'))
//     ages.push(age)
//     count++
// }
// let totalSum = ageSum(ages)
// let ageAvarage = totalSum/ages.length
// if(ageAvarage >= 0 && ageAvarage <=25) {
//     console.log(`A Média das idades requeridas foram: ${ageAvarage}.`)
//     console.log('Classificação da Turma: Jovem')
// } else if(ageAvarage >= 26 && ageAvarage <=60) {
//     console.log(`A Média das idades requeridas foram: ${ageAvarage}.`)
//     console.log('Classificação da Turma: Adulta')
// } else {
//     console.log(`A Média das idades requeridas foram: ${ageAvarage}.`)
//     console.log('Classificação da Turma: Idosa')
// }


//Atividade 06
// function numberSum(numbers) {
//     let sum = 0
//     for(let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     return sum
// }

// let numbers = []
// let count = 1
// while(count <= 50) {
//     numbers.push(count)
//     count++
// }
// console.log(`A soma dos números de 1 a 50 é: ${numberSum(numbers)}.`)

//atividade 07
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

// Atividade 08
// let number = Number(prompt("Insira um número:"))

// if (number <= 1) {
//     console.log(number + " não é um número primo.")
// } else {
//     let isPrime = true
//     let divider = 2

//     while (divider * divider <= number && isPrime) {
//     if (number % divider === 0) {
//         isPrime = false
//     }
//     divider++ 
//     }

//     if (isPrime) {
//     console.log(`${number} é um número primo.`)
//     } else {
//     console.log(`${number} não é um número primo.`)
//     }
// }

//Desáfio Prático
let balance = 1000;

function seeBalance() {
    console.log(`Saldo atual: ${balance.toFixed(2)}`)
}

function makeWithdrawal() {
    const withdraw = Number(prompt('Valor do saque:'))
    if(isNaN(withdraw) || withdraw <= 0 || withdraw > balance) {
        console.log('Valor de saque inválido.')
    } else {
        balance -= withdraw;
        console.log(`Saque de ${withdraw.toFixed(2)} feito com sucesso.`)
    }
}

function makeDeposit() {
    const deposit = Number(prompt('Valor do depósito:'))
    if(isNaN(deposit) || deposit <= 0) {
        console.log('Valor de depósito inválido.')
    } else {
        balance += deposit;
        console.log(`Depósito de ${deposit.toFixed(2)} feito com sucesso.`)
    }
}

while (true) {
    const option = Number(prompt(`
    ==== Menu ====
    [1] - Ver Saldo
    [2] - Fazer Saque
    [3] - Fazer Depósito
    [4] - Sair\n`))

    switch (option) {
        case 1:
            seeBalance()
            break;
        case 2:
            makeWithdrawal()
            break;
        case 3:
            makeDeposit()
            break
        case 4:
            console.log(`Programa encerrado!`)
            break
        default:
            console.log(`Opção inválida! Escolha novamente.`)
    }
}