const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
renderToDoList();


function addToDo() {
  const inputElement = document.querySelector('.js-task-input');
  const name = inputElement.value.trim();
  const inputDateElement = document.querySelector('.js-due-date');
  const dueDate = inputDateElement.value;
  if (name === '') return;
  toDoList.push({
    name: name,
    dueDate: dueDate  
  });
  
  inputElement.value = '';

  renderToDoList(); 
  saveLocal();
}



function renderToDoList() {
  let toDoHtml = '';
  for(let i = 0; i < toDoList.length; i++) {
    const iToDoObject = toDoList[i];
 //   const name = iToDoObject.name;
   // const DueDate = iToDoObject.dueDate;
    const { name, dueDate} = iToDoObject; //deconstructing


    toDoHtml += `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="
    toDoList.splice(${i},1);
    saveLocal();
    renderToDoList();

    ">Delete</button> 
    `; 
    
  
  }
  document.querySelector('.js-todo-display')
  .innerHTML = toDoHtml;

}
function handleKeyDown(event) {
  if (event.key === 'Enter') addToDo();
}

function saveLocal() {
  localStorage.setItem('toDoList',JSON.stringify(toDoList));
}

/*
function saveLocal() {
  for (let i = 0; i < toDoList.length; i++) {
    localStorage.setItem(i,JSON.stringify(toDoList[i]));
    localStorage.setItem('toDoListLength',toDoList.length);

  }
}
function getLocal() {
  const listLength = Number(localStorage.getItem('toDoListLength'));
  for (let i = 0; i < listLength; i++) {
    toDoList.push(JSON.parse(localStorage.getItem(i)));
  }
  renderToDoList();
}
*/