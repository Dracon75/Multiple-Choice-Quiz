let stopwatch = countdown();
let startbtnEl = $('#start-btn');
let counter = $("#counter");


// Timer that counts down from 60
function countdown() {

  let customTimer = document.getElementById("counter");
  let timeLeft = 120;

  let timeInterval = setInterval(function ()
   {
      if (timeLeft > 1) 
      {
        customTimer.textContent = timeLeft + " seconds remaining";
        timeLeft--;
      } 
      else if (timeLeft === 1) 
      {
        customTimer.textContent = timeLeft + " second remaining";
        timeLeft--;
      } 
      else 
      {
        customTimer.textContent = "";
        clearInterval(timeInterval);
        startGame = false;
      }
    }, 1000);
}




