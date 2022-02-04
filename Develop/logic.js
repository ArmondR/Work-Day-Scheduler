var saveBtnEl = $(".saveBtn");
var descriptionEl = $(".description");
var timeBlockEl = $(".hour");

var displayCurrentDay = function() {
  var currentTimeEl = $("#currentDay");

    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    currentTimeEl.text(new Intl.DateTimeFormat("en-US",options).format(date)); 
};




// save tasks to local storage
var saveTasks = function(){

  
  var taskDescription = $(this).siblings(".description").val();
  console.log(taskDescription);

  var taskId = $(this).parent().attr("id");
  console.log(taskId);

  var tasks = {
    id: taskId,
    description: taskDescription
  }

  console.log(tasks);

  // if(event.target.matches(".saveBtn")) {
  //   console.log(".description".value);
  //}
  
  //console.log(event.target);

  // // get tasks id and value and store in object
  // var taskId = $()
  // var taskDescription = $().val();

  // // create object to store variables/ key values
  // var tasks = {
  //   id:taskId,
  //   description:taskDescription
  // }

  // localstorage.setItem("tasks", JSON.stringify(tasks));
};







displayCurrentDay();

// Event listener/delegation for save button
//$(".container").click(saveTasks);
$(".container").on("click", "button", saveTasks);

// event listener for save task button
// $(".container").on("click", function(event) {
//   alert(event.target.saveBtnEl);

//   console.log(event);
// })
