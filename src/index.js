import todoFactory from './todo';
import './style.css';
const doContainer = document.getElementById("taskcontainer");
let toDoList = [];


let k = todoFactory("Joel");

console.log(k.doPriority);
k.logname();
k.setPriority(10);
console.log(k.doPriority);

function addDo(){

}

function deleteToDo(doId){

}

function refreshToDos(){
    
}

function displayDo(toDo){
    const doBox = document.createElement('div');
    doBox.id = "toDo" + toDo.doName;
    doBox.classList.add("doBox");
    doBox.classList.add("priority" + toDo.doPriority);

    doBox.innerHTML = `<div class="toDoName">${toDo.doName}</div>
    <div class="toDoDate">Date: ${toDo.doDate}</div>`;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add("toDoDelete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        deleteToDo(toDo.id);
        refreshToDos();
    });

    let detailsButton = document.createElement(`button`);
    detailsButton.classList.add("toDoDetail");
    detailsButton.textContent = "Details";
    detailsButton.addEventListener('click', () => {
        //display stuff
    });

    let editButton = document.createElement(`button`);
    editButton.classList.add("toDoEdit");
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
        //display stuff
        console.log(`pressed edit button ${toDo.id}`);
    });

    let completeButton = document.createElement(`button`);
    completeButton.classList.add("toDoComplete");
    completeButton.textContent = "Complete";
    completeButton.addEventListener('click', () => {
        toDo.completed = !toDo.completed;
        //display update?
    });

    doBox.appendChild(completeButton);
    doBox.appendChild(detailsButton);
    doBox.appendChild(editButton);
    doBox.appendChild(deleteButton);

    doContainer.appendChild(doBox);
}

let m = todoFactory("testing1", "k", "5/5/2055", "do stuff", false, 3);


m.id = 543543;

let s = todoFactory("testing2", "k", "6/5/2055", "do stuff", false, 1);

let o = todoFactory("testing3", "k", "6/5/2055", "do stuff", false, 2);

displayDo(m);
displayDo(s);
displayDo(o);