// timer
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

document.getElementById("startBtn").addEventListener("click", displayQuestion);

function displayQuestion() {
  var question = questions.pop();
  if (question) {
    var answer = confirm(question.q);
    if (answer === question.ans) {
      alert("Correct");
    }
    else {
      alert("Wrong");
    }
  }
};

startBtn.onclick = countdown;



