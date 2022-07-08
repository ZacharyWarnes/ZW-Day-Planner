console.log('hello');

// Here I will define variables to use for my code 

//DECLARE Current Hour

var currentHour = []
    


//Here is the code for displaying the current date at the top of the page
var today = moment().format("dddd MMMM Do");
$("#currentDay").text(today);

document.getElementById("currentDay").innerHTML = today;

//DECLARE Time Entries Container Element

//Here is the code for timeblocks
//Render a block for each hour of the day 

for (var i =9; i<=17; i++) {
    var key = "hour-" + i
    // Attempt to get the saved data for the hour of the loop
    var data = "asdf";

    // Compare i to current hour to determine of this hour is in the past, present, or future

    //Need to designate if entered time is past, present, or future

    var template = `
    <div class="row">
    <div>
      ${i}
    </div>
    <div>
      <textarea>${data}</textarea>
    </div>
    <div>
      <button data-hour="${i}">Save</button>
    </div>
</div>
`;

  //Append the html to the page 

}

//Each timeblock must display a different color indicating: past, present, future

//Time blocks must have a form that stores local information so that information 
//remains when the page is refreshed