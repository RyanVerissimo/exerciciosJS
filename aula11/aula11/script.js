// const esseObjeto = {
//     name: 'Luan',
//     age: 26,
//     isHuman: true
// }

// const qualquerNome = [
//     'Riberto',
//     'Amanda',
//     'Rafa',
//     esseObjeto,
//     'Otto'
// ]

// console.log(`${qualquerNome[1]} não gosta do ${qualquerNome[3].name} por que ele tem ${qualquerNome[3].age} anos`)

//Atividade 01
// Faça um programa que mostre na tela o dobro de cada número do
// seguinte array [50, 45, 67, 89, 10, 5].
let array = [50, 45, 67, 89, 10, 5]
array.forEach(function(element){
    console.log(element * 2)
})

//ou

let array2 = [50, 45, 67, 89, 10, 5]
let array2Map = array.map(element => element * 4)
console.log(array2Map)

// Atividade 02
// Faça um Programa que mostre na tela apenas os número pares do
// seguinte array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let array3Map = array3.map(element => element % 2 == 0)
console.log(array3Map)




