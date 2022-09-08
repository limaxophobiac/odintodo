import todoFactory from './todo';
import './style.css';
import {blockScreen, unBlockScreen} from './screenblock.js';

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
    let newToDoBox = makePopUp();
    let boxHeader = makeBoxHeader("New ToDo...");

    newToDoBox.appendChild(boxHeader);

    document.body.appendChild(newToDoBox);
});

let addProjectButton = document.getElementById("projectadder");
addProjectButton.addEventListener('click', () =>{
    let newProjectBox = makePopUp();
    let boxHeader = makeBoxHeader("New Project...");
    newProjectBox.appendChild(boxHeader);

    document.body.appendChild(newProjectBox);
});

function showToDoDetails(toDo){
    let detailsBox = makePopUp();
    let detailsHeader = makeBoxHeader(toDo.doName);
    let infoBox = document.createElement('div');
    infoBox.style.height= "90%";
    infoBox.style.fontSize = "1.2rem";
    infoBox.style.lineHeight = "1.2rem";
    infoBox.innerHTML = `<p>Project: ${toDo.doProject.projectName}</p>
    <p>Priority: ${toDo.doPriority}</p>
    <p>Due Date: ${toDo.doDate}</p>
    <br>
    <p>Description: ${toDo.doDescrip}</p>`;
    infoBox.style.padding = "8px 12px 5px 12px"

    detailsBox.appendChild(detailsHeader);
    detailsBox.appendChild(infoBox);
    document.body.appendChild(detailsBox);
}

function closePupUp(){
    let popUpBox = document.getElementById("popUpBox");
    popUpBox.remove();
    unBlockScreen();
}

function makePopUp(){
    blockScreen(3);
    let popBox = document.createElement('div');
    popBox.setAttribute("id", "popUpBox");
    popBox.style.minWidth = "600px";
    popBox.style.minHeight = "400px";
    popBox.style.display = "flex";
    popBox.style.flexDirection = "column";
    popBox.style.width = "50%";
    popBox.style.height = "60%";
    popBox.style.zIndex = "4";
    popBox.style.backgroundColor = "lightgray";
    popBox.style.top = "50%";
    popBox.style.left = "50%";
    popBox.style.marginTop = "min(-200px, -30vh)";
    popBox.style.marginLeft = "min(-300px, -25vw)";
    popBox.style.position = "fixed";
    popBox.style.borderRadius = "6px";
    popBox.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.2), 5px -1px 5px rgba(0, 0, 0, 0.2)";
    return popBox;
}

function makeBoxHeader(headTitle){
    let boxHeader = document.createElement('div');

    boxHeader.style.backgroundColor = "gray";
    boxHeader.style.height = "10%";
    boxHeader.style.display = "flex";
    boxHeader.style.justifyContent = "space-between";
    boxHeader.style.padding = "0px 12px 0px 12px";
    boxHeader.style.borderRadius = "6px 6px 0px 0px";
    boxHeader.style.fontWeight = "bold";
    boxHeader.style.lineHeight = "max(6vh, 40px)";
    boxHeader.style.fontSize = "max(4vh, 30px)";

    let headerText = document.createElement('div');
    headerText.textContent = headTitle;
    headerText.marginRight = "auto";

    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.addEventListener('click', () => closePupUp());
 
    boxHeader.appendChild(headerText);
    boxHeader.appendChild(closeButton);
    return boxHeader;
}