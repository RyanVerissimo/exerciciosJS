async function fazerPedidoDeCafe() {
    console.log('Fazendo um pedido de Café...')
    const cafe = await prepararCafe()
    console.log('Café pronto:', cafe)
    console.log('Desfrutando do Café')
}

function prepararCafe() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Café quentinho')
        }, 2000)
    })
}

fazerPedidoDeCafe()
console.log('Fazendo outras coisas enquanto o café é preparado.')

const botao = document.getElementById('botao')
const catImages = document.getElementById('catImages')

botao.addEventListener('click', fetchCatImages)

async function fetchCatImages() {
    try {
        const promises = [
            fetch('https://api.thecatapi.com/v1/images/search?limit=1'),
            fetch('https://api.thecatapi.com/v1/images/search?limit=1'),
            fetch('https://api.thecatapi.com/v1/images/search?limit=1')
        ]

        const responses = await Promise.all(promises)
        const dataPromises = responses.map(response => {
            if (!response.ok) {
                throw new Error('A solicitação não foi bem-sucedida.')
            }
            return response.json()
        })

        const data = await Promise.all(dataPromises)

        catImages.innerHTML = ''
        data.forEach(catArray => {
            catArray.forEach(cat => {
                const catImage = document.createElement('img')
                catImage.src = cat.url
                catImage.alt = 'Imagem de gato'
                catImages.appendChild(catImage)
            })
        })

        console.log('Imagens de gatos recebidass:', data)
    } catch (error) {
        console.error('Erro:', error)
    }
}