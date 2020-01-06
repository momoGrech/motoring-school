const question = document.getElementById("question");
//converting choices to array
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const restrictionSign = document.querySelector('.restriction-sign')


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let QuestionCounter = 0;
let availableQuestions = [];

let questions = [
    {
      "question": "You need to use your mobile phone while riding, you can do so only?",
      "choice1": "Once you have stopped in a safe place",
      "choice2": "Once you are riding into secondary roads ",
      "choice3": "Once you are riding into a motorway",
      "choice4": "If you feel that your balance will not be effected by the use of the phone ",
      "answer": 1
    },
    {
      "question": "You should always check your (life saver) blind spots before",
      "choice1": "Slowing down ",
      "choice2": "Applying the brakes",
      "choice3": "Changing gears",
      "choice4": "Moving off",
      "answer": 4
    },
    {
      "question": "To overtake safely which one of the following applies?",
      "choice1": "Steer around the vehicle sharply ",
      "choice2": "Get in close behind before you move out",
      "choice3": "Cut back in sharply when you pass the vehicle ",
      "choice4": "Check the speed and position of the vehicle which is being overtaken ",
      "answer": 4
    },
    {
      "question": "You are approaching a road marking indicating a sharp turn, what should you do?",
      "choice1": "Keep the same speed",
      "choice2": "Reduce your speed when you are turning",
      "choice3": "Reduce your speed as you approach the bend ",
      "choice4": "Keep the same gear ",
      "answer": 3
    },
    {
      "question": "What is the meaning of this sign?",
      "choice1": "No entry",
      "choice2": "Waiting restrictions",
      "choice3": "National speed limit",
      "choice4": "School crossing patrol",
      "answer": 2
    },
    {
      "question": "Signals are normally given by direction indicators and",
      "choice1": "Brake lights",
      "choice2": "Interior lights",
      "choice3": "Fog lights",
      "choice4": "Side lights",
      "answer": 1
    },
    {
      "question": "To overtake safely which one of the following applies?",
      "choice1": "Steer around the vehicle sharply ",
      "choice2": "Get in close behind before you move out",
      "choice3": "Cut back in sharply when you pass the vehicle ",
      "choice4": "Check the speed and position of the vehicle which is being overtaken ",
      "answer": 4
    },
    {
      "question": "Who has priority at an unmarked crossroads?",
      "choice1": "No one",
      "choice2": "The driver who is going faster",
      "choice3": "The driver on the wider road",
      "choice4": "The driver of the larger vehicle",
      "answer": 1
    },
    {
      "question": "At a roundabout you should",
      "choice1": "Stop even when clear",
      "choice2": "Give way to traffic from the right",
      "choice3": "Give way to traffic from the other way",
      "choice4": "Give way to traffic from the left",
      "answer": 2
    },
    {
      "question": "Riding the motorcycle when you are feeling cold, could cause you to ",
      "choice1": "Be more alert",
      "choice2": "Be more relaxed",
      "choice3": "React more quickly",
      "choice4": "Lose concentration",
      "answer": 4
    },
  ]


// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;


startGame = () => {
    questionCounter = 0;
    score =0;
    availableQuestions = [...questions]
    getNewQuestion();
}


getNewQuestion = () => {

  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    //go to the end page
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/end.html')
  }

  //counting the questions
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`

  //progress bar full
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  //ژماریەکی راندەم لە ئیندێکسەکانی کوێسچن
  const questionIndex =  Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  //question: Refering to getElementBuId('question')
  //remember currentQuestion initially is questions!
  question.innerText = currentQuestion.question;

  if(question.innerText === "What is the meaning of this sign?") {
    restrictionSign.classList.remove('hide')
  } else {
    restrictionSign.classList.add('hide')
  }

  //  go through all choice-text
  choices.forEach(choice => {
  // get the value of dataset which is numbers from 1 to whatever...
      const number = choice.dataset['number'];
  // change innerText of choice-text to currentQuestion[the choice in questions + number of the question]
      choice.innerText = currentQuestion['choice' + number]
  });

  //remover the current question each time 
  availableQuestions.splice(questionIndex, 1);
  
  acceptingAnswers = true;
};


// e.target is the choice they clicked 
choices.forEach(choice => {
  choice.addEventListener('click', e => {

    //ignore the fact they clicked on it
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
   
    if (selectedAnswer == currentQuestion.answer) {
      incrementScore(CORRECT_BONUS);
    }

    console.log(currentQuestion.answer)

    getNewQuestion();
  });
});

incrementScore = num => {
  score += num;
  // scoreText.innerText = score;
};


startGame()



// choice.innerText = currentQuestion['choice' + number]


