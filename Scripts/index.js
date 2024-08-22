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

function updateTaskList() {
    listContainer.innerHTML = `` ;

    tasks.forEach(task => {
        let {text, completed} = task ;
        const listItem = document.createElement('li') ;

        listItem.innerHTML = `
        ${text}
        <span id="edit-btn"><i class="fa-regular fa-pen-to-square"></i></span>
        <span id="delete-btn"><i class="fa-regular fa-trash-can"></i></span>
        ` ;

    listContainer.append(listItem);
    }) ;
}

// Add eventListener to the "tasks".
listContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked') ;
    }
}, false) ;