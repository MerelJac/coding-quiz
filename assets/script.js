// make variable for document.getElementByID(#- start button)
var startBtn = document.querySelector("#startBtn");
// make variable for timer
var timerEl = document.querySelector("#timer");
// make varibale for printResults section in HTML
var resutsSection = document.querySelector("#results");
var printSection = document.querySelector(".printResults");
var quizTemplate = document.querySelector("#quiz");
var restartBtn = document.querySelector('#restartBtn');
var questionSection = document.querySelector('#question');
var answerSection = document.querySelector('#answerSection');


var questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mercury", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    }
  ];
    function generateQuiz() {
        quiz.style.display = "flex";
        startBtn.setAttribute("style", "display: none");
        for (var i = 0; i < questions.length; i++) {
            // clears out previous buttons / must be at top
            answerSection.innerHTML = "";
            var currentQuestion = questions[i];
            console.log(currentQuestion);
            console.log(currentQuestion.question);
            questionSection.textContent = currentQuestion.question;
            console.log(currentQuestion.options);
            var answerButton1 = document.createElement("button");
            answerButton1.textContent = currentQuestion.options[0];
            answerSection.appendChild(answerButton1);
            answerButton1.addEventListener("click", scoreAnswer1);
            var answerButton2 = document.createElement("button");
            answerButton2.textContent = currentQuestion.options[1];
            answerSection.appendChild(answerButton2);
            answerButton2.addEventListener("click", scoreAnswer2);
            var answerButton3 = document.createElement("button");            answerButton3.textContent = currentQuestion.options[2];
            answerSection.appendChild(answerButton3);
            answerButton3.addEventListener("click", scoreAnswer3);
            var answerButton4 = document.createElement("button");            answerButton4.textContent = currentQuestion.options[3];
            answerSection.appendChild(answerButton4);
            answerButton4.addEventListener("click", scoreAnswer4);
            console.log(currentQuestion.answer);
            function scoreAnswer1() {
                if (answerButton1.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(i++);
                } else {console.log("you lost time"); generateQuiz(i++)}
                };
            function scoreAnswer2() {
                if (answerButton2.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(i++);
                 } else {console.log("you lost time"); generateQuiz(i++);}
                };
            function scoreAnswer3() {
                if (answerButton3.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(i++);
                 } else {console.log("you lost time"); generateQuiz(i++);}
                };
            function scoreAnswer4() {
                if (answerButton4.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(i++);
                } else {console.log("you lost time"); generateQuiz(i++);}
                };
        }};

// set duration of timer
var secondsLeft = 60;
// begin with a score of 0
var yourScore = 0
// when you click the start button, the timer begins -- done
function startQuiz() {
    var quiz = document.querySelector("#quiz");
    quiz.style.display = "flex";
    startBtn.setAttribute("style", "display: none")
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

    resutsSection.style.display = "flex";


    // when time starts, quiz pops up
};

function printResults() {
    restartBtn.setAttribute("style", "display: flex");
    var printSection = document.createElement("p");
    // tell the new div what to say
    printSection.innerText = "Results";        
    // append the new div to the body of the HTML file
    document.body.children[2].appendChild(printSection);
    var printSection = document.createElement("p");        
    // tell the new div what to say
    printSection.innerText = "Your Score: " + yourScore;
    // append the new div to the body of the HTML file 
    document.body.children[2].appendChild(printSection);
    var initalsDiv = document.createElement("input");
    initalsDiv.setAttribute("placeholder", "Input Initals");        
    printSection.appendChild(initalsDiv);
    printSection.setAttribute("style", "display: flex; flex-direction: column; text-align: center");
    initalsDiv.setAttribute("style", "text-align: center;");
    // if you type in the input box, it will save the initals in local storage
    initalsDiv.addEventListener("change", function storeInitals() {
        localStorage.setItem("initals", initalsDiv.value);
        });

    // show the restart button
    restartBtn.setAttribute("style", "display: flex");
    // hide the start button
    startBtn.setAttribute("style", "display: none");
};

// document.addEventListener('DOMContentLoaded', function() {
//     quizContainer.innerText = questions[0].question;
//     answerContainer1.innerText = questions[0].possibleAnswer1;
//     answerContainer2.innerText = questions[0].possibleAnswer2;
//     answerContainer3.innerText = questions[0].possibleAnswer3;
//     answerContainer4.innerText = questions[0].possibleAnswer4;
// });

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
    secondsLeft = 3;
    startTimer();
    timerEl.setAttribute("style", "display: flex; align-items: flex-end");
    startQuiz();
    resutsSection.innerHTML = "";
    resutsSection.style.display = "none";
    console.log("Page Restarted");
    restartBtn.setAttribute("style", "display: none");
};



// localStorage adding total points

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", generateQuiz);
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartPage);
