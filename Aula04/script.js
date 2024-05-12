//Atividade 01
// for(let i=1; i <= 10; i++) {
//     console.log(i)
// }

//Atividade 02
// let requestedNumber = Number(prompt('Número da tabuada:'))
// console.log(`---Tabuada do ${requestedNumber}---`)
// for(let i = 1; i <=10; i++) {
//     console.log(`${requestedNumber} x ${i} = ${requestedNumber*i}`)
// }

// Atividade 03
// let number
// do {
//     number = Number(prompt('Número:'))
// }while(isNaN(number) || number < 0)
// for(let i = number; i >= 0; i--) {
//     console.log(i)
// }

//Atividade 04
// let number = parseInt(prompt("Número: "))
// let primo = true

// if (number === 1) {
//   primo = false
// } else if (number <= 1) {
//   primo = false
// } else {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       primo = false
//       break
//     }
//   }
// }

// if (primo) {
//   console.log(`${number} é um número primo.`)
// } else {
//   console.log(`${number} não é um número primo.`)
// }

//Atividade 05
// let word = prompt("Palavra: ")
// let newWord = ""

// for (let letra of word) {
//   if ("aeiouAEIOU".includes(letra)) {
//     continue;
//   }
//   newWord += letra
// }
// console.log(`Palavra sem vogais: ${newWord}`)

//Atividade 06
let word = prompt('Palavra:').toUpperCase()
let reverseWord = word.split("").reverse().join("")
console.log(reverseWord)
if(word === reverseWord) {
    console.log('É palíndromo')
} else {
    console.log('Não é palíndromo')
}
