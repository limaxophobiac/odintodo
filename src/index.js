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

function blockEverything(){
    let k = document.createElement('div');
    k.setAttribute("id", "blocker");
    k.style.width = "100vw";
    k.style.height = "100vh";
    k.style.position = "fixed";
    k.style.top = "0";
    k.style.left = "0";
    k.style.zIndex = "5";
    document.body.appendChild(k);
    k.style.transition = "backdrop-filter 0.2s"
    k.style.transition = "background-color 0.2s"
    setTimeout(function(){ k.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; k.style.backdropFilter = "blur(2px)";}, 0);
}

function unBlockEverything(){
    let k = document.getElementById("blocker");
    k.style.transition = "backdrop-filter 0.2s"
    k.style.transition = "background-color 0.2s"
    setTimeout(function(){ k.style.backgroundColor = "rgba(0, 0, 0, 0.0)"; k.style.backdropFilter = "blur(0px)";}, 0);
    setTimeout(function(){k.remove();}, 200);
}

let addToDoButton = document.getElementById("addToDo");
addToDoButton.addEventListener('click', () => {
    blockEverything();
    setTimeout(unBlockEverything, 1000);
});

let addProjectButton = document.getElementById("projectadder");
addProjectButton.addEventListener('click', () =>{
    blockEverything();
    setTimeout(unBlockEverything, 1000);
});