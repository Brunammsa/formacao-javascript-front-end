let livros = [];
const endPointAPi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosApi();

async function getBuscarLivrosApi() {
    const res = await fetch(endPointAPi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}
