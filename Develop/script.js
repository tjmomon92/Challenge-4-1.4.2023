// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeSlots=document.querySelectorAll('.time-block');

var currentHour= dayjs().hour();

// var saveBtn = document.querySelector('#btn saveBtn col-2 col-md-1');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // function saveEntry() {
    // $('#container-lg px-5').children
  // }

  // saveBtn.addEventListener("click", saveEntry);

  for (i = 0; i < timeSlots.length; i++) {
    var boxId = timeSlots[i].id
    var box = document.getElementById(boxId);
    var hour = boxId.split('hour-')[1];
    if (hour == currentHour) {
      box.classList.add('present');
    } else if (hour < currentHour) {
      box.classList.add('past');
    } else if (hour > currentHour) {
      box.classList.add('future');
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY h:mm a'));
  console.log(today);
});

// if (dixBoxId === 'hour-' + dayjs().format(H)) {
  // divBox.classList.add('present');
// };

// var dixBoxId