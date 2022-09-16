import {todoFactory, projectFactory, toDoList, projectList, deleteToDo, deleteProject, addToDo, addProject, loadStorage} from './todo';
import {makePopUp, closePupUp} from './popup';

import './style.css';

let activeProject = null;
let defaultProject = projectFactory("NONE", "default project");
addProject(defaultProject);

const doContainer = document.getElementById("taskcontainer");
const projectContainer = document.getElementById("projectList");
const todaySelect = document.getElementById("todaySelect");
const weekSelect = document.getElementById("weekSelect");

function refreshToDos(){
    const today = new Date();
    let week = new Date();
    week.setDate(today.getDate() + 7);
    toDoList.sort((a, b) => {
        let a2 = new Date(a.doDate);
        let b2 = new Date(b.doDate);
        if (a2 > b2) return 1;
        if (b2 > a2) return -1;
        if (a.doName > b.doName) return 1;
        return -1;
    });
    document.querySelectorAll(".doBox").forEach(elem => elem.remove());
    function checkDate(toDo){
        let toDoDate = new Date(toDo.doDate).getDate();
        if (!todaySelect.checked && !weekSelect.checked) displayToDo(toDo);
        else if (todaySelect.checked && toDoDate == today.getDate()) displayToDo(toDo);
        else if (weekSelect.checked && toDoDate <= week.getDate()) displayToDo(toDo);

    }
    if (activeProject == null) toDoList.forEach(toDo => checkDate(toDo)); 
    else toDoList.filter(toDo => toDo.doProject.id == activeProject).forEach(toDo => checkDate(toDo));
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

todaySelect.addEventListener('change', () => {
    if (todaySelect.checked) weekSelect.checked = false;
    refreshToDos();
});
weekSelect.addEventListener('change', () => {
    if (weekSelect.checked) todaySelect.checked = false;
    refreshToDos();
});


function refreshProjects(){
    document.querySelectorAll(".projectBox").forEach(elem => elem.remove());
    for (let i = 1; i < projectList.length; i++){
        displayProject(projectList[i]);
    }
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

function displayToDo(toDo){
    const doBox = document.createElement('div');
    doBox.id = "toDo" + toDo.doName;
    doBox.classList.add("doBox");
    doBox.classList.add("priority" + toDo.doPriority);
    let doNameDiv = document.createElement('button');
    doNameDiv.textContent = toDo.doName;
    doNameDiv.classList.add("toDoName");
    doNameDiv.addEventListener('click', () => showToDoDetails(toDo));
    let doDateDiv = document.createElement('div');
    doDateDiv.textContent = new Date(toDo.doDate).toDateString();
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

    //edit todo
    let editButton = document.createElement(`button`);
    editButton.classList.add("toDoEdit");
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
        //display stuff
        editToDoDetails(toDo);
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
        refreshToDos();
    });

    doBox.appendChild(doNameDiv);
    doBox.appendChild(doDateDiv);
    doBox.appendChild(completeButton);

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
        if (newTitle.value == null || newTitle.value == "") return;
        let m1 = todoFactory(newTitle.value, projectList[projectSelect.value], dateSelect.valueAsDate, newDescription.value, false, prioritySelect.value);
        addToDo(m1);
        refreshToDos();
        closePupUp();
    });
});

function displayProject(project){
    const projectBox = document.createElement('div');
    projectBox.id = "project" + project.projectName;
    projectBox.classList.add("projectBox");
    let projectFocus = document.createElement('button');
    projectFocus.textContent = project.projectName;
    projectFocus.classList.add("projectName");

    projectFocus.addEventListener('click', ()=>{
        if (activeProject == project.id){
            activeProject = null;
            projectBox.classList.remove("activeProjectBox");
        }
        else{
            if (activeProject != null){
                let old = document.getElementsByClassName("activeProjectBox")[0];
                old.classList.remove("activeProjectBox");
            }
            activeProject = project.id;
            projectBox.classList.add("activeProjectBox");
        }
        refreshToDos();
    });

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

    projectBox.appendChild(projectFocus);
    projectBox.appendChild(deleteButton);
    projectBox.appendChild(descriptionButton);
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
        if (newTitle.value == null || newTitle.value == "") return;
        let m1 = projectFactory(newTitle.value, newDescription.value);
        addProject(m1);
        refreshProjects();
        closePupUp();
    });
});

