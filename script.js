function gerarTarefa() {
    //Pega o valor inserido no input
    const inputTarefa = document.getElementById('inputTarefa').value.trim();

    //Cria uma variavel para mensagem
    let mensagem = document.getElementById('mensagem')

    if (inputTarefa == "") {
        // Se o input nao tiver nenhum valor, retorna uma mensagem de erro
        mensagem.textContent = 'Você precisa adicionar uma tarefa para que ela apareça!';
        // Muda a cor da mensagem para vermelho
        mensagem.style.color = 'red';
    } else {
        //Cria uma mensagem falando que a tarefa foi adicionada
        mensagem.textContent = 'Tarefa adicionada com sucesso!';
        // Muda a cor da mensagem para verde
        mensagem.style.color = 'green'
        //Pega a lista de tarefas e adiciona um item nela com o valor do input
        const itemTarefa = document.createElement('li');
        itemTarefa.textContent = inputTarefa;
        const listaTarefas = document.getElementById('listaTarefas');
        listaTarefas.appendChild(itemTarefa);
    }

    //Limpa o input após adicionar a tarefa
    document.getElementById('inputTarefa').value = '';
}