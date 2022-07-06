console.log('hello');

// Here I will define variables to use for my code 

//Here is the code for displaying the current date at the top of the page
var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

document.getElementById("currentDay").innerHTML = today;

//DECLARE Time Entries Container Element

//Here is the code for timeblocks
//Render a block for each hour of the day 

for (var i =9; i<=17; i++) {

    //Need to designate if entered time is past, present, or future

    var template = `<div class="row">
    <div>
      ${i}AM
    </div>
    <div>
      <textarea></textarea>
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