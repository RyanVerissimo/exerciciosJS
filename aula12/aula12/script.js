// const lago = {
//     agua: true,
//     peixe: "nemo",
//     tamanho: "2km",
//     count: 1
// }

// console.log(lago)
// console.log(JSON.stringify(lago))

// Atividade 01
// Crie um objeto JSON que represente informações sobre um livro. O objeto
// deve ter propriedades como título, autor, ano de publicação e uma lista de
// palavras-chave.

// const livro = {
//     "título": "Amor à primeira vista",
//     "autor": "Ryan Oliveira",
//     "anoPublicacao": "1998",
//     "palavraChave": ["amor", "distancia"]
// }
// console.log(livro)

//Atividade 02
// Dada a seguinte lista de objetos JSON que representam livros,
// adicione um novo estudante, remova o estudante com um determinado
// ID e atualize as notas de todos os estudantes em uma determinada
// disciplina.

let livros = [
    {   
        "id": 1,
        "título": "Amor à primeira vista",
        "autor": "Ryan Oliveira",
        "anoPublicacao": "1998",
        "palavraChave": ["amor", "distancia"]
    },
    {
        "id": 2,
        "título": "Uma noite na Lua",
        "autor": "Ryan Oliveira",
        "anoPublicacao": "2003",
        "palavraChave": ["viagem", "espaço"]
    }
]

function adicionarLivro(novoLivro) {
    livros.push(novoLivro);
}

function removerLivro(id) {
    livros = livros.filter(livros => livros.id !== id);
}

function atualizarLivros(palavraChave, NovapalavraChave) {
    livros.forEach(livros => {
        livros.palavraChaves[palavraChave] = NovapalavraChave;
    });
}

let livros2 = [
    {   
        "id": 3,
        "título": "Amor pela pessoa errada",
        "autor": "Ryan Oliveira",
        "anoPublicacao": "2018",
        "palavraChave": ["amor", "traumas"]
    }
]

adicionarLivro(livros2);

removerLivro(2);

function atualizarLivros(palavraChaveAntiga, novaPalavraChave) {
    livros.forEach(livro => {
        livro["palavra-chave"] = livro["palavra-chave"].map(palavra => palavra === palavraChaveAntiga ? novaPalavraChave : palavra);
    });
}

console.log(livros);