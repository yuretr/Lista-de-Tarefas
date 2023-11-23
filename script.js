const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");
// Puxando elementos do HTML

// Evento para disparar função, ao clicar no botão (btn)
btn.addEventListener("click", function(){
    if(tarefa.value == ""){
        // Se estiver vazio, vai aparecer um alerta
        alert("Digite uma tarefa válida!");
    } else {
        // Incluindo uma nova tarefa na lista
        lista.innerHTML += `<li>
                                <i class="fas fa-plus-circle check"></i>
                                <span>${tarefa.value}</span>
                                <i class="fa-solid fa-trash-can close"></i>
                            </li>`
        // += Mantem o que tem lá e adiciona o conteúdo digitado na sequência

        tarefa.value = "";
        // Apaga o que foi digitado no input depois de incluir na lista
    }
});

// Evento pra remover da lista ou marcar como concluída a tarefa
lista.addEventListener("click", function(e) {
    if (e.target.classList.contains("close")) {
        // O classList.contains("close") verifica se o elemento clicado (e.target) possui a classe "close"
        // e.target Representa o elemento específico que foi clicado
        e.target.parentElement.remove();
    } else if (e.target.classList.contains("check")) {
        e.target.style.color = "#349223";
        // Pinta de verde o ícone da tarefa concluida
        e.target.nextElementSibling.style.textDecoration = "line-through";
        // Marca o conteúdo de texto com risco, indicando que foi concluído
    }
});