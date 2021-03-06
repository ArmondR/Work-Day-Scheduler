var saveBtnEl = $(".saveBtn");
var descriptionEl = $(".description");
var timeBlockEl = $(".time-block");



var displayCurrentDay = function () {
  var currentTimeEl = $("#currentDay");

  var date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentTimeEl.text(new Intl.DateTimeFormat("en-US", options).format(date));
};

var currentTime = function () {
  var options = { hour: 'numeric', hour12: false };
  var time = (new Intl.DateTimeFormat("en-US", options).format());
  return time;
}

// establish time variable for use with task time audit 
var time = currentTime();



// save tasks to local storage
var saveTasks = function () {

  // gets value of description from div in which button was clicked
  var taskDescription = $(this).siblings(".description").val();
  console.log(taskDescription);

  // gets id of parent container in which button was clicked
  var taskId = $(this).parent().attr("id");
  console.log(taskId);

  // var taskDescription = $(".time-block .description").val();
  // var taskId = $(".time-block").attr("id");
  localStorage.setItem(taskId,taskDescription);
}

var loadTasks = function () {
 $(".time-block").each(function(){

   var key = $(this).attr("id");
   console.log(key);

    var value = localStorage.getItem(key);
   console.log(value);

   $(this).children(".description").val(value);
 })
};


var taskAudit = function () {

  // loop through each task div
  $(".time-block").each(function () {

    // if class is present remove it.
    //$(this).removeClass("present past future");

    var taskTime = parseInt($(this).attr("data-time"));
    console.log(taskTime);
    // update classes according to their time 
    if (time == taskTime) {
      $(this).addClass("present");
    }
    else if (time > taskTime) {
      $(this).addClass("past");
    }
    else if (time < taskTime) {
      $(this).addClass("future");
    }
  })
};




displayCurrentDay();
currentTime();
taskAudit();
loadTasks();

// Event listener/delegation for save button
$(".container").on("click", "button", saveTasks);


