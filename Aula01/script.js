// let name = prompt("What's u name?")
// console.log(name)

// let num1 = Number(prompt("First number: "))
// let num2 = Number(prompt("Second number: "))
// console.log(num1+num2)

// let idade = Number(prompt("What's your age?"))
// let anoAtual = 2024
// let anoNascimento = anoAtual - idade
// console.log(anoNascimento)

// let raio = Number(prompt("Insira o raio do círculo: "))
// let pi = Math.PI
// let areaCirculo = pi * (raio*raio)
// console.log(areaCirculo.toFixed(2))

// let valorDolar = Number(prompt('Digite o valor em dólar: '))
// let valorEuro = valorDolar * 0.92
// console.log(valorEuro)

// let precoProduto = Number(prompt('Digite o preco do produto: '))
// let produtoDesconto = (precoProduto * 10)/100
// console.log(precoProduto - produtoDesconto)

// let valorMetro = Number(prompt('Digite o valor em metros: '))
// let valorCentimetros = valorMetro * 100
// console.log(valorCentimetros)

//Solicita ao usuário que insira o valor ganho por hora e o número de horas trabalhadas no mês
var valorHora = prompt("Quanto você ganha por hora?");
var horasTrabalhadas = prompt("Quantas horas você trabalhou no mês?");

// Calcula o salário bruto
var salarioBruto = valorHora * horasTrabalhadas;


// Calcula o desconto para o INSS (8%)
var descontoINSS = salarioBruto * 0.08;

// Calcula o salário menos o inss
var salarioINSS = salarioBruto - descontoINSS;

// Calcula o desconto para o Imposto de Renda (11%)
var descontoIR = (salarioBruto - salarioINSS) * 0.11;

// Calcula o desconto para o sindicato (5%)
var descontoSindicato = salarioBruto * 0.05;

// Calcula o salário líquido subtraindo os descontos
var salarioLiquido = salarioINSS - descontoIR - descontoSindicato;

// Exibe os resultados
console.log("1. Salário bruto: " + salarioBruto.toFixed(2));
console.log("2. Valor descontado para o INSS: " + descontoINSS.toFixed(2));
console.log("3. Valor descontado para o sindicato: " + descontoSindicato.toFixed(2));
console.log("4. Salário líquido: " + salarioLiquido.toFixed(2));
console.log("5. Total de descontos: " + (descontoIR + descontoINSS + descontoSindicato).toFixed(2));