// Creating variables to access the input display and the list container.
const inputDisplay = document.querySelector('#input-text') ;
const listContainer = document.querySelector('#list-container') ;

// Function to add the tasks to our to-do list.
function addTask() {
    if (inputDisplay.value === '') {
        alert('You must write your task first!') ;
    }
    else {
        // Create an "li" element and store that input value inside the "li" tag
        let li = document.createElement('li') ;
        li.innerHTML = inputDisplay.value ;
        listContainer.appendChild(li) ;

        // Create span for "edit" button.
        let spanForEditButton = document.createElement('span') ;
        spanForEditButton.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>` ;
        li.appendChild(spanForEditButton) ;
        
        // Create span for "delete" button.
        let spanForDeleteButton = document.createElement('span') ;
        spanForDeleteButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>` ;
        li.appendChild(spanForDeleteButton) ;
    }
    inputDisplay.value = '' ;
}   