// make variable for document.getElementByID(#- start button)
var startBtn = document.querySelector("#startBtn");
// make variable for timer
var timerEl = document.querySelector("#timer");
// make varibale for printResults section in HTML
var printSection = document.querySelector(".printResults");


// set duration of timer -- done
var secondsLeft = 5
// when you click the start button, the timer begins -- done
function setTimer() {
    // Set interval in variable
    var timerInterval = setInterval(() => {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft === 0) {clearInterval(timerInterval);
        // when timer runs out, run this function   
        printResults()};
    }, 1000);
};


// having trouble with print results function // creating HTML lements 
function printResults() {
    // write new verbage 
    timerEl.textContent = "Time's Out!";
    // create a new div in HTML
    var resultsDiv = document.createElement("div");
    // tell the new div what to say
    resultsDiv.innerText = "Here are your results:";
    // append the new div to the body of the HTML file
    document.body.appendChild(resultsDiv);
    
    var resultsDiv = document.createElement("div");
    // tell the new div what to say
    resultsDiv.innerText = "Here are your results:";
    // append the new div to the body of the HTML file
    document.body.appendChild(resultsDiv);
    

    // document.querySelector(".printResults").innerHTML += `<li>${"Your Score"}</li><li>${"Great Job"}</li><li>${"WooHoo"}</li>`;

    // //give it content
    // resultsPage = "results";
    // // prints to page
    // document.body.appendChild(resultsPage);

};





// when the timer begins, the first question pops onto the screen

// object arrays of questions/possible answers/ correct answer

// when you click a possible answer output boolean. if answer == true print "correct" if answer == false "incorrect"

// if answer == false, subtract more time from the timer

// localStorage adding total points

// when timer == -1, (ends) print total score on page. 

startBtn.addEventListener("click", setTimer());