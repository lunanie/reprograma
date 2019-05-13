let btnAdd = document.getElementById('btnAdd');
let taskContent = document.getElementById("taskContent");
let inputTaskAdd = document.getElementById('inputTaskAdd');
let btnCompleteAll = document.getElementById('btn__completeAll');
let btnDeleteAll = document.getElementById('btn__deleteAll');
let btnMarkOffAll = document.getElementById('btnMarkOffAll');

btnAdd.addEventListener('click', function () {
    // event.preventDefault();

    if (inputTaskAdd.value.trim() === "") {
        alert('Campo inválido! Digite novamente. ')
        return;
    }

    // adicionando tarefas
    let taskContent = document.getElementById('taskContent')
    let task = document.createElement('li')
    task.innerHTML = inputTaskAdd.value
    taskContent.appendChild(task)


    // limpando input de tarefa
    inputTaskAdd.value = ''

    // deletando tarefas
    let taskDelete = document.createElement('span')
    taskDelete.innerHTML = '<i class="fas fa-times-circle"></i>'
    taskDelete.classList = 'close'
    task.appendChild(taskDelete)

    // concluindo uma tarefa
    task.addEventListener('click', function () {
        if (task.tagName === 'LI') {
            task.classList.toggle('checked');
        }
    })


    // removendo uma tarefa
    taskDelete.addEventListener('click', function () {
        task.remove()
    })

    // concluindo todas as tarefas
    btnCompleteAll.addEventListener('click', function () {
        if (task.tagName === 'LI') {
            task.classList.add('checked')
        }

        btnCompleteAll.style.display = "none";
        btnMarkOffAll.style.display = "block";

    })

    // desmarcando todas as tarefas
    btnMarkOffAll.addEventListener('click', function () {
        if (task.tagName === 'LI') {
            task.classList.remove('checked')
        }

        btnMarkOffAll.style.display = "none";
        btnCompleteAll.style.display = "block";

    })

    
    // removendo todas as tarefas
    btnDeleteAll.addEventListener('click', function () {
        task.remove()
    })


    // Adiciona o atributo que permite a movimentação
    task.setAttribute('draggable', true);

    //Seleciona o evento de click, define que o elemento pode ser arrastado (guarda a classe numa variável)
    task.addEventListener('dragstart', dragStart);

    //Seleciona a localização do evento de click e direciona para inserção depois do proximo elemento
    task.addEventListener('dragover', dragOver);

    // Finaliza o momvimento
    task.addEventListener('dragend', dragEnd);

    function dragStart(event) {
        dragging = event.target.closest('li');
    }

    function dragOver(event) {
        const location = event.target.closest('li');
        this.parentNode.insertBefore(dragging, location);// this.parentNode equivale a class timeline
    }
    function dragEnd() {
        dragging = null;//usamos o dragging = null para dizer que deve parar o movimento

    }
});
