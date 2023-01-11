// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeSlots = document.querySelectorAll('.time-block');

var currentHour = dayjs().hour();

var userInput = document.querySelectorAll('.col-8 col-md-10 description');

var saveBtn = document.querySelectorAll('.fas fa-save');

$(".saveBtn").click(function(){
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
})

function updateColor () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

   for (i = 0; i < timeSlots.length; i++) {
    var hour = parseInt(timeSlots[i].id);
    if (hour == currentHour) {
      $(`#${hour}`).addClass('present');
    } else if (hour < currentHour) {
      $(`#${hour}`).addClass('past');
    } else if (hour > currentHour) {
      $(`#${hour}`).addClass('future');
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY h:mm a'));
};

updateColor();

setInterval(updateColor, 30000);


localStorage.getItem(time, text);