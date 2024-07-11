let currentQuestion = 0;
let userAnswers = [];
const quizData = [
  {
    question: "What is the primary purpose of CSS?",
    options: [
      "Creating web pages",
      "Managing databases",
      "Styling web pages",
      "Writing poetry",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which property is used to change the text color in CSS?",
    options: [
      "font-color",
      "text-style",
      "color",
      "background-color",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Computer Style System",
      "Creative Styling Solution",
      "Content Style Sheet",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to control the spacing between elements?",
    options: [
      "spacing",
      "margin",
      "padding",
      "border",
    ],
    correctAnswer: 1,
  },
  {
    question: "In CSS, what does the 'Cascading' in 'Cascading Style Sheets' refer to?",
    options: [
      "Waterfall effect",
      "Inheritance of styles",
      "Dynamic styling",
      "Recursive rules",
    ],
    correctAnswer: 1,
  },

  // You can add more CSS-related questions here...
];

let backButton =document.getElementById('backButton');
const totalQuestions = quizData.length;
const quizContainer = document.querySelector('.quiz_area');
const answerContainer = document.querySelector('.answer_area');
const submitButton = document.querySelector('#submit_button');
const showAnswersButton = document.querySelector('#show_answers_button');
const spans = document.querySelectorAll('.spans span');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const resultsElement = document.querySelector('.results');
let timerInterval;

let time = 300; // 5 minutes

let secondsSpent = 0;
let minutesSpent = 0;

function startTimer() {
// Update the variables every second
timerInterval = setInterval(function () {
// Decrement the seconds
time--;
secondsSpent = time % 60;
minutesSpent = Math.floor(time / 60);

if (time <= 0) {
clearInterval(timerInterval);
// Handle the time-up event here, e.g., show a message or auto-submit the quiz
// For now, let's display "Time's up!" message.
resultsElement.innerHTML = "<span class='bad'>Time's up!</span>";
resultsElement.style.display = "block";
}

// Display the time in the count_down element with the correct format
document.querySelector('.count_down .seconds').innerHTML = (secondsSpent < 10 ? '0' : '') + secondsSpent;
document.querySelector('.count_down .minutes').innerHTML = (minutesSpent < 10 ? '0' : '') + minutesSpent;
}, 1000); // 1000 milliseconds = 1 second
}



function showQuestion() {
const currentQuestionData = quizData[currentQuestion];
quizContainer.innerHTML = `<h2>${currentQuestionData.question}</h2>`;

answerContainer.innerHTML = currentQuestionData.options
.map(
(option, index) =>
`<div class="answer">
<input type="radio" id="answer_${index + 1}" name="questions" value="${index}" ${
userAnswers[currentQuestion] === index ? 'checked' : ''
}>
<label for="answer_${index + 1}">${option}</label>
</div>`
)
.join('');

}

function nextQuestion() {
const selectedAnswer = document.querySelector('input[name="questions"]:checked');
if (!selectedAnswer) {
alert("Please select an answer.");
return;
}

userAnswers[currentQuestion] = parseInt(selectedAnswer.value);
currentQuestion++;

if (currentQuestion < totalQuestions) {
showQuestion();

} else {
submitButton.style.display = 'none';
showAnswersButton.style.display = 'block';
}
}

function submitQuiz() {
clearInterval(timerInterval);
let score = 0;
for (let i = 0; i < totalQuestions; i++) {
if (userAnswers[i] === quizData[i].correctAnswer) {
score++;
}
}




let quiz_app =document.getElementById('quiz_app')
let message, messageClass;
if (score === totalQuestions) {
    message = "Perfect!";
    quiz_app.style.backgroundColor = '#0080005e'
    messageClass = "perfect";
} else if (score >= totalQuestions / 2) {
    message = "You passed!";
    messageClass = "good";
    quiz_app.style.backgroundColor = '#0080005e'

} else {
  quiz_app.style.backgroundColor = '#ff00003d'
    message = "You failed.";
    messageClass = "bad";
}


resultsElement.innerHTML = `<span class="${messageClass}">${message}</span> You answered ${score} of ${totalQuestions} in   ${4-minutesSpent}   :  ${60-secondsSpent} seconds on this quiz.`;
resultsElement.style.display = "block";

}


function showAnswers() {
  // Clear the existing timer interval
  backButton.style.display = 'flex';
  console.log(backButton);
  clearInterval(timerInterval);
  time = 0;

  submitQuiz();

  answerContainer.style.display = 'none';
  showAnswersButton.style.display = 'none';

  const answersContainer = document.createElement('div');
  answersContainer.classList.add('answers-container');

  for (let i = 0; i < totalQuestions; i++) {
    const answerElement = document.createElement('div');
    answerElement.classList.add('answer');

    const correctAnswerIndex = quizData[i].correctAnswer;
    const correctAnswerText = quizData[i].options[correctAnswerIndex];

    const userAnswerIndex = userAnswers[i];
    const userAnswerText = quizData[i].options[userAnswerIndex];

    const isCorrect = userAnswerIndex === correctAnswerIndex;

    // Create a class name based on whether the answer is correct or wrong
    const answerClass = isCorrect ? 'correct-answer' : 'wrong-answer';
   
    answerElement.innerHTML = `
    <div>
      <p>Question ${i + 1}: ${quizData[i].question}</p>
      <p>Correct Answer: ${correctAnswerText}</p>
      <p class="answer-text ${answerClass}"> Your Answer: ${userAnswerText}</p>
    </div>
  `;
  
    answersContainer.appendChild(answerElement);
  }

  quizContainer.appendChild(answersContainer);
}




showQuestion();
startTimer();

submitButton.addEventListener('click', nextQuestion);
showAnswersButton.addEventListener('click', showAnswers);



backButton.addEventListener('click', () => {
window.location.href = '/exploreCourses/brefcard-b.html';
});
