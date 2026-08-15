const digitar = document.getElementById('digitar')
const botaoAdicionar =  document.querySelector ('.botao')
const listaTarefas = document.getElementById ('listaTarefas')

const lista = []

function exibirTarefas () {
        listaTarefas.innerHTML = ""; 
        lista.forEach((elemento, indice) => {
            let tarefa = document.createElement('li')
            const botaoConcluir = document.createElement('button')
            const botaoExcluir = document.createElement('button')

            botaoExcluir.addEventListener('click', (event) => {
                removerTarefa(indice)
                exibirTarefas()
            }) 

            botaoConcluir.addEventListener('click', (event) => {

            })
            
            tarefa.innerText = ` ${elemento}`
            botaoConcluir.classList.add('botaoEstilizado');
            botaoExcluir.classList.add('botaoEstilizado');
            tarefa.appendChild(botaoConcluir)
            tarefa.appendChild(botaoExcluir)
            listaTarefas.appendChild(tarefa)
    })

}

function adicionarTarefa() {
    if (digitar.value.length != 0) {
        lista.push(digitar.value.trim())
        digitar.value = ""
    }
}

function removerTarefa(indice) {
        lista.splice(indice, 1);
}

botaoAdicionar.addEventListener('click', (event) => {
    adicionarTarefa()
    exibirTarefas()
}) 