const menorValor = 1;
const maiorValor = 100;

const numeroAleatorio = sorteiaNumero();

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

elementoMaiorValor.innerHTML = maiorValor;
elementoMenorValor.innerHTML = menorValor;

function sorteiaNumero() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('o número secreto é:', numeroAleatorio);
