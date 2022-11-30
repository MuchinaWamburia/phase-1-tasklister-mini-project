 const newTaskDescription = document.getElementById("new-task-description");
 // we assign" tasks" an ID to avoid repeatedly typing it but instead just usong the varible
 const theList = document.getElementById("tasks");  
 
 const createNewTask = event => { 
   event.preventDefault(); 
   const newTask = document.createElement('li');
 
   newTask.innerText = newTaskDescription.value;
   createButton(newTask);
   theList.appendChild(newTask);  // puts the child node at the end of the list
 
   event.target.reset();
 };
 
 const createButton = task => {
    const btn = document.createElement('button');
     btn.innerText = "X";
 
     task.appendChild(btn);
     btn.addEventListener('click',  (e) => deleteTask(e));   //enable one to delete appended childNode
 }
 
 const deleteTask = (e) => {
   const selectedTask = e.target.parentElement;
   theList.removeChild(selectedTask);
 }
 
 document.querySelector('#create-task-form').addEventListener("submit"
 , (e) => createNewTask(e))
