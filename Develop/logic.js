

var displayCurrentDay = function() {
  var currentTimeEl = $("#currentDay");


    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    currentTimeEl.text(new Intl.DateTimeFormat("en-US",options).format(date)); 
};

// get tasks id and value and store in object


// save tasks to local storage
var saveTasks = function(){

};




displayCurrentDay();
