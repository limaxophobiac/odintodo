import todoFactory from './todo';
import makePopUp from './popup';
import {closePupUp} from './popup';
import {blockScreen, unBlockScreen} from './screenblock.js';
import './style.css';

const doContainer = document.getElementById("taskcontainer");
let toDoList = [];

function addToDo(toDo){
    toDoList.push(toDo);   
    refreshToDos();
}

function deleteToDo(doId){

}

function refreshToDos(){
    document.querySelectorAll(".doBox").forEach(elem => elem.remove());
    //sort toDos
    toDoList.forEach(toDo => displayToDo(toDo));
}

function projectFactory (projectName, projectDescription){

    let id = 2434;

    return {projectName, projectDescription, id};
}

function displayToDo(toDo){
    const doBox = document.createElement('div');
    doBox.id = "toDo" + toDo.doName;
    doBox.classList.add("doBox");
    doBox.classList.add("priority" + toDo.doPriority);
    doBox.innerHTML = `<div class="toDoName">${toDo.doName}</div>
    <div class="toDoDate">Date: ${toDo.doDate}</div>`;
    
    //delete todo
    let deleteButton = document.createElement('button');
    deleteButton.classList.add("toDoDelete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        deleteToDo(toDo.id);
        refreshToDos();
    });
    //details for todo
    let detailsButton = document.createElement(`button`);
    detailsButton.classList.add("toDoDetail");
    detailsButton.textContent = "Details";
    detailsButton.addEventListener('click', () => showToDoDetails(toDo));
    //edit todo
    let editButton = document.createElement(`button`);
    editButton.classList.add("toDoEdit");
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
        //display stuff
        console.log(`pressed edit button ${toDo.id}`);
    });
    //complete todo
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






let pro = projectFactory("Programming", "trying to learn to program");

let m = todoFactory("testing1", pro, "5/5/2055", "do stuff", false, 3);
m.id = 543543;
let s = todoFactory("testing2", pro, "6/5/2055", "do stuffasfddsdsfsd  sdfgsdfg sdgf gs dgf fgdsfgdsgs  g gg dfs gdfsg fdsg fsd gfd g gfdfg sdg dfs fgds gfdsg fsd gfdsg fdsg fds gfdsg sg fdsg fdsg f gdfs gfds gdfs gdsf gfdsgdfsfadsfa", false, 1);

let o = todoFactory("testing3", pro, "6/5/2055", "do stuff", false, 2);

addToDo(m);
addToDo(s);
addToDo(o);


let addToDoButton = document.getElementById("addToDo");
addToDoButton.addEventListener('click', () => {
    let newToDoBox = makePopUp("New ToDo...");
    let formBox = newToDoBox.popUpcontent;
    formBox.style.fontSize = "1.3rem";
    formBox.style.gap = "10px";

    let newTitle = document.createElement("input");
    newTitle.type = "text";
    let newDescription = document.createElement("textarea");
    newDescription.style.resize = "none";
    newDescription.style.width = "100%";
    newDescription.style.height = "70%";
    let addToDoButton = document.createElement("button");
    addToDoButton.innerHTML = "Add ToDo";

    let projectSelect = document.createElement("input");
    projectSelect.type = "select";
    let dateSelect = document.createElement("input");
    dateSelect.type = "date";
    
    formBox.appendChild(newTitle);
    formBox.appendChild(projectSelect);
    formBox.appendChild(dateSelect);
    formBox.appendChild(newDescription);
    formBox.appendChild(addToDoButton);

    document.body.appendChild(newToDoBox.popBox);
    
    addToDoButton.addEventListener('click', ()=> {
        let m1 = todoFactory(newTitle.value, pro, "5/5/5/6", newDescription.value, false, 2);
        addToDo(m1);
        closePupUp();
    });
});

let addProjectButton = document.getElementById("projectadder");
addProjectButton.addEventListener('click', () =>{
    let newProjectBox = makePopUp("New Project...");

    document.body.appendChild(newProjectBox.popBox);
});

function showToDoDetails(toDo){
    let detailsBox = makePopUp(toDo.doName);
    let infoBox = detailsBox.popUpcontent;
    infoBox.style.fontSize = "1.2rem";
    infoBox.style.lineHeight = "1.2rem";
    infoBox.innerHTML = `<p>Project: ${toDo.doProject.projectName}</p>
    <p>Priority: ${toDo.doPriority}</p>
    <p>Due Date: ${toDo.doDate}</p>
    <br>
    <p>Description: ${toDo.doDescrip}</p>`;

    document.body.appendChild(detailsBox.popBox);
}