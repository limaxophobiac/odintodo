export let idSeed = 0;

export let toDoList = [];
export let projectList = [];

export function todoFactory(doName, doProject = null, doDate, doDescrip, completed = false, doPriority = 0){
    
    let id = idSeed++;
    return {doName, doProject, doDate, doPriority, doDescrip, id, completed};
};

export function projectFactory(projectName, projectDescription){
    let id = idSeed++;
    return {projectName, projectDescription, id};
}

export function deleteToDo(doId){
    let index;
    for (index = 0; index < toDoList.length; index++){
        if (toDoList[index].id == doId){
            toDoList.splice(index, 1);
            break;
        }
    }
}

export function deleteProject(projectId){
    let index;
    for (index = 0; index < projectList.length; index++){
        if (projectList[index].id == projectId){
            projectList.splice(index, 1);
            break;
        }
    }
}

export function addToDo(toDo){
    toDoList.push(toDo);   

}

export function addProject(project){
    projectList.push(project);
}

export function loadStorage(){
    let projectStore = JSON.parse(localStorage.getItem('projectList'));
    let todoStore = JSON.parse(localStorage.getItem('toDoList'));
    let idStorage = JSON.parse(localStorage.getItem('idSeed'));
    if (projectStore != null) projectList = projectStore;
    if (todoStore != null) toDoList = todoStore;
    if (idStorage != null) idSeed = idStorage;
}