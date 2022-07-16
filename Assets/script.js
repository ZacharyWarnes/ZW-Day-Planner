
//I am declaring the current hour for comparative use later 
var currentHour = moment().hour();
  console.log(currentHour);

//Here is the code for displaying the current date at the top of the page
var today = moment().format("dddd MMMM Do");
$("#currentDay").text(today);

//Declaring a Time Entries Container variabel
var timeEntriesEl = $(".description");

//Declaring a save button variable
var button = $(".saveBtn");

for (var i = 9; i <= 17; i++) {
  
// Set a variable to create 9AM-5PM daily schedule converted from a 24-hour clock
var realTime;

  if (i < 12 ){
    console.log("AM")
    realTime = i + "AM";
  }

  else if (i==12){
    realTime = i + "PM";
  }
  
  else {
    console.log ("PM")
    realTime = (i -12) + "PM";
  }
  // Compare i to current hour to determine of this hour is in the past, present, or future
var colorClass;

  if (i < currentHour) {
    colorClass = "past";
  }

  else if (i == currentHour){
    colorClass = "present";
  }

  if (i > currentHour) {
    colorClass = "future";
  }

  // Template for time blocks including dynamic Jquery inputs
  var template = `
    <div class="row time-block">
    <div class = "hour col">
      ${realTime}
    </div>
      <textarea class= "description col-10 ${colorClass}"></textarea>
      <button class = "saveBtn col" data-hour="${i}">Save</button>
    
</div>
`;

$("#timeEntries").append(template);



}

//This Code Saves the Time Entry blocks to local storage

button.on("click", function(event) {
 var savedTimeEntry = timeEntriesEl.textContent;
 console.log(savedTimeEntry);
 localStorage.setItem('key', JSON.stringify(savedTimeEntry));
 timeEntriesEl();
 realTime();
});

function getValue() {
  return localStorage.getItem('timeEntriesEl');
  return localStorage.getItem('realTime');
}
console.log(getValue());

//localStorage.getItem


//Time blocks must have a form that stores local information so that information
//remains when the page is refreshed
