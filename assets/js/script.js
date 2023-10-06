//_.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~._
//Grabs current date from day.js and stores into element in header
$( document ).ready(function() {
    console.log( "ready!" );

let day = document.getElementById("currentDay"); //element
let today = dayjs().format("MMMM D, YYYY"); //current day
day.innerHTML = today; //adds current day to element

//_.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~._
//Grabs current hour from day.js

let hour = dayjs().format("H"); //current hour (24 hour clock)
console.log(hour); //log to check if working
let hourNow = Number.parseFloat(hour); //turns string into number
console.log(hourNow); //check

//_.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~._
//For loop to grab all values of hour boxes -- compares them to current hour

for (let i = 9; i <= 17; i++) { //hour box range is 9-17
  if (hour > i) {
    $(`#hour-${i}`).addClass("past"); //if hour has past, turn box gray
  } else if (hour == i) {
    $(`#hour-${i}`).addClass("present"); //if hour current, turn box red
  } else {
    $(`#hour-${i}`).addClass("future"); //if hour in future, turn box green
  }
}
//_.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~._

//Save button sets local storage for specific time box and value of text
$(".saveBtn").on('click', function (){
  let value = $(this).siblings(".description").val(); 
  let time = $(this).parent().attr('id');
  localStorage.setItem(time, value);
});

//gets value from local storage.
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
