import {
  todoFactory,
  projectFactory,
  toDoList,
  projectList,
  deleteToDo,
  deleteProject,
  addToDo,
  addProject,
  loadStorage,
  idSeed,
} from './todo';
import { makePopUp, closePupUp } from './popup';

import './style.css';

let activeProject = null;
const defaultProject = projectFactory('NONE', 'default project');
addProject(defaultProject);

const doContainer = document.getElementById('taskcontainer');
const projectContainer = document.getElementById('projectList');
const todaySelect = document.getElementById('todaySelect');
const weekSelect = document.getElementById('weekSelect');

const addToDoButton = document.getElementById('addToDo');
const addProjectButton = document.getElementById('projectadder');

function refreshToDos() {
  const today = new Date();
  const week = new Date();
  week.setDate(today.getDate() + 7);
  toDoList.sort((a, b) => {
    const a2 = new Date(a.doDate);
    const b2 = new Date(b.doDate);
    if (a2 > b2) return 1;
    if (b2 > a2) return -1;
    if (a.doName > b.doName) return 1;
    return -1;
  });
  document.querySelectorAll('.doBox').forEach((elem) => elem.remove());
  function checkDate(toDo) {
    const toDoDate = new Date(toDo.doDate).getDate();
    if (!todaySelect.checked && !weekSelect.checked) displayToDo(toDo);
    else if (todaySelect.checked && toDoDate == today.getDate()) { displayToDo(toDo); } else if (weekSelect.checked && toDoDate <= week.getDate()) { displayToDo(toDo); }
  }
  if (activeProject == null) toDoList.forEach((toDo) => checkDate(toDo));
  else {
    toDoList
      .filter((toDo) => toDo.doProject.id == activeProject)
      .forEach((toDo) => checkDate(toDo));
  }
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  localStorage.setItem('idSeed', JSON.stringify(idSeed));
}

todaySelect.addEventListener('change', () => {
  if (todaySelect.checked) weekSelect.checked = false;
  refreshToDos();
});
weekSelect.addEventListener('change', () => {
  if (weekSelect.checked) todaySelect.checked = false;
  refreshToDos();
});

function refreshProjects() {
  document.querySelectorAll('.projectBox').forEach((elem) => elem.remove());
  for (let i = 1; i < projectList.length; i++) {
    displayProject(projectList[i]);
  }
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('idSeed', JSON.stringify(idSeed));
}

