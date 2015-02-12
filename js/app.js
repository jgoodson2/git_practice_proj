//Problem: user interaction doesnt provide desired results
//Solution: Add interactivity so the user can amanage daily tasks

var taskInput=document.getElementById("new-task"); //new task
var addButton=document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasks=document.getElementById("completed-tasks"); //completed-tasks

//add a task
var addTask = function(){
    console.log("Add task...");
  //when the button is pressed, we want to create a task
  //create a new list item with the text from the new task
  //input (checkbox)
  //label
  //input (text) 
  //button.edit
  //button.delete
  //each elements, needs modified and appended
}
  
//edit a task
var editTask = function(){
    console.log("Edit task...");
  //when the edit button is pressed
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text becomes input's value
    //else
      //switch to .editMode
      //input value becomes label's text
      
    //toggle .editMode on the parent
}

var deleteTask = function() {
    console.log("Delete task...");
//delete existing task
  //when the delete button is pressed
    //remove the parent list item from the unordered list
    }

//mark a task as complete
var taskComplete = function() {
    console.log("Task complete...");
//when the checkbox is checked
    //append the task list item #completed-tasks
    }
    
//mark a task as incomplete
var taskIncomplete = function(){
    console.log("Task incomplete...");
  //when the checkbox is unchecked
    //append to #incomplete-tasks
    }
    

//Set the click handler to the addTask function
addButton.onclick = addTask;

var bindTaskEvents = function(taskListItem, checkboxEventHandler){
  //select its children
    //bind editTask to edit button
    //bind deleteTask to delete button
    //bind checkboxEventHandler to the checkbox
    
}



//cycle over incompleteTaskHolder ul list items
  //for each list item
    //bind events to list item's children(taskCompleted)
    
//cycle over completeTaskHolder ul list items
  //for each list item
    //bind events to list item's children(taskIncomplete)
