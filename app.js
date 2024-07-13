// Selecting elements
const inputField = document.querySelector('.inputArea input');
const addNewBtn = document.querySelector('.inputArea button');
const todoList = document.getElementById('todoList');

const inputHandler = (e)=>{
    const taskName = inputField.value;
    if(taskName){
    const li = document.createElement('li');
  
    li.innerHTML = `${taskName} <button id= 'delete'>X</button>`;
    li.style.listStyleType= 'none';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.backgroundColor = 'gray';
    li.style.marginBottom = '10px';
    li.style.color = 'white'; 
    li.style.padding = '5px'; 
    li.style.borderRadius = '5px'; 
    li.classList.add('liStyles');
     todoList.append(li);
    }
    inputField.value = '';
}

const enterHandler = (e)=>{
   if(e.key == 'Enter'){
       inputHandler()
}
}
const deleteHandler = (e)=>{
    const targetEl = e.target;
   if(targetEl.id === 'delete'){
    targetEl.parentElement.remove()
   }
}

addNewBtn.addEventListener('click', inputHandler);
todoList.addEventListener('click', deleteHandler);
inputField.addEventListener('keypress', enterHandler);