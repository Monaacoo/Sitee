var entrada = document.querySelector("input")
var anotacao = document.querySelector("div.anotacao")

function adicionarTarefa(){
    var entradaTexto = entrada.value

    entrada.value = ""

    var tarefa = document.createElement("div")
    tarefa.setAttribute("class", "anotacao-tarefa")
    tarefa.innerText = entradaTexto
    anotacao.appendChild(tarefa)
}
