// saving data locally and searching to be added and will change delete button
// editing the task


// variables for html elements;
let addButton=document.querySelector('#add');
let listContainer=document.querySelector('ul');
let input=document.querySelector('#input-box');
//adding eventListeners and functions


//create a list element with input field text and add it to ul.

function addTask(){
    if(input.value!=""){
        let list = document.createElement('li');
        list.classList.add('list-elements');
        list.innerText=input.value;
        
        listContainer.append(list);
        
        let span = document.createElement('span');
        let dltBtn= document.createElement('button');
        span.append(dltBtn);
        list.append(span);

        dltBtn.innerText='Delete';
        dltBtn.classList.add('delete-btn');

        input.value='';
    }
}
//on pressing enter it should add the Task
function enter(e) {
    if (e.key === "Enter") {
        addTask();
    }
}

function deleteTask(e) {
    let liElement = e.target.parentElement.parentElement;
    liElement.remove();
    
}

function toggleTaskStatus(event) {
    let listItem = event.target;
    listItem.classList.toggle("checked");
    
}
//event handlers
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        deleteTask(event);
    } else if (event.target.tagName === "LI") {
       toggleTaskStatus(event);
    }
});

addButton.addEventListener('click',addTask);

input.addEventListener('keypress', enter);
