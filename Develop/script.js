  // selects all time slots in HTML
  var timeSlots = document.querySelectorAll('.time-block');

  // sets variable to select the hour from the live clock for comparison in the updateColor function
  var currentHour = dayjs().hour();

  // sets variable for the save button(s) in the HTML time blocks
  var saveBtn = document.querySelectorAll('.saveBtn');
  console.log(saveBtn);
  // creates jQuery eventListener for the save button(s). This event saves user input to local storage
  $(".saveBtn").click(function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  })

  // creates live date/time clock at top of page
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY h:mm a'));

  // function that establishes rules for color-coordination based on timeslot ID compared to current time
  function updateColor () {
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
  };

  // function the operates on page load to get items from local storage and append them to their original boxes
  $(document).ready(function () {
    var time = '8';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '9';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '10';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '11';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '12';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '13';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '14';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '15';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '16';
    $('#' + time + ' .description').append(localStorage.getItem(time));
    var time = '17';
    $('#' + time + ' .description').append(localStorage.getItem(time));
  });

  // calls function above based on setInterval refresh to keep timeclock up-to-date
  updateColor();

  // updates timeclock every 10 seconds to keep clock accurate without having to physically refresh the page
  setInterval(updateColor, 10000);