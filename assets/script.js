// make variable for document.getElementByID(#- start button)
var startBtn = document.querySelector("#startBtn");
// make variable for timer
var timerEl = document.querySelector("#timer");
// make varibale for printResults section in HTML
var printSection = document.querySelector(".printResults");
var quizTemplate = document.querySelector("#quiz");
// is this why only one button works?
var answerBtn1 = document.querySelector('#answerOption1');
var answerBtn2 = document.querySelector('#answerOption2');
var answerBtn3 = document.querySelector('#answerOption3');
var answerBtn4 = document.querySelector('#answerOption4');
var restartBtn = document.querySelector('#restartBtn');

// the following lines will print the question and possible answers in the HTML button containers
var quizContainer = document.getElementById('question');
var answerContainer1 = document.getElementById('answerOption1');
var answerContainer2 = document.getElementById('answerOption2');
var answerContainer3 = document.getElementById('answerOption3');
var answerContainer4 = document.getElementById('answerOption4');
var submitButton = document.getElementById('submit');

var questions = [
    {
    question: 'Do you like coding?',
    possibleAnswer1: 'Yes',
    possibleAnswer2: 'Sometimes',
    possibleAnswer3: 'It is hard',
    possibleAnswer4: 'No',
    correctAnswer: 'Yes'
    },
    {
    question: 'What is your favorite food?',
    possibleAnswer1: 'Pizza',
    possibleAnswer2: 'French Fries',
    possibleAnswer3: 'Soup',
    possibleAnswer4: 'Meat',
    correctAnswer: 'Meat'
    },
    {
    question: 'Do you eat your favorite snacks while coding?',
    possibleAnswer1: 'Yes',
    possibleAnswer2: 'Sometimes',
    possibleAnswer3: 'I know I shouldnt',
    possibleAnswer4: 'No',
    correctAnswer: 'No'
    }
]

// set duration of timer -- done
var secondsLeft = 5
// when you click the start button, the timer begins -- done
function startQuiz() {
    var quiz = document.querySelector("#quiz");
    quiz.style.display = "flex";
    restartBtn.setAttribute("style", "display: flex")
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
    // create a new div in HTML
    var resultsDiv = document.createElement("div");
    // tell the new div what to say
    resultsDiv.innerText = "Results";
    // append the new div to the body of the HTML file
    document.body.children[3].appendChild(resultsDiv);
    var resultsDiv = document.createElement("div");
    // tell the new div what to say
    resultsDiv.innerText = "Your Score: " + yourScore;
    // append the new div to the body of the HTML file
    document.body.children[3].appendChild(resultsDiv);
    var initalsDiv = document.createElement("input");
    initalsDiv.setAttribute("placeholder", "Input Initals");
    document.body.children[3].appendChild(initalsDiv);
    initalsDiv.addEventListener("change", function storeInitals() {
        localStorage.setItem("initals", initalsDiv.value);
    })

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

var yourScore = 0
function checkAnswer() {
    if  (questions[0].possibleAnswer1 === questions[0].correctAnswer) {yourScore += 1}
    else if (questions[0].possibleAnswer2 === questions[0].correctAnswer) {yourScore += 1}
    else if (questions[0].possibleAnswer3 === questions[0].correctAnswer) {yourScore += 1}
    else if (questions[0].possibleAnswer4 === questions[0].correctAnswer) {yourScore += 1}
    else if (questions[0].possibleAnswer1 !== questions[0].correctAnswer) {console.log("Time Deducted")}
    else if (questions[0].possibleAnswer2 !== questions[0].correctAnswer) {console.log("Time Deducted")}
    else if (questions[0].possibleAnswer3 !== questions[0].correctAnswer) {console.log("Time Deducted")}
    else if (questions[0].possibleAnswer4 !== questions[0].correctAnswer) {console.log("Time Deducted")}

    console.log(yourScore);
};

localStorage.setItem("score", yourScore);
var pastScore = document.createElement("div");
pastScore.innerText = "Past Score: " + localStorage.getItem("score")

// add local storage to page
// if (localStorage.getItem("score" = value)) {
//     var pastScore = document.createElement("div");
//     pastScore.innerText = "Past Score: " + localStorage.getItem("score");
// }

// make for loop for quiz questions/possible answers
// chaange i < to be based off the timer


// for (var i = 0; i < questions.length; i++) {
//     let index = Math.floor(Math.random() * quizPossileQuestions)
//     let quizQuestion = quizPossileQuestions[index];
//     quizContainer.textContent = quizQuestion;
    
// };

function restartPage() {
    yourScore = 0;
    secondsLeft = 10;
    startTimer();
    console.log("Page Restarted");
};



// localStorage adding total points

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuiz);
answerBtn1.addEventListener("click", checkAnswer);
answerBtn2.addEventListener("click", checkAnswer);
answerBtn3.addEventListener("click", checkAnswer);
answerBtn4.addEventListener("click", checkAnswer);
restartBtn.addEventListener("click", restartPage);
