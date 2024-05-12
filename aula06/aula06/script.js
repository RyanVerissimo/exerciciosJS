// function validate () {
//     let phoneNumber = Number(prompt('Número do telefone:'))
//     let password = prompt('Senha:')
//     if(phoneNumber === 123123 || password === 'ab123') {
//         alert('Autenticado!')
//     } else {
//         alert('Erro na autenticação')
//     }
// }

// validate()

//1
// function avarage() {
//     let noteOne = Number(prompt('primeira nota:'))
//     let noteTwo = Number(prompt('segunda nota:'))
//     let noteThree = Number(prompt('terça nota:'))
//     let avarageNotes = (noteOne + noteTwo + noteThree)/3
//     alert(`Sua média foi: ${avarageNotes.toFixed(2)}`)

// }

// avarage()

//2
// function conversion() {
//     let valueReal = Number(prompt('Valor em real:'))
//     let valueDolar = valueReal*4.98
//     alert(`Valor em real: ${valueReal.toFixed(2)}
//     Valor em Dólar: ${valueDolar.toFixed(2)}`)
// }

// conversion()

//3
// function area() {
//     let base = Number(prompt('base:'))
//     let height = Number(prompt('height:'))
//     let area = (base*height)/2
//     alert(`Área: ${area.toFixed(2)}`)
// }
// area()

//4
// function imc () {
//     let height = Number(prompt('Altura:'))
//     let weight = Number(prompt('Peso:'))
//     let imcPerson = weight/(height**2)
//     alert(`Seu imc: ${imcPerson.toFixed(2)}`)
// }
// imc()

//5
// function validateNumber() {
//     let number = Number(prompt("Número:"))
//     if(number %2 === 0){
//         alert(`${number} é um número par.`)
//     } else {
//         alert(`${number} é um número impar.`)
//     }
// }

// validateNumber()

// function game(){
//     let chooseOne = prompt('Pedra, Papel ou Tesoura?').toLowerCase()
//     let chooseTwo = prompt('Pedra, Papel ou Tesoura?').toLowerCase()
//     if(chooseOne === chooseTwo) {
//         alert('Empate')
//     } else if(chooseOne === 'pedra' && chooseTwo === 'tesoura' || chooseOne ==='papel' && chooseTwo === 'pedra' || chooseOne === 'tesoura' && chooseTwo === 'papel') {
//         alert(`Jogador um ganhou!`)
//     } else {
//         alert('Jogador dois ganhou!')
//     }

// }
// game()

// function isTriangle(sideA, sideB, sideC) {
//     if(sideA + sideB > sideC && sideA + sideC > sideB && sideC + sideB > sideA) {
//         return true
//     } else {
//         return false
//     }
// }

// function typeOfTriangle(callback) {
//     let sideA = Number(prompt('lado A:'))
//     let sideB = Number(prompt('lado B:'))
//     let sideC = Number(prompt('lado C:'))
//     if(callback(sideA, sideB,sideC)) {
//         if(sideA === sideB && sideB == sideC) {
//             alert('Equilátero')
//         } else if(sideA === sideB && sideA !== sideC || sideB === sideC && sideB !== sideA || sideA === sideC && sideA !== sideB) {
//             alert('Isósceles')
//         } else {
//             alert('Escaleno')
//         }
//     }
// }
// typeOfTriangle(isTriangle)


//PARAMETRO---------
//1
// function areaSide(side) {
//     area = side**2
//     alert(area)
// }
// let side = Number(prompt('Lado:'))
// areaSide(side)

//2
// function baseSide(lBase, bBase, height) {
//     area = (lBase + bBase)*height/2
//     alert(area)
// }
// let lBase = Number(prompt('Lado menor:'))
// let bBase = Number(prompt('Lado maior:'))
// let height = Number(prompt('Altura:'))
// baseSide(lBase, bBase, height)

//3
// function speedRace(speed) {
//     if(speed > 50) {
//         alert('Acima da velocidade')
//     } else {
//         alert('Dentro da velocidade')
//     }
// }
// let speed = Number(prompt('Velocidade:'))
// speedRace(speed)

//4
// function heightToCm(height) {
//     alert(`Sua altura em centímetros é: ${height * 100}`)
// }
// let height = Number(prompt('Altura para ser convertida:'))
// heightToCm(height)

//5
// function convertTemperature(temperatureC) {
//     let TemperatureF = (temperatureC * 9)/5 + 32
//     alert(TemperatureF)
// }
// let temperatureC = Number(prompt('Temperatura em Celsius:'))
// convertTemperature(temperatureC)

//6 
// function convertKmtoM(distance) {
//     let distanceMeter = distance*1000
//     alert(distanceMeter)
// }
// let distance = Number(prompt('Distância em km:'))
// convertKmtoM(distance)

//7
// function avarageSpeed(distance, time) {
//     let avarageSpeed = distance/time
//     alert(`Velocidade média igual a: ${avarageSpeed}`)
// }
// let distance = Number(prompt('Distância:'))
// let time = Number(prompt('Tempo:'))
// avarageSpeed(distance, time)

//01doPDF
// let count = 0
// function counterVowels(palavra) {
//     for(letra of palavra) {
//         if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//             count += 1
//         }
//     }
//     console.log(`A palavra ${palavra} tem ${count} vogais.`)
// }
// let palavra = prompt('Palavra:').toLowerCase()
// // counterVowels('Parametro')
// counterVowels(palavra)

//100 50 20 10 5 2 1
function contarNotasEMoedas(valor) {
    const notas = [100, 50, 20, 10, 5, 2, 1];
    const contador = {};

    notas.forEach(nota => {
        const qtdNotas = Math.floor(valor / nota);
        contador[nota] = qtdNotas;
        valor -= qtdNotas * nota;
    });

    return contador;
}

function calcularNotasEMoedas() {
    const valorInput = parseFloat(prompt("Digite o valor: "));
    const notasMoedas = contarNotasEMoedas(valorInput);
    let resultado = "";

    for (const notaMoeda in notasMoedas) {
        if (notasMoedas[notaMoeda] > 0) {
            resultado += `Notas/moedas de ${notaMoeda}: ${notasMoedas[notaMoeda]}\n`;
        }
    }

    alert(resultado);
}

calcularNotasEMoedas();

