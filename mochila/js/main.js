const formulario = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('item')) || [];

itens.forEach(elemento => {
    criaElemento(elemento)
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const elementoNome = evento.target.elements['nome'];
    const elementoQuatidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome == nome.value);

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento=>elemento.id === existe.id)] = itemAtual;

    } else {
        itemAtual.id = itens[itens.lenght -1] ? (itens[itens.lenght - 1]).id + 1: 0;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem('item', JSON.stringify(itens));

    elementoNome.value = "";
    elementoQuatidade.value = "";

});

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    
    const numeroItem = document.createElement('strong');

    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = 'x';

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id);
    })

    return elementoBotao;
}

function deletaElemento(tag, id) {
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
    localStorage.setItem('item', JSON.stringify(itens));
}