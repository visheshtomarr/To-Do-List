// Create an array to store the tasks.
let tasks = [] ;

// Creating variables to access the input display and the list container.
const inputDisplay = document.querySelector('#input-text') ;
const listContainer = document.querySelector('#list-container') ;

// Function to add the tasks to our to-do list.
function addTask() {
    if (inputDisplay.value === '') {
        alert('You must write a task first!') ;
    }
    else {
        tasks.push({ text: inputDisplay.value, completed: false }) ;
        updateTaskList() ;
    }
    inputDisplay.value = '' ;
}

// Function to update the task list display.
function updateTaskList() {
    // Clear the list
    listContainer.innerHTML = `` ;

    tasks.forEach((task,index) => {
        let {text} = task ;
        const listItem = document.createElement(`li`) ;

        // Apply 'checked' class to the completed tasks.
        if (task.completed) {
            listItem.classList.add('checked') ;
        }

        listItem.innerHTML = `
        ${text}
        <span class="edit-btn" data-index="${index}"><i class="fa-regular fa-pen-to-square"></i></span>
        <span class="delete-btn" data-index="${index}"><i class="fa-regular fa-trash-can"></i></span>
        ` ;
    listContainer.append(listItem);
    }) ;
}

// Event listener for the list container to handle edit and delete.
listContainer.addEventListener('click', function(e) {
    // ".closest()" function checks if the clicked element ('e.target') or any of its ancestors (upto the 'listContainer')
    // match the selector '.edit-btn'. If it finds a match, it returns that element, else, it returns 'null'. 
    if (e.target.closest('.edit-btn')) {
        const index = e.target.closest('.edit-btn').getAttribute('data-index') ;
        if (tasks[index].completed) {
            alert("You can't edit a completed task!") ;
        }
        else {
            editTask(index) ;
        } 
    }
    else if (e.target.closest('.delete-btn')) {
        const index = e.target.closest('.delete-btn').getAttribute('data-index') ;
        deleteTask(index) ;
    }

    else if (e.target.closest('li')) {
        // Converts the "listContainer's" children (which are 'li' elements) into an array and then finds the
        // index of the clicked 'li' which corresponds to the position of task in the 'tasks' array.
        const index = Array.from(listContainer.children).indexOf(e.target.closest('li')) ;
        toggleTaskCompletion(index) ;
    }
}) ;

// Function to edit a task.
function editTask(index) {
    const newTaskText = prompt('Edit your task:', tasks[index].text) ;
    if(newTaskText !== null && newTaskText.trim() !== '') {
        tasks[index].text = newTaskText.trim() ;
        updateTaskList() ;
    }
} 

// Function to delete a task.
function deleteTask(index) {
    // Remove the task at a specified index.
    tasks.splice(index, 1) ;
    alert(`Task ${+index + 1} deleted!`) ;
    updateTaskList() ;
}

// Function to toggle the completion of a task.
function toggleTaskCompletion(index) {
    // Toggle the completed status.
    tasks[index].completed = !tasks[index].completed ;
    alert(`Task ${index + 1} completed!`) ;
    updateTaskList() ;
}