//Problem: user interaction doesnt provide desired results
//Solution: Add interactivity so the user can amanage daily tasks

//add a task
var addTask = function(){
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
//delete existing task
  //when the delete button is pressed
    //remove the parent list item from the unordered list
    }

//mark a task as complete
var taskComplete = function() {
  //when the checkbox is checked
    //append the task list item #completed-tasks
    }
    
//mark a task as incomplete
var taskIncomplete = function(){
  //when the checkbox is unchecked
    //append to #incomplete-tasks
    }