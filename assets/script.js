const digitar = document.getElementById('digitar')
const botaoAdicionar =  document.querySelector ('.botao')
const listaTarefas = document.getElementById ('listaTarefas')

const lista = []

function exibirTarefas () {
        listaTarefas.innerHTML = ""; 
        lista.forEach(elemento => {
            let tarefa = document.createElement('li')
            const botaoConcluir = document.createElement('button')
            const botaoExcluir = document.createElement('button')
            
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
botaoAdicionar.addEventListener('click', (event) => {
    adicionarTarefa()
    exibirTarefas()
}) 