function displayToDo(toDo) {
  const doBox = document.createElement('div');
  doBox.id = `toDo${toDo.doName}`;
  doBox.classList.add('doBox');
  doBox.classList.add(`priority${toDo.doPriority}`);
  const doNameDiv = document.createElement('button');
  doNameDiv.textContent = toDo.doName;
  doNameDiv.classList.add('toDoName');
  doNameDiv.addEventListener('click', () => showToDoDetails(toDo));
  const doDateDiv = document.createElement('div');
  doDateDiv.classList.add('doDate');
  doDateDiv.textContent = new Date(toDo.doDate).toDateString();
  if (toDo.completed) doNameDiv.style.textDecoration = 'line-through';
  else doNameDiv.style.textDecoration = 'none';

  // delete todo
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('toDoDelete');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteToDo(toDo.id);
    refreshToDos();
  });

  // edit todo
  const editButton = document.createElement('button');
  editButton.classList.add('toDoEdit');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    // display stuff
    editToDoDetails(toDo);
  });
  // complete todo
  const completeButton = document.createElement('button');
  completeButton.classList.add('toDoComplete');
  completeButton.textContent = toDo.completed ? 'Undo' : 'Complete';
  completeButton.style.marginRight = toDo.completed ? '35px' : '5px';
  completeButton.addEventListener('click', () => {
    toDo.completed = !toDo.completed;
    if (toDo.completed) {
      doNameDiv.style.textDecoration = 'line-through';
      completeButton.textContent = 'Undo';
    } else {
      doNameDiv.style.textDecoration = 'none';
      completeButton.textContent = 'Complete';
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

addToDoButton.addEventListener('click', () => {
  const newToDoBox = makePopUp('New ToDo...');
  const formBox = newToDoBox.popUpcontent;
  formBox.style.display = 'grid';
  formBox.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  formBox.style.gridTemplateRows = '15px 20px 15px 1fr 40px';
  formBox.style.fontSize = '1.1rem';
  formBox.style.gap = '5px';

  const newTitle = document.createElement('input');
  newTitle.type = 'text';
  const newDescription = document.createElement('textarea');
  newDescription.style.resize = 'none';
  newDescription.style.width = '100%';
  newDescription.style.height = '100%';
  newDescription.style.gridRow = '4/5';
  newDescription.style.gridColumn = '1/5';
  const addToDoButton = document.createElement('button');
  addToDoButton.style.gridRow = '5/6';
  addToDoButton.style.gridColumn = '1/2';
  addToDoButton.style.justifySelf = 'start';
  addToDoButton.innerHTML = 'Add ToDo';
  addToDoButton.style.fontSize = '1.3rem';

  const projectSelect = document.createElement('select');

  for (let i = 0; i < projectList.length; i++) {
    const pOption = document.createElement('option');
    pOption.value = `${i}`;
    pOption.textContent = projectList[i].projectName;
    projectSelect.appendChild(pOption);
  }
  const dateSelect = document.createElement('input');
  dateSelect.type = 'date';
  dateSelect.valueAsDate = new Date();
  const prioritySelect = document.createElement('select');
  const lowP = document.createElement('option');
  lowP.value = '1';
  lowP.textContent = 'Low';
  const medP = document.createElement('option');
  medP.value = '2';
  medP.textContent = 'Medium';
  const highP = document.createElement('option');
  highP.value = '3';
  highP.textContent = 'High';

  prioritySelect.appendChild(lowP);
  prioritySelect.appendChild(medP);
  prioritySelect.appendChild(highP);

  const titleLabel = document.createElement('p');
  titleLabel.textContent = 'Name';
  const projectLabel = document.createElement('p');
  projectLabel.textContent = 'Project';
  const dateLabel = document.createElement('p');
  dateLabel.textContent = 'Date';
  const prioLabel = document.createElement('p');
  prioLabel.textContent = 'Priority';
  const descLabel = document.createElement('p');
  descLabel.textContent = 'Description';

  formBox.appendChild(titleLabel);
  formBox.appendChild(projectLabel);
  formBox.appendChild(dateLabel);
  formBox.appendChild(prioLabel);
  formBox.appendChild(newTitle);
  formBox.appendChild(projectSelect);
  formBox.appendChild(dateSelect);
  formBox.appendChild(prioritySelect);
  formBox.appendChild(descLabel);
  formBox.appendChild(newDescription);
  formBox.appendChild(addToDoButton);

  document.body.appendChild(newToDoBox.popBox);

  addToDoButton.addEventListener('click', () => {
    if (newTitle.value == null || newTitle.value == '') return;
    const m1 = todoFactory(
      newTitle.value,
      projectList[projectSelect.value],
      dateSelect.valueAsDate,
      newDescription.value,
      false,
      prioritySelect.value,
    );
    addToDo(m1);
    refreshToDos();
    closePupUp();
  });
});

function displayProject(project) {
  const projectBox = document.createElement('div');
  projectBox.id = `project${project.projectName}`;
  projectBox.classList.add('projectBox');
  const projectFocus = document.createElement('button');
  projectFocus.textContent = project.projectName;
  projectFocus.classList.add('projectName');

  projectFocus.addEventListener('click', () => {
    if (activeProject == project.id) {
      activeProject = null;
      projectBox.classList.remove('activeProjectBox');
    } else {
      if (activeProject != null) {
        const old = document.getElementsByClassName('activeProjectBox')[0];
        old.classList.remove('activeProjectBox');
      }
      activeProject = project.id;
      projectBox.classList.add('activeProjectBox');
    }
    refreshToDos();
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('projectDelete');

  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    deleteProject(project.id);
    refreshProjects();
  });

  const descriptionButton = document.createElement('button');

  descriptionButton.classList.add('projectDescription');
  descriptionButton.textContent = '?';
  descriptionButton.addEventListener('click', () => {
    const descriptionBox = makePopUp(project.projectName);
    const descriptionContent = descriptionBox.popUpcontent;
    descriptionContent.textContent = project.projectDescription;
    document.body.appendChild(descriptionBox.popBox);
  });

  projectBox.appendChild(projectFocus);
  projectBox.appendChild(deleteButton);
  projectBox.appendChild(descriptionButton);
  projectContainer.appendChild(projectBox);
}

addProjectButton.addEventListener('click', () => {
  const newProjectBox = makePopUp('New Project...');
  const formBox = newProjectBox.popUpcontent;

  formBox.style.fontSize = '1.3rem';
  formBox.style.gap = '10px';
  formBox.style.display = 'flex';
  formBox.style.flexDirection = 'column';

  const titleLabel = document.createElement('p');
  titleLabel.style.fontSize = '1.1rem';
  titleLabel.textContent = 'Project Title: ';
  const newTitle = document.createElement('input');
  newTitle.type = 'text';
  const titleContainer = document.createElement('div');
  titleContainer.style.display = 'flex';
  titleContainer.style.gap = '5px';
  const descLabel = document.createElement('p');
  descLabel.style.fontSize = '1.1rem';
  descLabel.textContent = 'Project Description:';
  const newDescription = document.createElement('textarea');
  newDescription.style.resize = 'none';
  newDescription.style.width = '100%';
  newDescription.style.height = '75%';
  newDescription.style.marginTop = '-5px';
  const addProjectButton = document.createElement('button');

  addProjectButton.style.alignSelf = 'start';
  addProjectButton.innerHTML = 'Add Project';

  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(newTitle);
  formBox.appendChild(titleContainer);
  formBox.appendChild(descLabel);
  formBox.appendChild(newDescription);
  formBox.appendChild(addProjectButton);
  document.body.appendChild(newProjectBox.popBox);

  addProjectButton.addEventListener('click', () => {
    if (newTitle.value == null || newTitle.value == '') return;
    const m1 = projectFactory(newTitle.value, newDescription.value);
    addProject(m1);
    refreshProjects();
    closePupUp();
  });
});

function editToDoDetails(toDo) {
  const editToDoBox = makePopUp(`Edit: ${toDo.doName}`);
  const formBox = editToDoBox.popUpcontent;
  formBox.style.display = 'grid';
  formBox.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  formBox.style.gridTemplateRows = '15px 20px 15px 1fr 40px';
  formBox.style.fontSize = '1.1rem';
  formBox.style.gap = '5px';

  const newTitle = document.createElement('input');
  newTitle.type = 'text';
  newTitle.value = toDo.doName;
  const newDescription = document.createElement('textarea');
  newDescription.value = toDo.doDescrip;
  newDescription.style.resize = 'none';
  newDescription.style.width = '100%';
  newDescription.style.height = '100%';
  newDescription.style.gridRow = '4/5';
  newDescription.style.gridColumn = '1/5';
  const editToDoButton = document.createElement('button');
  editToDoButton.style.gridRow = '5/6';
  editToDoButton.style.gridColumn = '1/2';
  editToDoButton.style.justifySelf = 'start';
  editToDoButton.innerHTML = 'Save Changes';
  editToDoButton.style.fontSize = '1.3rem';

  const projectSelect = document.createElement('select');

  for (let i = 0; i < projectList.length; i++) {
    const pOption = document.createElement('option');
    pOption.value = `${i}`;
    pOption.textContent = projectList[i].projectName;
    projectSelect.appendChild(pOption);
  }
  const dateSelect = document.createElement('input');
  dateSelect.type = 'date';
  dateSelect.valueAsDate = new Date(toDo.doDate);
  const prioritySelect = document.createElement('select');
  const oldP = document.createElement('option');
  oldP.value = toDo.doPriority;
  oldP.textContent = '     ';
  const lowP = document.createElement('option');
  lowP.value = '1';
  lowP.textContent = 'Low';
  const medP = document.createElement('option');
  medP.value = '2';
  medP.textContent = 'Medium';
  const highP = document.createElement('option');
  highP.value = '3';
  highP.textContent = 'High';

  prioritySelect.appendChild(oldP);
  prioritySelect.appendChild(lowP);
  prioritySelect.appendChild(medP);
  prioritySelect.appendChild(highP);

  const titleLabel = document.createElement('p');
  titleLabel.textContent = 'Name';
  const projectLabel = document.createElement('p');
  projectLabel.textContent = 'Project';
  const dateLabel = document.createElement('p');
  dateLabel.textContent = 'Date';
  const prioLabel = document.createElement('p');
  prioLabel.textContent = 'Priority';
  const descLabel = document.createElement('p');
  descLabel.textContent = 'Description';

  formBox.appendChild(titleLabel);
  formBox.appendChild(projectLabel);
  formBox.appendChild(dateLabel);
  formBox.appendChild(prioLabel);
  formBox.appendChild(newTitle);
  formBox.appendChild(projectSelect);
  formBox.appendChild(dateSelect);
  formBox.appendChild(prioritySelect);
  formBox.appendChild(descLabel);
  formBox.appendChild(newDescription);
  formBox.appendChild(editToDoButton);

  document.body.appendChild(editToDoBox.popBox);

  editToDoButton.addEventListener('click', () => {
    if (newTitle.value == null || newTitle.value == '') return;
    toDo.doName = newTitle.value;
    toDo.doProject = projectList[projectSelect.value];
    toDo.doDate = dateSelect.valueAsDate;
    toDo.doDescrip = newDescription.value;
    toDo.doPriority = prioritySelect.value;
    refreshToDos();
    closePupUp();
  });
}

function showToDoDetails(toDo) {
  const detailsBox = makePopUp(toDo.doName);
  const infoBox = detailsBox.popUpcontent;
  infoBox.style.fontSize = '1.2rem';
  infoBox.style.lineHeight = '1.2rem';
  const projectName = toDo.doProject.projectName == 'NONE'
    ? ''
    : `Project: ${toDo.doProject.projectName}`;
  const showDate = new Date(toDo.doDate);
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

function populate() {
  const pro1 = projectFactory('Programming', 'trying to learn to program');
  const pro2 = projectFactory(
    'Web Design',
    'cant really call this programming',
  );
  const pro3 = projectFactory('Algorithms', 'ordo notation and stuff');
  addProject(pro1);
  addProject(pro2);
  addProject(pro3);
  refreshProjects();
  const p = new Date();
  const k = new Date();
  k.setDate(p.getDate() + 4);

  const m = todoFactory('testing1', pro1, p, 'do stuff', false, 3);
  const s = todoFactory(
    'testing2',
    pro2,
    k,
    'do stuffasfddsdsfsd  sdfgsdfg sdgf gs dgf fgdsfgdsgs  g gg dfs gdfsg fdsg fsd gfd g gfdfg sdg dfs fgds gfdsg fsd gfdsg fdsg fds gfdsg sg fdsg fdsg f gdfs gfds gdfs gdsf gfdsgdfsfadsfa',
    false,
    1,
  );
  const o = todoFactory('testing3', pro3, p, 'do stuff', false, 2);

  addToDo(m);
  addToDo(s);
  addToDo(o);
  refreshToDos();
}
