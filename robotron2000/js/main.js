document.addEventListener('click', function(event){
    var clickedElement = event.target;
    
    if(clickedElement.classList.contains('subtrair')){
        manipulaDados('subtrair', clickedElement.dataset.partecorpo);
    }

    if(clickedElement.classList.contains('somar')){
        manipulaDados('somar', clickedElement.dataset.partecorpo);
    }
})

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
