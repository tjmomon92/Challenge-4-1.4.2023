var timeSlots = document.querySelectorAll('.time-block');

var currentHour = dayjs().hour();

var saveBtn = document.querySelectorAll('.fas fa-save');

$(".saveBtn").click(function(){
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
})

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY h:mm a'));

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

updateColor();

setInterval(updateColor, 30000);