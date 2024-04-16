 //waits for document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function(){

//assigning ids to their declared variables
    const taskInputEl = document.getElementById('taskInput');
    const addTaskBtnEl = document.getElementById('addTask-btn');
    const taskListEl = document.getElementById('taskList');
    const dateEl = document.getElementById('date');

//initializing an empty array to store the tasks
    let taskList = []; 
    addTaskBtnEl.addEventListener('click' , function() {
        //anonymous function executed when button is clicked
        let taskInputValue = taskInputEl.value.trim();
        let dateInputValue = dateEl.value.trim();    
        if (taskInputValue !== ' '){
            //creates objects to push into tasklist array
           taskList.push({ task: taskInputValue, date: dateInputValue, status: false });
           displayList();
        }
    })


    function displayList() {
        //clear previous items
        taskListEl.innerHTML = '';

        //looop through task list and create HTML elements
        taskList.forEach(function(task) {
        const taskitem = document.createElement('li');
        taskitem.textContent = `Task: ${task.task}, Date: ${task.date}, Status: ${task.status}`;
        taskListEl.appendChild(taskitem);
        });
        
    }
   
}) ; 







    
