//Atividade 01
// let numbersVetor = []
// let pairNumbers = []
// let oddNumbers = []
// let number
// function numerosEmVetores () {
//     for(let i = 0;i < 20; i++) {
//         do {
//             number = Number(prompt(`Número ${i + 1}:`))
//         }while(isNaN(number) || number < 0)
//         numbersVetor.push(number)
//         if(number % 2 == 0) {
//             pairNumbers.push(number)
//         } else {
//             oddNumbers.push(number)
//         }
//     }
//     console.log(`Vetor principal: ${numbersVetor}
//     Vetores de números pares: ${pairNumbers}
//     Vetores de números ímpares: ${oddNumbers}`)
// }

// numerosEmVetores()

//Atividade 02
// let vetor = []
// let number
// function seeVetor (){
//     for(let i = 0; i < 5;i++) {
//         do {
//             number = Number(prompt(`Número ${i + 1}`))
//         }while(isNaN(number) || number < 0)
//         vetor.push(number)
//     }
//     console.log(vetor)
// }

// seeVetor()

//Atividade 03
// function interrogatorio() {
//     let respostas = [];
//     let perguntas = [
//         "Telefonou para a vítima?",
//         "Esteve no local do crime?",
//         "Mora perto da vítima?",
//         "Devia para a vítima?",
//         "Já trabalhou com a vítima?"
//     ];
//     let resposta;
//     for (let i = 0; i < perguntas.length; i++) {
//         do {
//             resposta = prompt(perguntas[i] + " ([S] - Sim  [N] - Não)").toUpperCase();
//         } while (resposta !== 'S' && resposta !== 'N'); 
//         respostas.push(resposta);
//     }

//     let positivas = respostas.filter(resposta => resposta === 'S').length;

//     if (positivas === 2) {
//         console.log("Suspeita");
//     } else if (positivas >= 3 && positivas <= 4) {
//         console.log("Cúmplice");
//     } else if (positivas === 5) {
//         console.log("Assassino");
//     } else {
//         console.log("Inocente");
//     }
// }

// interrogatorio();

//Atividade 04
// let vetor = []
// let number

// function showVetor () {
//     for(let i = 0; i < 10; i++) {
//         do {
//             number = Number(prompt(`Número ${i + 1}:`))
//         }while(isNaN(number) || number < 0)
//         vetor.push(number)
//     }
//     console.log(`Seu vetor: ${vetor}`)
// }

// showVetor()

//Atividade 05

// function calculateAvarage() {
//     let sum = 0
//     let notes = []
//     let questions = [
//         "Sua primeira nota:",
//         "Sua segunda nota:",
//         "Sua terceira nota:",
//         "Sua quarta nota:"
//     ]
//     let note
//     for(let i = 0; i < questions.length; i++) {
//         do {
//             note = Number(prompt(questions[i]))
//         }while(isNaN(note) || note < 0)
//         notes.push(note)
//         sum += notes[i]
//     }
//     let avarage = sum/notes.length
//     console.log(`Suas notas foram: ${notes}`)
//     console.log(`Sua média foi: ${avarage.toFixed(2)}`)
// }

// calculateAvarage()

//Desafio Prático
function captureVotesSO () {
    let votes = []
    let operationalSystem
    do {
        do {
            operationalSystem = Number(prompt(`Qual o melhor Sistema Operacional para uso em servidores?
            0 - Encerrar votação
            1- Windows Server
            2- Unix
            3- Linux
            4- Netware
            5- Mac OS
            6- Outro`))

            if(isNaN(operationalSystem) || operationalSystem < 0 || operationalSystem > 6) {
                alert('Digite uma opção válida!')
            }
        }while(isNaN(operationalSystem) || operationalSystem < 0 || operationalSystem > 6)
        if(operationalSystem !== 0) {
            votes.push(operationalSystem)
        }
    }while(operationalSystem !== 0)
    return votes
}

function percentageOfVotes(votes) {
    let windowsServer = votes.filter(operationalSystem => operationalSystem === 1).length
    let unix = votes.filter(operationalSystem => operationalSystem === 2).length
    let linux = votes.filter(operationalSystem => operationalSystem === 3).length
    let netware = votes.filter(operationalSystem => operationalSystem === 4).length
    let macOS = votes.filter(operationalSystem => operationalSystem === 5).length
    let others = votes.filter(operationalSystem => operationalSystem === 6).length
    let totalVotes = votes.length

    let sistemasOperacionais = ['Windows Server', 'Unix', 'Linux', 'Netware', 'Mac OS', 'Outros'];
    let votosPorSistema = [windowsServer, unix, linux, netware, macOS, others];

    let maisVotadoIndex = votosPorSistema.indexOf(Math.max(...votosPorSistema));
    let maisVotado = sistemasOperacionais[maisVotadoIndex];

    console.log(`Sistema Operacional Votos %
    ------- ----------- ----- -
    Windows Server ${windowsServer} ${(windowsServer/totalVotes).toFixed(2)*100}%
    Unix ${unix} ${(unix/totalVotes).toFixed(2)*100}%
    Linux ${linux} ${(linux/totalVotes).toFixed(2)*100}%
    Netware ${netware} ${(netware/totalVotes).toFixed(2)*100}%
    Mac OS ${macOS} ${(macOS/totalVotes).toFixed(2)*100}%
    Outros ${others} ${(others/totalVotes).toFixed(2)*100}%
    --------------------------- Total : ${totalVotes}
    O sistema operacional mais votado foi: ${maisVotado} com ${votosPorSistema[maisVotadoIndex]} votos, representando ${(votosPorSistema[maisVotadoIndex] / totalVotes).toFixed(2) * 100}% do total de votos.`)
}

percentageOfVotes(captureVotesSO())