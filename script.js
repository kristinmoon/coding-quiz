var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("start-btn");
var viewHighscoresBtn = document.getElementById("view-highscores");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("score");
var timeLeft = 50;
var formEl = document.getElementById("form");
var highscores = []
var highscoreDisplay = document.getElementById("highscore-display");
var quizComplete = document.getElementById("quiz-complete");
var goBackBtn = document.getElementById("go-back-btn");
var clearHighscoresBtn = document.getElementById("clear-highscores-btn");
var formBtn = document.getElementById("save-initials");
var highScoresTitle = document.getElementById("highscores-title");

// questions
var questions = [
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    choiceA: "Quotes",
    choiceB: "Curly brackets",
    choiceC: "Parentheses",
    choiceD: "Square brackets",
    correct: "B"
  },
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Alerts",
    choiceD: "Numbers",
    correct: "C"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choiceA: "Numbers and strings",
    choiceB: "Other arrays",
    choiceC: "Booleans",
    choiceD: "All of the above",
    correct: "D"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choiceA: "Commas",
    choiceB: "Curly brackets",
    choiceC: "Quotes",
    choiceD: "Parentheses",
    correct: "C"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "Terminal / Bash",
    choiceC: "For loops",
    choiceD: "Console.log",
    correct: "D"
  }
];


///////////////////////////////////
function viewHighscores() {
  start.style.display = "none";
  highscoreDisplay.style.display = "block";
}


///////////////////////////////////
function startQuiz() {
  start.style.display = "none";
  countdown()
  renderQuestion();
  quiz.style.display = "block";
}

/////////////////////////////////////
function goToStart() {
  highscoreDisplay.style.display = "none";
  start.style.display = "block";
}

///////////////////////////////////
//timer function
function countdown() {

  // use setInterval method to call a function to be executed every 1000ms
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft -= 1;
    }
    else {
      timerEl.textContent = "Timer: 0"
      clearInterval(timeInterval);
      //scoreRender()

    }
  }, 1000);
}


///////////////////////////////////
// ask a question
function renderQuestion() {
  var q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

var lastQuestion = questions.length - 1;
var runningQuestion = 0;


// check answer
// if answer is incorrect, display incorrect and subtract 10_000ms from timer
// else, display correct and timer continues as is
function checkAnswer(answer) {
  if (answer !== questions[runningQuestion].correct) {
    alert("incorrect");
    timeLeft = timeLeft - 10;
  } else {
    alert("correct!");
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    scoreRender();
    setTimeout(allQuestionsAnswered);

  }
}


// stop countdown after all questions have been answered
function allQuestionsAnswered() {
  clearTimeout(countdown);
}


///////////////////////////////////
function scoreRender() {
  quiz.style.display = "none";
  scoreDiv.style.display = "block";
  // show form page to enter initials and score 
  var scoreEl = document.createElement("div");
  scoreEl.innerHTML = "<p>Your final score is " + timeLeft + ".</p>"
  quizComplete.appendChild(scoreEl);
}

///////////////////////////////////
function populateStorage() {
  localStorage.setItem("highscore", timeLeft)
  localStorage.setItem("initials", document.querySelector("input[name='initials']").value)

  scoreDiv.style.display = "none";
  highscoreDisplay.style.display = "block";
}



///////////////////////////////////
function loadHighscores() {
  // get highscores from localStorage
  var highscoreEl = document.createElement("div");
  highscoreEl.innerHTML = "<p>" + localStorage.getItem("highscore") + ": " + localStorage.getItem("initials") + "</p>"
  highScoresTitle.appendChild(highscoreEl);
}


function clearHighscores() {
  Storage.clear();
}



startBtn.addEventListener("click", startQuiz);
formEl.addEventListener("submit", populateStorage);
viewHighscoresBtn.addEventListener("click", viewHighscores);
goBackBtn.addEventListener("click", goToStart);
clearHighscoresBtn.addEventListener("click", clearHighscores)
