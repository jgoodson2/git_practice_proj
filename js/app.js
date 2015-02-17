//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function (taskString) {
    //create ListItem
    var listItem = document.createElement("li");

    //input (checkbox)
    var checkBox = document.createElement("input"); //checkbox
    //label
    var label = document.createElement("label");
    //input (text)
    var editInput = document.createElement("input");
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");

    //Each element needs modifying
    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}
//Add a new task
var addTask = function () {
    console.log("Add task...");
    //When the button is pressed
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement(taskInput.value);
    //Append ListItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}

//Edit an existing task
var editTask = function () {
    console.log("Edit task...");
    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type = text]");
    var label = listItem.querySelector("label");


    var containsClass = listItem.classList.contains("editMode");

    //if the class of the parent is .editMode
    if (containsClass) {
        //Switch from .editMode
        //label text become the input's value
        label.innerText = editInput.value;
    } else {
        //else
        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
    }
    //Toggle .editMode on the parent
    listItem.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask = function () {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    //Remove the parent list item from the ul
    ul.removeChild(listItem);

}

//Mark a task as complete
var taskCompleted = function () {
    console.log("Task complete...");
    //When the checkbox is checked
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete)
}

//Mark a task as incomplete
var taskIncomplete = function () {
    console.log("Task incomplete...");
    //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    //bind editTask to editButton
    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to the checkbox
    checkBox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

//cycle over the IncompleteTasksHolder of list items
//for each list item
//bind events to list item's children(taskCompleted)

//cycle over the CompleteTasksHolder of list items
//for each list item
//bind events to list item's children(taskIncomplete)
