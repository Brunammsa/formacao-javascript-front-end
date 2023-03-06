document.addEventListener('click', function(event){
    var clickedElement = event.target;
    
    if(clickedElement.classList.contains('subtrair')){
        manipulaDados('subtrair', clickedElement.dataset.partecorpo);
        atualizaEstatistica(event.target.dataset.peca);
    }

    if(clickedElement.classList.contains('somar')){
        manipulaDados('somar', clickedElement.dataset.partecorpo);
        atualizaEstatistica(event.target.dataset.peca);
    }
})
const estatisticas = document.querySelectorAll("[data-estatistica]");
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

function manipulaDados(operador, parteCorpo){
    var parte = document.querySelector('#' + parteCorpo).value * 1;

    if (parte >= 0) {
        switch (operador) {
            case 'subtrair':
                if (parte > 0) {
                    parte--;
                }
                break;
            case 'somar':
                parte++;
                break;
            }
            document.querySelector("#" + parteCorpo).value = parte;
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
};