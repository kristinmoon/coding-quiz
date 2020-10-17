var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn")


// timer counts down from 75
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



// questions
var questions = [
  { q: "Commonly used data types DO NOT include:", ans: ["Strings", "Booleans", "Alerts", "Numbers"] },
  { q: "The condition in an if/else statement is enclosed within ____.", ans: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"] },
  { q: "Arrays in JavaScript can be used to store ____.", ans: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"] },
  { q: "String values must be enclosed within ____ when being assigned to variables.", ans: ["Commas", "Curly brackets", "Quotes", "Parentheses"] },
  { q: "A very useful tool used during development and debugging for printing content to the debugger is:", ans: ["JavaScript", "Terminal / Bash", "For loops", "Console.log"] }
];

// document.getElementById("startBtn").addEventListener("click", displayQuestion);

// function displayQuestion() {
//   var question = questions.pop();
//   if (question) {
//     var answer = confirm(question.q);
//     if (answer === question.ans) {
//       alert("Correct");
//     }
//     else {
//       alert("Wrong");
//     }
//   }
// };

var displayQuestion = function (event) {
  var question = questions.pop();
  var startingTitle = document.querySelector("#container");
  var newQuestion = document.createElement("div");
  newQuestion.className = "container";
  newQuestion.textContent =
    startingTitle.parentNode.replaceChild(newQuestion, startingTitle);
}

// displayQuestion();

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



startBtn.addEventListener("click", displayQuestion)
startBtn.onclick = countdown;


