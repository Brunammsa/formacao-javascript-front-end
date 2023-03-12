const listaDeCores = document.querySelector(".lista");

const mostra = document.querySelector("#mostra").addEventListener("click", () => {
    listaDeCores.setAttribute("data-lista", "mostra");
})

const esconde = document.querySelector(".esconde").addEventListener("click", () => {
    listaDeCores.setAttribute("data-lista", "esconde");
})
