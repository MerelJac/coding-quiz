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
        question: "What is the correct way to declare an empty array in JavaScript?",
        options: ["var array = [];", "var array = {};", "var array = ();", "var array = '';"],
        answer: "var array = [];"
      },
        {question: "What is the correct way to declare an empty array in JavaScript?",
        options: ["var array = [];", "var array = {};", "var array = ();", "var array = '';"],
        answer: "var array = [];"
    },
      {
        question: "How do you access the first element of an array?",
        options: ["array[0]", "array.first", "array.firstElement", "array.first()"],
        answer: "array[0]"
      },
      {
        question: "What method adds one or more elements to the end of an array and returns the new length?",
        options: ["array.push()", "array.pop()", "array.concat()", "array.join()"],
        answer: "array.push()"
      },
      {
        question: "Which method removes the last element from an array and returns that element?",
        options: ["array.shift()", "array.splice()", "array.pop()", "array.slice()"],
        answer: "array.pop()"
      },
      {
        question: "What element do you use to link JavaScript to the HTML file?",
        options: ["<script>", "<JS>", "<meta>", "<file>"],
        answer: "<script>"
      },
      {
        question: "Correct syntax to getElementByID?",
        options: ["('.id')", "('#id')", "('id')", "(id)" ],
        answer: "('#id')"
      }
  ];

  function generateQuiz() {
    var shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    // how to prevent duplicates?
    console.log(shuffledQuestions);
        quiz.style.display = "flex";
        startBtn.setAttribute("style", "display: none");
            // clears out previous buttons / must be at top
            answerSection.innerHTML = "";
            // finds current question in the array
            var currentQuestion = shuffledQuestions[0];
            //check progress
            console.log(currentQuestion);
            console.log(currentQuestion.question);
            // writes question onto the screen
            questionSection.textContent = currentQuestion.question;
            // check work
            console.log(currentQuestion.options);
            // create answerButton 1
            var answerButton1 = document.createElement("button");
            // text content of button is that of array[0]
            answerButton1.textContent = currentQuestion.options[0];
            //append to after the answerSection
            answerSection.appendChild(answerButton1);
            // add click function to score answer
            answerButton1.addEventListener("click", scoreAnswer1);
            // repeat 
            var answerButton2 = document.createElement("button");
            answerButton2.textContent = currentQuestion.options[1];
            answerSection.appendChild(answerButton2);
            answerButton2.addEventListener("click", scoreAnswer2);
            // repeat
            var answerButton3 = document.createElement("button");            
            answerButton3.textContent = currentQuestion.options[2];
            answerSection.appendChild(answerButton3);
            answerButton3.addEventListener("click", scoreAnswer3);
            // repeat
            var answerButton4 = document.createElement("button");            
            answerButton4.textContent = currentQuestion.options[3];
            answerSection.appendChild(answerButton4);
            answerButton4.addEventListener("click", scoreAnswer4);
            // check work 
            console.log(currentQuestion.answer);
            function scoreAnswer1() {
                if (answerButton1.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(shuffledQuestions++);
                } else {console.log("you lost time"); timerEl.setAttribute("style", "font-weight: bolder"); loseTime(5); generateQuiz(shuffledQuestions++)}
                };
            function scoreAnswer2() {
                if (answerButton2.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(shuffledQuestions++);
                 } else {console.log("you lost time"); timerEl.setAttribute("style", "font-weight: bolder"); loseTime(5); generateQuiz(shuffledQuestions++);}
                };
            function scoreAnswer3() {
                if (answerButton3.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(shuffledQuestions++);
                 } else {console.log("you lost time"); timerEl.setAttribute("style", "font-weight: bolder"); loseTime(5); generateQuiz(shuffledQuestions++);}
                };
            function scoreAnswer4() {
                if (answerButton4.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(shuffledQuestions++);
                } else {console.log("you lost time"); loseTime(5); generateQuiz(shuffledQuestions++); timerEl.setAttribute("style", "font-weight: bolder")};
                };
            yourScore = yourScore;
            console.log(yourScore);
        };


function loseTime (time) {
    secondsLeft -= time;
}

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

        if (secondsLeft <= 0) {clearInterval(timerInterval);
        // when timer runs out, run this function   
        printResults();

        timerEl.setAttribute("style", "display: none");
        quizTemplate.setAttribute("style", "display: none");
        resutsSection.style.display = "flex";}
    }, 1000);
    // when time starts, quiz pops up
};

function printResults() {
    restartBtn.setAttribute("style", "display: flex");
    var printSection = document.createElement("h1");
    // tell the new div what to say
    printSection.innerText = "Results";        
    // append the new div to the body of the HTML file
    document.body.children[2].appendChild(printSection);
    var printSection = document.createElement("p");        
    // tell the new div what to say
    printSection.innerText = "Your Score: " + yourScore;
    // locals storeage for score
    localStorage.setItem("score", yourScore);
    var pastScore = document.createElement("div");
    printSection.appendChild(pastScore);
    pastScore.innerText = "Past Score: " + localStorage.getItem("score") + " " + localStorage.getItem('initals');
    // append the new div to the body of the HTML file 
    document.body.children[2].appendChild(printSection);
    var initalsDiv = document.createElement("input");
    initalsDiv.setAttribute("placeholder", "Input Initals");        
    printSection.appendChild(initalsDiv);
    printSection.setAttribute("style", "display: flex; flex-direction: column; text-align: center; line-height: 3");
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


function restartPage() {
    yourScore = 0;
    secondsLeft = 60;
    startTimer();
    timerEl.setAttribute("style", "display: flex; align-items: flex-end");
    startQuiz();
    generateQuiz();
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