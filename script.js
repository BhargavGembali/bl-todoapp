const taskInput= document.getElementById('task-input');
const addButton= document.getElementById('add-button');
const taskList= document.getElementById('task-list');

addButton.addEventListener('click', function(){
    const taskText= taskInput.value.trim();
    if(taskText!==''){
        const listItem= document.createElement('li');
        const taskSpan= document.createElement('span');
        taskSpan.textContent=taskText;
        taskSpan.classList.add('task-text');

        const deleteItem= document.createElement('button');
        deleteItem.textContent='Delete';
        deleteItem.classList.add('delete-button');
        const checkedItem= document.createElement('input');
        checkedItem.type = 'checkbox';
        checkedItem.classList.add('checkedbutton');
        checkedItem.classList.add('checkedbutton');
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteItem);
        listItem.appendChild(checkedItem);
        taskList.appendChild(listItem);
        taskInput.value='';
    }
});

taskList.addEventListener('click', function(event){
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});

taskList.addEventListener('click', function(event){
    if(event.target.classList.contains('checkedbutton')){
        const taskSpan = event.target.parentNode.querySelector('.task-text');
        const checkbox = event.target;

        if (checkbox.checked) {
            taskSpan.style.textDecoration = 'line-through';
        } else {
            taskSpan.style.textDecoration = 'none';
        }
    }
});
