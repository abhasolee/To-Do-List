//Selectors 
const addbutton= document.querySelector('.todo-button');
const todoullist=document.querySelector('.todo-list');
const todoinput=document.querySelector('.todo-input');
const filterOption= document.querySelector('.filter-todos');


//Event Listenersa
addbutton.addEventListener('click', addlist);
todoullist.addEventListener('click', deleteitem);
filterOption.addEventListener('change', filtertodo);

//Functions
function addlist(event){
    //Preventing form submission
    event.preventDefault();
    //Create new div
    const tododiv=document.createElement('div');
    tododiv.classList.add('todo');

    //Create new list item
    const todolist=document.createElement('li');
    todolist.innerText=todoinput.value;
    todolist.classList.add('todo-listitem');

    //Put the list item in the div
    tododiv.appendChild(todolist);

    //Create complete button
    completedbutton=document.createElement('button');
    completedbutton.classList.add('completedbutton');
    completedbutton.innerHTML='<i class="fas fa-check"></i>';

    //Put it inside div
    tododiv.appendChild(completedbutton);

    //Create delete button
    trashbutton=document.createElement('button');
    trashbutton.classList.add('trashbutton');
    trashbutton.innerHTML='<i class="fas fa-trash"></i>';

    //Put it inside div
    tododiv.appendChild(trashbutton);

    //Put the div inside the ul tag
    todoullist.appendChild(tododiv);

    //Delete from the input box
    todoinput.value='';
}

//Function to delete items
function deleteitem(e){
    const item= e.target;
    //Delete todo
    if (item.classList[0]=== "trashbutton"){
        const todoitem= item.parentElement;
        //Animation
        todoitem.classList.add('fall');
        todoitem.addEventListener('transitionend', function(){
            todoitem.remove();
        });
    }

    //Cross out completed task
    if (item.classList[0]=== "completedbutton"){
        const todoitem= item.parentElement;
        todoitem.classList.toggle('completed');
    }
}

//Function to filter todos
function filtertodo(e){
    const todochilds=todoullist.childNodes;
    todochilds.forEach(function(singletodo) {
        switch (e.target.value){
            case "all":
                singletodo.style.display="flex";
                break;
            case "ticked":
                if (singletodo.classList.contains("completed")){
                    singletodo.style.display="flex";
                }else{
                    singletodo.style.display="none";                
                }
                break;
            case "unticked":
                if (!singletodo.classList.contains("completed")){
                    singletodo.style.display="flex";
                }
                else{
                    singletodo.style.display="none";
                }
                break;
        }
    });
}