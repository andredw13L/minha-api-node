// Controlador para lidar com operações relacionadas às tarefas

// Array simulando uma lista de tarefas
let tarefas = []

// Função para listar tarefas
const listarTarefas = (req, res) => {
    res.json(tarefas) // Retorna a lista de tarefas como JSON
}


// Função para criar uma nova tarefa
const criarTarefa = (req, res) => {

    // Obtém a descrição da nova tarefa do corpo da requisição
    const { descricao } = req.body

    // Cria um objeto representando a nova tarefa
    const novaTarefa = { id: tarefas.length + 1, descricao }

    // Adiciona a nova tarefa à lista de tarefas
    tarefas.push(novaTarefa)

    // Retorna a nova tarefa como JSON, com o status 201 (Created)
    res.status(201).json(novaTarefa);
}


// Função para atualizar uma tarefa existente
const atualizarTarefa = (req, res) => {

    // Obtém o ID da tarefa a ser atualizada dos parâmetros da URL
    const { id } = req.params

    // Obtém a nova descrição da tarefa do corpo da requisição
    const { descricao } = req.body

    // Encontra o índice da tarefa na lista de tarefas
    const index = tarefas.findIndex(tarefa => tarefa.id == parseInt(id))

    // Verifica se a tarefa foi encontrada
    if (index !== -1) {

        // Atualiza a descrição da tarefa
        tarefas[index].descricao = descricao

        // Retorna a tarefa atualizada como JSON
        res.json(tarefas[index])

    } else {
        // Retorna um erro 404 se a tarefa não foi encontrada
        res.status(404).json({ mensagem: 'Tarefa não encontrada' })
    }
}

// Função para excluir uma tarefa
const excluirTarefa = (req, res) => {

    // Obtém o ID da tarefa a ser excluída dos parâmetros da URL
    const { id } = req.params

    // Encontra o índice da tarefa na lista de tarefas
    const index = tarefas.findIndex(tarefa => tarefa.id === parseInt(id))

    // Verifica se a tarefa foi encontrada
    if (index !== -1) {
        // Remove a tarefa da lista de tarefas
        tarefas.splice(index, 1)
    } else {
        // Retorna um erro 404 se a tarefa não foi encontrada
        res.status(404).json({ mensagem: 'Tarefa não encontrada' })
    }
}

// Exportando os controladores para serem utilizados em outros arquivos
module.exports = { listarTarefas, criarTarefa, atualizarTarefa, excluirTarefa }
