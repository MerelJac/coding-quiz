// make variable for document.getElementByID(#- start button)
var startBtn = document.querySelector("#startBtn");
// make variable for timer
var timerEl = document.querySelector("#timer");
// make varibale for printResults section in HTML
var printSection = document.querySelector(".printResults");
var quizTemplate = document.querySelector("#quiz");

var questions = [
    {question: "Do you like coding?",
    possibleAnswers:[{"text":"Yes","correct":true},
    {"text":"No","correct":false}]
    },
    {question: "What language is for styling?",
    possibleAnswers:[{"text":"JavaScript","correct":false},
    {"text":"CSS","correct":true}]}
]

// set duration of timer -- done
var secondsLeft = 5
// when you click the start button, the timer begins -- done
function startQuiz() {
    // produce quiz upon click - not working
    var quiz = document.querySelector("#quiz");
    quiz.style.display = "flex";
};

function startTimer() {
    // Set interval in variable
    var timerInterval = setInterval(() => {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft === 0) {clearInterval(timerInterval);
        // when timer runs out, run this function   
        printResults();

        timerEl.setAttribute("style", "display: none");
        quizTemplate.setAttribute("style", "display: none")}
    }, 1000);

    // when time starts, quiz pops up
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
    document.body.children[2].appendChild(resultsDiv);
    
    var resultsDiv = document.createElement("div");
    // tell the new div what to say
    resultsDiv.innerText = "Your Score:";
    // append the new div to the body of the HTML file
    document.body.children[2].appendChild(resultsDiv);
    

    // document.querySelector(".printResults").innerHTML += `<li>${"Your Score"}</li><li>${"Great Job"}</li><li>${"WooHoo"}</li>`;

    // //give it content
    // resultsPage = "results";
    // // prints to page
    // document.body.appendChild(resultsPage);

};

// make quiz below
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



// when the timer begins, the first question pops onto the screen

// object arrays of questions/possible answers/ correct answer



// when you click a possible answer output boolean. if answer == true print "correct" if answer == false "incorrect"

// if answer == false, subtract more time from the timer

// localStorage adding total points

// when timer == -1, (ends) print total score on page. 

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuiz);