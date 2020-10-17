var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("start");







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



// questions
var myQuestions = [
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    answers: {
      a: "Quotes",
      b: "Curly brackets",
      c: "Parentheses",
      d: "Square brackets"
    },
    correctAnswer: "b"
  },
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      a: "Strings",
      b: "Booleans",
      c: "Alerts",
      d: "Numbers"
    },
    correctAnswer: "c"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: {
      a: "Numbers and strings",
      b: "Other arrays",
      c: "Booleans",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: {
      a: "Commas",
      b: "Curly brackets",
      c: "Quotes",
      d: "Parentheses"
    },
    correctAnswer: "c"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "JavaScript",
      b: "Terminal / Bash",
      c: "For loops",
      d: "Console.log"
    },
    correctAnswer: "d"
  }
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



startBtn.onclick = countdown;


