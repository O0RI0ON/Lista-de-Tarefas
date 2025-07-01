let tarefas = []

function gerarTarefa() {
    const inputTarefa = document.getElementById('inputTarefa').value.trim()

    let mensagem = document.getElementById('mensagem')

    if (inputTarefa == '') {

        mensagem.textContent = 'Você precisa adicionar uma tarefa para que ela apareça!'

        mensagem.style.color = 'red'
    } else {

        mensagem.textContent = 'Tarefa adicionada com sucesso!'

        mensagem.style.color = 'green'

        tarefas.push(inputTarefa)
    }

    document.getElementById('inputTarefa').value = ''

    renderizarTarefas()
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById('listaTarefas')
    listaTarefas.innerHTML = ''

    for (let i = 0; i < tarefas.length; i++) {
        const novaTarefa = document.createElement('li')
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement('button')
        botaoRemover.className = 'remover'
        botaoRemover.textContent = 'Remover'
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement('button')
        botaoEditar.className = 'editar'
        botaoEditar.textContent = 'Editar'
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
    mensagem.textContent = 'Tarefa removida com sucesso!'
    mensagem.style.color = 'yellow'
}

function editarTarefa(i) {
    let tarefaEditada = prompt('Edite a tarefa:').trim()
    if (tarefaEditada !== '') {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    mensagem.textContent = 'Lista limpa com sucesso!'
}