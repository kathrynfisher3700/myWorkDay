//_.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~._
//Grabs current date from day.js and stores into element in header

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
    $(`#hour-${i}`).addClass("present"); //if hour current, turn box green
  } else {
    $(`#hour-${i}`).addClass("future"); //if hour in future, turn box green
  }
}
//_.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~.__.~"~._.~"~._.~"~._.~"~._
//Grabs save button element

let saveBtn = document.getElementsByClassName("saveBtn");
console.log(saveBtn); //check

//Grabs value in text boxes
let userText = document.querySelectorAll("description");
let userProject = {
  text: userText.value,
};
//Trying to add to local storage ---- more to learn but will update soon
//does not throw error
$("textarea").click(function () {
  localStorage.setItem("userProject", JSON.stringify(userProject));
});
