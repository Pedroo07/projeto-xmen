const personagens = document.querySelectorAll('.personagem')
personagens.forEach(personagem => {
    personagem.addEventListener('mouseout', () => {
        personagem.classList.remove('selecionado')
    })
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado')
        const personagemG = document.querySelector('.personagem-grande')
        const idPersonagem = personagem.attributes.id.value
        personagemG.src = `src/img/card-${idPersonagem}.png`
        const titulo = document.querySelector('.nome-personagem')
        titulo.innerHTML = `${idPersonagem}`
        const descricao = document.getElementById('descricao-personagem')
        descricao.innerHTML = personagem.getAttribute('data-description')
    })
})