function editToDoDetails(toDo){
    let editToDoBox = makePopUp("Edit: " + toDo.doName);
    let formBox = editToDoBox.popUpcontent;
    formBox.style.fontSize = "1.3rem";
    formBox.style.gap = "10px";

    let newTitle = document.createElement("input");
    newTitle.type = "text";
    newTitle.value = toDo.doName;
    let newDescription = document.createElement("textarea");
    newDescription.value = toDo.doDescrip;
    newDescription.style.resize = "none";
    newDescription.style.width = "100%";
    newDescription.style.height = "70%";
    let editToDoButton = document.createElement("button");
    editToDoButton.innerHTML = "Save ToDo";

    let projectSelect = document.createElement("select");

    for (let i = 0; i < projectList.length; i++){
        let pOption = document.createElement("option");
        pOption.value = ""+i;
        pOption.textContent = projectList[i].projectName;
        projectSelect.appendChild(pOption);
    }
    let dateSelect = document.createElement("input");
    dateSelect.type = "date";
    dateSelect.valueAsDate = new Date(toDo.doDate);
    let prioritySelect = document.createElement("select");
    let oldP = document.createElement("option");
    oldP.value = toDo.doPriority;
    oldP.textContent = "     ";
    let lowP = document.createElement("option");
    lowP.value = "1";
    lowP.textContent = "Low";
    let medP = document.createElement("option");
    medP.value = "2";
    medP.textContent = "Medium";
    let highP = document.createElement("option");
    highP.value = "3";
    highP.textContent = "High";
    
    prioritySelect.appendChild(oldP);
    prioritySelect.appendChild(lowP);
    prioritySelect.appendChild(medP);
    prioritySelect.appendChild(highP);

    formBox.appendChild(newTitle);
    formBox.appendChild(projectSelect);
    formBox.appendChild(dateSelect);
    formBox.appendChild(prioritySelect);
    formBox.appendChild(newDescription);
    formBox.appendChild(editToDoButton);

    document.body.appendChild(editToDoBox.popBox);

    editToDoButton.addEventListener('click', ()=> {
        if (newTitle.value == null || newTitle.value == "") return;
        toDo.doName = newTitle.value;
        toDo.doProject = projectList[projectSelect.value];
        toDo.doDate = dateSelect.valueAsDate;
        toDo.doDescrip = newDescription.value;
        toDo.doPriority = prioritySelect.value;
        refreshToDos();
        closePupUp();
    });
}

function showToDoDetails(toDo){
    let detailsBox = makePopUp(toDo.doName);
    let infoBox = detailsBox.popUpcontent;
    infoBox.style.fontSize = "1.2rem";
    infoBox.style.lineHeight = "1.2rem";
    let projectName = toDo.doProject.projectName == 'NONE' ? "" : "Project: " + toDo.doProject.projectName;
    let showDate =new Date(toDo.doDate);
    infoBox.innerHTML = `<p>${projectName}</p>
    <p>Priority: ${toDo.doPriority}</p>
    <p>Due Date: ${showDate.toDateString()}</p>
    <br>
    <p>Description: ${toDo.doDescrip}</p>`;

    document.body.appendChild(detailsBox.popBox);
}



loadStorage();
refreshProjects();
refreshToDos();

if (projectList.length == 1 && toDoList.length == 0) populate();

function populate(){
    let pro1 = projectFactory("Programming", "trying to learn to program");
    let pro2 = projectFactory("Web Design", "cant really call this programming");
    let pro3 = projectFactory("Algorithms", "ordo notation and stuff");
    addProject(pro1);
    addProject(pro2);
    addProject(pro3);
    refreshProjects();
    let p = new Date();
    let k = new Date();
    k.setDate(p.getDate() +4)

    let m = todoFactory("testing1", pro1, p, "do stuff", false, 3);
    let s = todoFactory("testing2", pro2, k, "do stuffasfddsdsfsd  sdfgsdfg sdgf gs dgf fgdsfgdsgs  g gg dfs gdfsg fdsg fsd gfd g gfdfg sdg dfs fgds gfdsg fsd gfdsg fdsg fds gfdsg sg fdsg fdsg f gdfs gfds gdfs gdsf gfdsgdfsfadsfa", false, 1);
    let o = todoFactory("testing3", pro3, p, "do stuff", false, 2);

    addToDo(m);
    addToDo(s);
    addToDo(o);
    refreshToDos();
}

