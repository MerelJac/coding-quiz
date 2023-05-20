// make variable for document.getElementByID(#- start button)
var startBtn = document.querySelector("#startBtn");
// make variable for timer
var timerEl = document.querySelector("#timer");
// make varibale for printResults section in HTML
var printSection = document.querySelector(".printResults");
var quizTemplate = document.querySelector("#quiz");
var answerBtn = document.querySelector('#answerOption1');

// the following lines will print the question and possible answers in the HTML button containers
var quizContainer = document.getElementById('question');
var answerContainer1 = document.getElementById('answerOption1');
var answerContainer2 = document.getElementById('answerOption2');
var answerContainer3 = document.getElementById('answerOption3');
var answerContainer4 = document.getElementById('answerOption4');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
    question: 'Do you like coding?',
    possibleAnswer1: 'Yes',
    possibleAnswer2: 'Sometimes',
    possibleAnswer3: 'It is hard',
    possibleAnswer4: 'No'
    },
    {
    question: 'What is your favorite food?',
    possibleAnswer1: 'Pizza',
    possibleAnswer2: 'French Fries',
    possibleAnswer3: 'Soup',
    possibleAnswer4: 'Meat'
    },
    {
    question: 'Do you eat your favorite snacks while coding?',
    possibleAnswer1: 'Yes',
    possibleAnswer2: 'Sometimes',
    possibleAnswer3: 'I know I shouldnt',
    possibleAnswer4: 'No'
    }
]

// set duration of timer -- done
var secondsLeft = 5
// when you click the start button, the timer begins -- done
function startQuiz() {
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


document.addEventListener('DOMContentLoaded', function() {
    quizContainer.innerText = questions[0].question;
    answerContainer1.innerText = questions[0].possibleAnswer1;
    answerContainer2.innerText = questions[0].possibleAnswer2;
    answerContainer3.innerText = questions[0].possibleAnswer3;
    answerContainer4.innerText = questions[0].possibleAnswer4;
})

function showNextQuestion() {
    for (var i = 1; i < 2; i++) {
        document.addEventListener('DOMContentLoaded', function() {
            quizContainer.innerText = questions[i].question;
            answerContainer1.innerText = questions[i].possibleAnswer1;
            answerContainer2.innerText = questions[i].possibleAnswer2;
            answerContainer3.innerText = questions[i].possibleAnswer3;
            answerContainer4.innerText = questions[i].possibleAnswer4;
        })
    }
};


// make for loop for quiz questions/possible answers
// chaange i < to be based off the timer


// for (var i = 0; i < questions.length; i++) {
//     let index = Math.floor(Math.random() * quizPossileQuestions)
//     let quizQuestion = quizPossileQuestions[index];
//     quizContainer.textContent = quizQuestion;
    
// };


// when the timer begins, the first question pops onto the screen

// object arrays of questions/possible answers/ correct answer



// when you click a possible answer output boolean. if answer == true print "correct" if answer == false "incorrect"

// if answer == false, subtract more time from the timer

// localStorage adding total points

// when timer == -1, (ends) print total score on page. 

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuiz);
answerBtn.addEventListener("click", showNextQuestion);
