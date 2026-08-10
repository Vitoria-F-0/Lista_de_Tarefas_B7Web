const digitar = document.querySelector('#digitar')
const botaoAdicionar =  document.querySelector ('.botao')
const listaTarefas = document.querySelector ('#listaTarefas')

const lista = []

function exibirTarefas () {
        listaTarefas.innerHTML = ""; 
        lista.forEach(elemento => {
        listaTarefas.innerHTML += `<li>${elemento}</li>`;
    });
}

function adicionarTarefa() {
    lista.push(digitar.value.trim())
    digitar.value = "";
}

botaoAdicionar.addEventListener('click', (event) => {
    adicionarTarefa();
    exibirTarefas();
}) 
