function dizOiPara(nome) {
    console.log('oi, humano(a) ' + nome);
}

const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', (evento) => {
    console.log('Ei, você clicou em mim!');
});

const controle = document.querySelectorAll('[data-controle]');

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        parseInt(peca.value--);
    } else {
        parseInt(peca.value++);
    }
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const estatisticas = document.querySelectorAll('[data-estatistica]');

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    })
})

dizOiPara('bruna');
