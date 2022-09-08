import todoFactory from './todo';
import makePopUp from './popup';
import {closePupUp} from './popup';
import {blockScreen, unBlockScreen} from './screenblock.js';
import './style.css';

const doContainer = document.getElementById("taskcontainer");
let toDoList = [];


let k = todoFactory("Joel");

console.log(k.doPriority);
k.logname();
k.setPriority(10);
console.log(k.doPriority);

function addToDo(){

}

function deleteToDo(doId){

}

function refreshToDos(){
    
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

displayToDo(m);
displayToDo(s);
displayToDo(o);

let addToDoButton = document.getElementById("addToDo");
addToDoButton.addEventListener('click', () => {
    let newToDoBox = makePopUp("New ToDo...");
    let formBox = newToDoBox.popUpcontent;
    formBox.innerHTML =
    `<label for="newTitle">Title:<input type="text" name="Title" id="newTitle" title="*Book Title"></label><br>
    <label for="projectSelect">Project <select name="projectSelect" id="projectSelect" title="*Project">
          <option value = "k">sdaf</option>
          <option value = "r">sdfsdfds</option>
    </select></label><br>
    <label for="newDescroption">Description</label><br> <textarea style="resize:none; width: 80%; height: 60%" name="Description" id="newDescription"></textarea><br>
    <button id="createToDo">Add ToDo</button>`;

    document.body.appendChild(newToDoBox.popBox);
    let k1  =  document.getElementById("createToDo");
    let newTitle = document.getElementById("newTitle");
    let newDescription = document.getElementById("newDescription");
    k1.addEventListener('click', ()=> {
        let m1 = todoFactory(newTitle.value, pro, "5/5/5/6", newDescription.value, false, 2);
        toDoList.push(m1);
        displayToDo(m1);
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