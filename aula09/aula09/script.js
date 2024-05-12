function manipuladorEvento() {
    console.log('Evento clicado!');
    document.getElementById('meuBotao').removeEventListener('click', manipuladorEvento);
}

document.getElementById('meuBotao').addEventListener('click', manipuladorEvento);