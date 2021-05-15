/*
    Tasks : to advanced in javascript
    (1) - use sweet alert to check array is empty 
    (2) - check if task is exist
    (3) - create btn delete all tasks - [done] ;
    (4) - create btn finish all tasks
    (5) - Add all tasks to the local storage
*/
/*
    querySelector => get the tag by his selector(className , id , tagName)
*/
var myInput = document.querySelector(".add-task input"),
    AddTask = document.querySelector(".add-task .plus"),
    taskContainer = document.querySelector(".tasks-content"),
    tasksCount = document.querySelector(".tasks-count span"),
    tasksComplete = document.querySelector(".tasks-completed"),
    clearAllBtn = document.querySelector(".tasks-clearAll"),
    finishedAllBtn = document.querySelector(".tasks-finishedAll");

window.onload = function() {
    myInput.focus();
}

AddTask.onclick = function() {
    if(myInput.value === '') {
        var noTasksMsg = document.querySelector(".no-tasks-message");
        noTasksMsg.innerHTML = "It doesn't contain Task";
    }
    else
    {
        var noTasksMsg = document.querySelector(".no-tasks-message");

        if(document.body.contains(document.querySelector(".no-tasks-message"))){
            noTasksMsg.remove();
        }

        var mainSpan = document.createElement("span"), // create main span
            deleteElement = document.createElement("span"),  // create delete button
            textSpan = document.createTextNode(myInput.value),  // create span text
            delText = document.createTextNode("Delete");  // create delete button text
        
        mainSpan.appendChild(textSpan); // add text to span
        mainSpan.className = "task-box"; // add className to mainSpan
        deleteElement.appendChild(delText); // add text to button
        deleteElement.className = "delete";  // add className to button
        mainSpan.appendChild(deleteElement); // add delete button to mainSpan
        taskContainer.appendChild(mainSpan); // add task to container
        myInput.value = '';
        myInput.focus();

        calcTasks();
    }
};

// this function to delete task
document.addEventListener('click' , function(e) {
    if(e.target.className == 'delete'){  // e.target => the element that created the event
        e.target.parentNode.remove();  // return the parent element which launch event (delete)

        if(taskContainer.childElementCount == 0) {
            createNoTasks();
        }
    }

    if(e.target.classList.contains('task-box')){  // if classList to element contain task-box 
        e.target.classList.toggle("finished");  // here i mean the element not has class finished add class finish ( and the opposite is right )
    }

    calcTasks();
});

// this function to create no tasks message
function createNoTasks(){
    var msgSpan = document.createElement("span");
    var msgText = document.createTextNode("No tasks to display it");
    msgSpan.appendChild(msgText);
    msgSpan.className = 'no-tasks-message';
    taskContainer.appendChild(msgSpan);
};

// this function to calculate tasks
function calcTasks() {
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;  // calculate all tasks
    tasksComplete.innerHTML = document.querySelectorAll(".tasks-content .finished").length;  // calculate completed tasks
};

// this function to remove all tasks
function clearAllTasks(){
    taskContainer.innerHTML = '';
    if(taskContainer.childElementCount == 0) {
        createNoTasks();
    }
};

// this function to finished all tasks
function finishedAllTasks(){

}

