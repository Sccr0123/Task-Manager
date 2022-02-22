var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
	event.preventDefault();
	var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //Checks if inputs are empty
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false
    };
    //Resets inputs
    formEl.reset();


	//Packages data as an obj
	var taskDataObj = {
		name: taskNameInput,
		type: taskTypeInput,
	};

	//Sends obj to createTaskE1
	createTaskE1(taskDataObj);
};

var createTaskE1 = function (taskDataObj) {
	// create list item
	var listItemEl = document.createElement("li");
	listItemEl.className = "task-item";

	// create div to hold task info and add to list item
	var taskInfoEl = document.createElement("div");
	taskInfoEl.className = "task-info";

	// add HTML content to div
	taskInfoEl.innerHTML =
		"<h3 class='task-name'>" +
		taskDataObj.name +
		"</h3><span class='task-type'>" +
		taskDataObj.type +
		"</span>";
	listItemEl.appendChild(taskInfoEl);

	// add entire list item to list
	tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
