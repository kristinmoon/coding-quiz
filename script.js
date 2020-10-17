var timerEl = document.getElementById("countdown");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("score");
var timeLeft = 75;

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



// timer function
function countdown() {
  var timeLeft = 75;

  // use setInterval method to call a function to be executed every 1000ms
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft -= 1;
    }
    else {
      timerEl.textContent = "Timer: 0"
      clearInterval(timeInterval);
      //do something
    }
  }, 1000);
}

function startQuiz() {
  start.style.display = "none";
  countdown()
  renderQuestion();
  quiz.style.display = "block";
}

function scoreRender() {
  score.style.display = "block";
  // show form page to enter initials and score 
  score.textContent = "Your final score is " + timeLeft.value + "."
}




var lastQuestion = questions.length - 1;
var runningQuestion = 0;

// ask a question
function renderQuestion() {
  var q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}


// check answer
// if answer is incorrect, display incorrect and subtract 10_000ms from timer
// else, display correct and timer continues as is
function checkAnswer(answer) {
  if (answer !== questions[runningQuestion].correct) {
    display = "incorrect";
    timeLeft.value -= 10;
  } else {
    display = "correct!";
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    clearInterval(timeInterval)
    scoreRender();
  }
}






// //highscore
// var initials = document.querySelector("initials").value;
// var score = document.querySelector("score").value;

// if (initials === "") {
//   displayMessage("error", "Initials cannot be blank");
// } else {
//   displayMessage("success", "Score saved successfully");
// }

// // save initials and highscore to localStorage
// localStorage.setItem("initials", initials);
// localStorage.setItem("score"), score);



start.addEventListener("click", startQuiz);

