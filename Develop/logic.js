

var displayCurrentDay = function() {
  var currentTimeEl = $("#currentDay");

    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    currentTimeEl.text(new Intl.DateTimeFormat("en-US",options).format(date)); 
};




// save tasks to local storage
var saveTasks = function(){

  // get tasks id and value and store in object
  var taskId = $().val();
  var taskDescription = $().val();

  // create object to store variables
  var tasks = {
    id:"",
    description:""
  }

};

// event listener for save task button





displayCurrentDay();
