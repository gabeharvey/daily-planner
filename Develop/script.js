//Declared variables
let timeEl = dayjs().hour();
let currentTime = dayjs();

//Following function allows save button to save user input info to local storage
$(function () { 
  $(".saveBtn").on("click", function () {
    let option = $(this).parent().attr("id")
    let utility = $(this).siblings("textarea").val()
    localStorage.setItem(option, utility)
  });

//Following function displays present, past, and future states with css qualities
$(".time-block").each(function () {
  let planner = Number($(this).attr("id").split("-")[1]);
  if (timeEl === planner) {
    $(this).addClass("present");
  } else if (timeEl < planner) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (timeEl > planner) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

//Following elements obtain info from Local Storage and display in text area
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"))
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"))
    $("#hour-11 textarea").val(localStorage.getItem("hour-11"))
    $("#hour-12 textarea").val(localStorage.getItem("hour-12"))
    $("#hour-13 textarea").val(localStorage.getItem("hour-13"))
    $("#hour-14 textarea").val(localStorage.getItem("hour-14"))
    $("#hour-15 textarea").val(localStorage.getItem("hour-15"))
    $("#hour-16 textarea").val(localStorage.getItem("hour-16"))
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"))
});
  
//Time function on top of page centered
setInterval (function() {
  $("#currentDay").text(currentTime.format("dddd, MM/DD/YYYY, h:mm A"));
}, 1000);