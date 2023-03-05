const botao = document.querySelector('#calcular');

botao.addEventListener('click', () => {
    console.log('fui clicado');
})

function apertaBotao(nome) {
    console.log(nome);
}

apertaBotao('Aperte o botão');