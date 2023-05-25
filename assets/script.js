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
var saveBtn = document.querySelector('#storeData');

// either pull array or create an empty array 
var highScoresArray = JSON.parse(localStorage.getItem('highScores')) || [];

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
      }, { question: "Which selector is used to target an element by its ID in CSS?", options: [".class", "#id", "$id", "@id"],
answer: "#id"}, { question: "What is the correct syntax to apply an inline style to an HTML element?",
options: ["<style>", "<css>", "<link>", "style attribute"],
answer: "style attribute"}, { question: "Which CSS property is used to control the size of an element's font?",
options: ["font-size", "font-style", "font-family", "font-color"],
answer: "font-size"}, { question: "How can you include an external CSS file in your HTML document?",
options: ["<script src='styles.css'>", "<link rel='stylesheet' href='styles.css'>", "<style src='styles.css'>", "<css href='styles.css'>"],
answer: "<link rel='stylesheet' href='styles.css'>"}, {question: "Which CSS property is used to change the background color of an element?",
options: ["color", "background-color", "background-image", "background-style"],
answer: "background-color"},
{ question: "What is the correct way to select all paragraph elements using CSS?",
options: ["<p>", ".paragraph", "#paragraph", "p"],
answer: "p"},
{ question: "Which CSS property is used to add spacing between the letters of a text?",
options: ["text-indent", "line-height", "word-spacing", "letter-spacing"],
answer: "letter-spacing"},
{ question: "Which CSS property is used to align text horizontally within its container?",
options: ["text-align", "vertical-align", "align-content", "align-items"],
answer: "text-align"},
{ question: "What is the correct syntax to apply a border to an element in CSS?",
options: ["border: 1px solid black;", "border-width: 1px; border-color: black;", "border-style: solid; border-width: 1px; border-color: black;", "border-color: black; border-style: solid; border-width: 1px;"],
answer: "border-style: solid; border-width: 1px; border-color: black;"}
,
{ question: "Which CSS property is used to make an element's text bold?",
options: ["font-style", "font-size", "font-weight", "text-decoration"],
answer: "font-weight"}
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
                } else {console.log("you lost time"); loseTime(5); generateQuiz(shuffledQuestions++)}
                };
            function scoreAnswer2() {
                if (answerButton2.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(shuffledQuestions++);
                 } else {console.log("you lost time"); loseTime(5); generateQuiz(shuffledQuestions++);}
                };
            function scoreAnswer3() {
                if (answerButton3.textContent === currentQuestion.answer) {console.log("You get a point");
                yourScore++;
                generateQuiz(shuffledQuestions++);
                 } else {console.log("you lost time"); loseTime(5); generateQuiz(shuffledQuestions++);}
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

// function for docing time for incorrect answer
function loseTime (time) {
    secondsLeft -= time;
}

// set duration of timer
var secondsLeft =  30;
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
//make empty string for initals 

function printResults() {
    saveBtn.setAttribute("style", "display: flex");
    restartBtn.setAttribute("style", "display: flex");
    var printSection = document.createElement("h1");
    // tell the new div what to say
    printSection.innerText = "Results";        
    // append the new div to the body of the HTML file
    document.body.children[2].appendChild(printSection);
    var printSection = document.createElement("p");        
    // tell the new div what to say
    printSection.innerText = "Your Score: " + yourScore;
    document.body.children[2].appendChild(printSection);
    // create an input for initals
    var initalsDiv = document.createElement("input");
    // add styling and placeholder to initals
    initalsDiv.setAttribute("placeholder", "Input Initals");  
    // we made the input in JS so we have to call it in HTML
    initalsDiv.classList.add('input');    
    // append initals input to reuslts section  
    printSection.appendChild(initalsDiv);
    // ooo add cute styling
    printSection.setAttribute("style", "display: flex; flex-direction: column; text-align: center; line-height: 3");
    // click save button and store initals/score as an object array in localStorage
    saveBtn.addEventListener("click", function() {
        var initalInput = document.querySelector('.input');
        var scoreObject = {
            inital: initalInput.value, 
            score: yourScore
        };
        highScoresArray.push(scoreObject);
        localStorage.setItem("highScores", JSON.stringify(highScoresArray));

        // updating high scores array 
        highScoresArray.sort(function(score1, score2) {
            // sorts from greatest to least
            return score2.score - score1.score
        })

    });
    
    printSection.innerHTML += `<p>${"High Scores"}</p>`
     // add to the HTML site without overriding
    for (var i = 0; i < highScoresArray.length; i++) {
        printSection.innerHTML += `<p class="list">${highScoresArray[i].score} ${highScoresArray[i].inital}</p>`
        };;

    restartBtn.setAttribute("style", "display: flex");
    // hide the start button
    startBtn.setAttribute("style", "display: none");
};

function restartPage() {
    yourScore = 0;
    secondsLeft = 30;
    startTimer();
    timerEl.setAttribute("style", "display: flex; align-items: flex-end");
    startQuiz();
    generateQuiz();
    resutsSection.innerHTML = "";
    resutsSection.style.display = "none";
    console.log("Page Restarted");
    startBtn.setAttribute("style", "display: none");
    restartBtn.setAttribute("style", "display: none");
    saveBtn.setAttribute("style", "display: none");
};



// localStorage adding total points

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", generateQuiz);
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartPage);