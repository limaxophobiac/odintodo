import {todoFactory, projectFactory, toDoList, projectList, deleteToDo, deleteProject, addToDo, addProject} from './todo';
import {makePopUp, closePupUp} from './popup';

import './style.css';

const doContainer = document.getElementById("taskcontainer");
const projectContainer = document.getElementById("projectList");

function refreshToDos(){
    document.querySelectorAll(".doBox").forEach(elem => elem.remove());
    toDoList.forEach(toDo => displayToDo(toDo));
}

function refreshProjects(){
    document.querySelectorAll(".projectBox").forEach(elem => elem.remove());
    projectList.forEach(project => displayProject(project));
}

function displayToDo(toDo){
    const doBox = document.createElement('div');
    doBox.id = "toDo" + toDo.doName;
    doBox.classList.add("doBox");
    doBox.classList.add("priority" + toDo.doPriority);
    let doNameDiv = document.createElement('div');
    doNameDiv.textContent = toDo.doName;
    doNameDiv.classList.add("toDoName");
    let doDateDiv = document.createElement('div');
    doDateDiv.textContent = toDo.doDate;
    if (toDo.completed) doNameDiv.style.textDecoration = "line-through";
    else doNameDiv.style.textDecoration = "none";
    
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
    completeButton.textContent = toDo.completed ? "Undo" : "Complete";
    completeButton.addEventListener('click', () => {
        toDo.completed = !toDo.completed;
        if (toDo.completed){
            doNameDiv.style.textDecoration = "line-through";
            completeButton.textContent = "Undo";
        }
        else{
            doNameDiv.style.textDecoration = "none";
            completeButton.textContent = "Complete";
        }
    });

    doBox.appendChild(doNameDiv);
    doBox.appendChild(doDateDiv);
    doBox.appendChild(completeButton);
    doBox.appendChild(detailsButton);
    doBox.appendChild(editButton);
    doBox.appendChild(deleteButton);
    doContainer.appendChild(doBox);
}

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

    let projectSelect = document.createElement("select");

    for (let i = 0; i < projectList.length; i++){
        let pOption = document.createElement("option");
        pOption.value = ""+i;
        pOption.textContent = projectList[i].projectName;
        projectSelect.appendChild(pOption);
    }
    let dateSelect = document.createElement("input");
    dateSelect.type = "date";
    dateSelect.valueAsDate = new Date();
    let prioritySelect = document.createElement("select");
    let lowP = document.createElement("option");
    lowP.value = "1";
    lowP.textContent = "Low";
    let medP = document.createElement("option");
    medP.value = "2";
    medP.textContent = "Medium";
    let highP = document.createElement("option");
    highP.value = "3";
    highP.textContent = "High";
    
    prioritySelect.appendChild(lowP);
    prioritySelect.appendChild(medP);
    prioritySelect.appendChild(highP);

    formBox.appendChild(newTitle);
    formBox.appendChild(projectSelect);
    formBox.appendChild(dateSelect);
    formBox.appendChild(prioritySelect);
    formBox.appendChild(newDescription);
    formBox.appendChild(addToDoButton);

    document.body.appendChild(newToDoBox.popBox);

    addToDoButton.addEventListener('click', ()=> {
        let m1 = todoFactory(newTitle.value, projectList[projectSelect.value], dateSelect.value, newDescription.value, false, prioritySelect.value);
        addToDo(m1);
        refreshToDos();
        closePupUp();
    });
});

function displayProject(project){
    const projectBox = document.createElement('div');
    projectBox.id = "project" + project.projectName;
    projectBox.classList.add("projectBox");
    let projectNameDiv = document.createElement('div');
    projectNameDiv.textContent = project.projectName;
    projectNameDiv.classList.add("projectName");

    let deleteButton = document.createElement('button');
    deleteButton.classList.add("projectDelete");
    
    deleteButton.textContent = "X";
    deleteButton.addEventListener('click', () => {
        deleteProject(project.id);
        refreshProjects();
    });
    
    let descriptionButton = document.createElement(`button`);
    
    descriptionButton.classList.add("projectDescription");
    descriptionButton.textContent = "?";
    descriptionButton.addEventListener('click', () => console.log(project.projectDescription));

    projectBox.appendChild(projectNameDiv);
    projectBox.appendChild(descriptionButton);
    projectBox.appendChild(deleteButton);
    projectContainer.appendChild(projectBox);
}


let addProjectButton = document.getElementById("projectadder");
addProjectButton.addEventListener('click', () =>{
    let newProjectBox = makePopUp("New Project...");
    let formBox = newProjectBox.popUpcontent;

    formBox.style.fontSize = "1.3rem";
    formBox.style.gap = "10px";

    let newTitle = document.createElement("input");
    newTitle.type = "text";
    let newDescription = document.createElement("textarea");
    newDescription.style.resize = "none";
    newDescription.style.width = "100%";
    newDescription.style.height = "70%";
    let addProjectButton = document.createElement("button");
    addProjectButton.innerHTML = "Add Project";

    formBox.appendChild(newTitle);
    formBox.appendChild(newDescription);
    formBox.appendChild(addProjectButton);
    document.body.appendChild(newProjectBox.popBox);
    

    addProjectButton.addEventListener('click', ()=> {
        let m1 = projectFactory(newTitle.value, newDescription.value);
        addProject(m1);
        refreshProjects();
        closePupUp();
    });
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



populate();

function populate(){
    let pro1 = projectFactory("Programming", "trying to learn to program");
    let pro2 = projectFactory("Web Design", "cant really call this programming");
    let pro3 = projectFactory("Algorithms", "ordo notation and stuff");
    addProject(pro1);
    addProject(pro2);
    addProject(pro3);
    refreshProjects();

    let m = todoFactory("testing1", pro1, "8/9/2434", "do stuff", false, 3);

    let s = todoFactory("testing2", pro2, "8/9/2434", "do stuffasfddsdsfsd  sdfgsdfg sdgf gs dgf fgdsfgdsgs  g gg dfs gdfsg fdsg fsd gfd g gfdfg sdg dfs fgds gfdsg fsd gfdsg fdsg fds gfdsg sg fdsg fdsg f gdfs gfds gdfs gdsf gfdsgdfsfadsfa", false, 1);

    let o = todoFactory("testing3", pro3, "8/9/2434", "do stuff", false, 2);

    addToDo(m);
    addToDo(s);
    addToDo(o);
    refreshToDos();
}