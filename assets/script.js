const digitar = document.getElementById ('digitar')
const botaoAdicionar =  document.querySelector ('.botao')
const listaTarefas = document.getElementById ('listaTarefas')

const lista = []

function exibirTarefas () {
        listaTarefas.innerHTML = ""; 
        lista.forEach((elemento, indice) => {
            let tarefa = document.createElement('li')
            const textoTarefa = document.createElement('span')
            tarefa.appendChild(textoTarefa)
            const caixaBotao = document.createElement('div')
            const botaoConcluir = document.createElement('button')
            botaoConcluir.innerText = 'Concluir'
            const botaoExcluir = document.createElement('button')
            botaoExcluir.innerText = 'Excluir'
            caixaBotao.appendChild(botaoConcluir)
            caixaBotao.appendChild(botaoExcluir)

            botaoConcluir.addEventListener('click', (event) => {
                concluirTarefa(event, textoTarefa)
            })

            botaoExcluir.addEventListener('click', (event) => {
                removerTarefa(indice)
                exibirTarefas()
            })
            
            textoTarefa.innerText = ` ${elemento}`
            botaoConcluir.classList.add('botaoEstilizado');
            botaoExcluir.classList.add('botaoEstilizado');
            tarefa.appendChild(caixaBotao)
            listaTarefas.appendChild(tarefa)
    })

}

function adicionarTarefa() {
    if (digitar.value.length != 0) {
        lista.push(digitar.value.trim())
        digitar.value = ""
    }
}

function concluirTarefa(event, textoTarefa) {
    textoTarefa.classList.toggle('desligado')
}

function removerTarefa(indice) {
        lista.splice(indice, 1);
}

botaoAdicionar.addEventListener('click', (event) => {
    adicionarTarefa()
    exibirTarefas()
}) 