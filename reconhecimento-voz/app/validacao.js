function verificaNumeroValido(chute) {
    const numero = parseInt(chute);

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2><h3>O número secreto era o ${numeroAleatorio}</h3>
        <button id="jogar-novamente" class="btn-jogar">Joga novamente</button>
        `
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `
        <div>Tente um número menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>Tente um número maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
        }
})