window.addEventListener("DOMContentLoaded", (event) => {
  doughnutTimer();
  startQuiz();
});

/* ----- import ----- */
let desiredDifficulty = localStorage.getItem("desiredDifficulty");

/* ----- controlli ----- */
if (desiredDifficulty === null || undefined) {
  window.location.href = "welcomePage.html";
}

/* ----- cambia il logo ----- */
const logo = document.querySelector("header div img");
switch (desiredDifficulty) {
  case "easy":
    logo.src = "./assets/img/loghi/easyDifficulty.png";
    break;
  case "medium":
    logo.src = "./assets/img/loghi/mediumDifficulty.png";
    break;
  case "hard":
    logo.src = "./assets/img/loghi/hardDifficulty.png";
}

/* ----- domande ----- */
const quizQuestions = [
  {
    category: "One Piece",
    difficulty: "easy",
    question: "Qual è il nome del protagonista di One Piece?",
    answers: [
      { answerText: "Monkey D. Luffy", isCorrect: true },
      { answerText: "Roronoa Zoro", isCorrect: false },
      { answerText: "Nami", isCorrect: false },
      { answerText: "Rubber", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question: "Qual è il nome del pirata che ha trovato il One Piece?",
    answers: [
      { answerText: "Gol D. Roger", isCorrect: true },
      { answerText: "Edward Newgate", isCorrect: false },
      { answerText: "Shanks", isCorrect: false },
      { answerText: "Donquijote Doflamingo", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question: "Qual è il nome del primo arco narrativo di One Piece?",
    answers: [
      { answerText: "Arco di Romance Dawn", isCorrect: true },
      { answerText: "Arco di Alabasta", isCorrect: false },
      { answerText: "Arco di Marineford", isCorrect: false },
      { answerText: "Arco di Dressrosa", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question: "Qual è il nome del grande Ammiraglio della Marina?",
    answers: [
      { answerText: "Sengoku", isCorrect: true },
      { answerText: "Garp", isCorrect: false },
      { answerText: "Aokiji", isCorrect: false },
      { answerText: "Smoker", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question: "Qual è il nome della prima spada di Roronoa Zoro?",
    answers: [
      { answerText: "Wado Ichimonji", isCorrect: true },
      { answerText: "Sandai Kitetsu", isCorrect: false },
      { answerText: "Shusui", isCorrect: false },
      { answerText: "Yubashiri", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question:
      "Qual è il nome dell'isola dove Luffy ha iniziato la sua avventura?",
    answers: [
      { answerText: "Foosha", isCorrect: true },
      { answerText: "Dressrosa", isCorrect: false },
      { answerText: "Alabasta", isCorrect: false },
      { answerText: "Marineford", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question: "Qual è il soprannome di Usopp?",
    answers: [
      { answerText: "Sogeking", isCorrect: true },
      { answerText: "Scoppa", isCorrect: false },
      { answerText: "Zopp", isCorrect: false },
      { answerText: "Bopp", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question:
      "Qual è il nome della prima nave dei Pirati di Cappello di Paglia in One Piece?",
    answers: [
      { answerText: "Going Merry", isCorrect: true },
      { answerText: "Thousand Sunny", isCorrect: false },
      { answerText: "Red Force", isCorrect: false },
      { answerText: "Oro Jackson", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question: "Qual è il nome del padre di Portuguese D. Ace?",
    answers: [
      { answerText: "Gol D. Roger", isCorrect: true },
      { answerText: "Monkey D. Garp", isCorrect: false },
      { answerText: "Edward Newgate", isCorrect: false },
      { answerText: "Donquijote Doflamingo", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "easy",
    question: "In che modo Zoro ha perso l'occhio sinistro?",
    answers: [
      { answerText: "Durante uno scontro con Dracule Mihawk", isCorrect: true },
      {
        answerText: "Durante uno scontro con Donquijote Doflamingo",
        isCorrect: false,
      },
      {
        answerText: "Durante uno scontro con Monkey D. Luffy",
        isCorrect: false,
      },
      { answerText: "Durante uno scontro con Arlong", isCorrect: false },
    ],
  },

  {
    category: "One Piece",
    difficulty: "medium",
    question:
      "Qual è il soprannome di Shanks, uno dei pirati più potenti e rispettati del mondo di One Piece?",
    answers: [
      { answerText: "Shanks il Rosso", isCorrect: true },
      { answerText: "Kaido", isCorrect: false },
      { answerText: "Big Mom", isCorrect: false },
      { answerText: "Marshall D. Teach", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question:
      "Chi è il direttore di Impel Down, la prigione di massima sicurezza nel mondo di One Piece?",
    answers: [
      { answerText: "Magellan", isCorrect: true },
      { answerText: "Hannyabal", isCorrect: false },
      { answerText: "Sadi-chan", isCorrect: false },
      { answerText: "Shiryu", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question: "Qual è il nome del fratello di Monkey D. Luffy?",
    answers: [
      { answerText: "Portuguese D. Ace", isCorrect: true },
      { answerText: "Sabo", isCorrect: false },
      { answerText: "Trafalgar D. Water Law", isCorrect: false },
      { answerText: "Edward Newgate", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question:
      "Qual è il nome del famoso cuoco che ha viaggiato con la ciurma del Cappello di paglia?",
    answers: [
      { answerText: "Sanji", isCorrect: true },
      { answerText: "Zeff", isCorrect: false },
      { answerText: "Vinsmoke Judge", isCorrect: false },
      { answerText: "Donquijote Doflamingo", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question:
      "Qual è il nome dell'ammiraglio della Marina che ha un frutto del diavolo del tipo del ghiaccio?",
    answers: [
      { answerText: "Aokiji", isCorrect: true },
      { answerText: "Kizaru", isCorrect: false },
      { answerText: "Fujitora", isCorrect: false },
      { answerText: "Akainu", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question:
      "Qual è il nome del pirata che ha lasciato tre cicatrici sul viso di Shanks il Rosso?",
    answers: [
      { answerText: "Marshall D. Teach", isCorrect: true },
      { answerText: "Eustass Kid", isCorrect: false },
      { answerText: "Trafalgar D. Water Law", isCorrect: false },
      { answerText: "Capone Bege", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question:
      "Qual è il nome dell'isola dove si svolge il famoso torneo Corrida Colosseum?",
    answers: [
      { answerText: "Dressrosa", isCorrect: true },
      { answerText: "Punk Hazard", isCorrect: false },
      { answerText: "Zou", isCorrect: false },
      { answerText: "Whole Cake Island", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question: "Qual è il nome del capo della flotta dei Pirati di Big Mom?",
    answers: [
      { answerText: "Charlotte Linlin", isCorrect: true },
      { answerText: "Charlotte Katakuri", isCorrect: false },
      { answerText: "Charlotte Cracker", isCorrect: false },
      { answerText: "Charlotte Smoothie", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question:
      "Quale dei seguenti ammiragli non ha partecipato alla guerra per la supremazia di Marineford?",
    answers: [
      { answerText: "Fujitora", isCorrect: true },
      { answerText: "Kizaru", isCorrect: false },
      { answerText: "Akainu", isCorrect: false },
      { answerText: "Garp", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "medium",
    question: "Qual è il nome del braccio destro di Gol D. Roger?",
    answers: [
      { answerText: "Silvers Rayleigh", isCorrect: true },
      { answerText: "Scopper Gaban", isCorrect: false },
      { answerText: "Buggy il Clown", isCorrect: false },
      { answerText: "Crocus", isCorrect: false },
    ],
  },

  {
    category: "One Piece",
    difficulty: "hard",
    question: "Qual è il nome dell'isola in cui è stato trovato il One Piece?",
    answers: [
      { answerText: "Raftel", isCorrect: true },
      { answerText: "Mariejois", isCorrect: false },
      { answerText: "Skypiea", isCorrect: false },
      { answerText: "Sabaody", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question: "Qual è il soprannome di Buggy?",
    answers: [
      { answerText: "Il Clown", isCorrect: true },
      { answerText: "Il Distruttore", isCorrect: false },
      { answerText: "Il Taglialegna", isCorrect: false },
      { answerText: "Il Magnifico", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question:
      "Qual è il nome del frutto del diavolo che ha mangiato Monkey D. Luffy?",
    answers: [
      { answerText: "Gom Gom", isCorrect: true },
      { answerText: "Fuwa Fuwa", isCorrect: false },
      { answerText: "Gura Gura", isCorrect: false },
      { answerText: "Bara Bara", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question:
      "Qual è il nome dell'arcipelago sotto il controllo della famiglia Charlotte?",
    answers: [
      { answerText: "Tottoland", isCorrect: true },
      { answerText: "Wano", isCorrect: false },
      { answerText: "Dressrosa", isCorrect: false },
      { answerText: "Alabasta", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question:
      "Qual è il nome del comandante della prima flotta di Barbabianca?",
    answers: [
      { answerText: "Marco", isCorrect: true },
      { answerText: "Vista", isCorrect: false },
      { answerText: "Blamenco", isCorrect: false },
      { answerText: "Rakuyo", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question: "Qual è il nome del più grande spadaccino del mondo?",
    answers: [
      { answerText: "Dracule Mihawk", isCorrect: true },
      { answerText: "Don Krieg", isCorrect: false },
      { answerText: "Trafalgar D. Water Law", isCorrect: false },
      { answerText: "Zoro", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question: "Qual è il nome dell'isola abitata da una razza di uomini-pesce?",
    answers: [
      { answerText: "Fishman Island", isCorrect: true },
      { answerText: "Amazon Lily", isCorrect: false },
      { answerText: "Zou", isCorrect: false },
      { answerText: "Punk Hazard", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question: "Qual è il nome del padre di Monkey D.Luffy?",
    answers: [
      { answerText: "Moneky D.Dragon", isCorrect: true },
      { answerText: "Marshall D.Teach", isCorrect: false },
      { answerText: "Monkey D.Garp", isCorrect: false },
      { answerText: "Rocks D.Xebec", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question: "Qual è il nome del capitano dei Pirati del Sole?",
    answers: [
      { answerText: "Fisher Tiger", isCorrect: true },
      { answerText: "Jimbei", isCorrect: false },
      { answerText: "Arlong", isCorrect: false },
      { answerText: "Shirahoshi", isCorrect: false },
    ],
  },
  {
    category: "One Piece",
    difficulty: "hard",
    question: "Chi uccide Portuguese D.Ace?",
    answers: [
      { answerText: "Sakazuki", isCorrect: true },
      { answerText: "Katakuri", isCorrect: false },
      { answerText: "Rob Lucci", isCorrect: false },
      { answerText: "Kaido", isCorrect: false },
    ],
  },
];

/* ----- timer ----- */
const timerDiv = document.querySelector("#timerDiv");
const timer = document.querySelector("#timer");

let countdown = 10;
let timerID;

function startTimer() {
  clearInterval(timerID);
  timerID = setInterval(() => {
    countdown--;
    updateTimer();
    doughnutTimer();
    if (countdown <= 0) {
      disableButton();
      goNextPage();
    }
  }, 1000); // 1000 millisecondi = 1 secondo
}

function resetTimer() {
  clearInterval(timerID);
  countdown = 10;
  updateTimer();
  doughnutTimer();
  startTimer();
}

function updateTimer() {
  timer.textContent = countdown;
}

function endTimer() {
  clearInterval(timerID);
  countdown = 0;
  timer.textContent = "";
}

/* ----- test ----- */
const body = document.querySelector("body");
const main = document.querySelector("main");
const question = document.querySelector("#question");
const answerDiv = document.querySelector("#answerDiv");
const counterQuestion = document.querySelector("#counterQuestion");
const playAgainButton = document.querySelector(".playAgainButton");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
const filteredQuestions = quizQuestions.filter(
  (question) => question.difficulty === desiredDifficulty
);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  const oldPlayAgainButton = document.querySelector(".playAgainButton");
  if (oldPlayAgainButton) {
    oldPlayAgainButton.remove();
  }

  resetState();
  resetTimer();
  shuffledQuestions = shuffle(filteredQuestions);
  showQuestions();
}

function showQuestions() {
  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;

  question.innerHTML = questionNumber + ". " + currentQuestion.question;

  answerDiv.innerHTML = "";
  const shuffledAnswers = shuffle(currentQuestion.answers);

  shuffledAnswers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer.answerText;
    answerButton.classList.add("answer");
    answerDiv.appendChild(answerButton);
    if (answer.isCorrect) {
      answerButton.isCorrect = answer.isCorrect;
    }
    answerButton.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrectAnswer = selectedButton.isCorrect === true;

  if (isCorrectAnswer) {
    selectedButton.classList.add("correctAnswer");
    score++;
  } else {
    selectedButton.classList.add("wrongAnswer");
  }

  disableButton();
  goNextPage();
}

function resetState() {
  answerDiv.innerHTML = "";
}

function goNextPage() {
  currentQuestionIndex++;
  if (currentQuestionIndex < filteredQuestions.length) {
    clearInterval(timerID);
    setTimeout(() => {
      resetTimer();
      showQuestions();
    }, 1000);
  } else {
    localStorage.removeItem("desiredDifficulty");
    let filteredQuestionsLenght = filteredQuestions.length;
    localStorage.setItem("score", score);
    localStorage.setItem("filteredQuestionsLenght", filteredQuestionsLenght);
    window.location.href = "showScore.html";
  }
}

function disableButton() {
  document
    .querySelectorAll(".answer")
    .forEach((button) => (button.disabled = true));
}

/* ----- mescola l'array ----- */
function shuffle(array) {
  const shuffledArray = [];
  const tempArray = [...array]; // copio l'array

  while (tempArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    const randomElement = tempArray.splice(randomIndex, 1)[0]; // Rimuoviamo e otteniamo l'elemento casuale dall'array temporaneo
    // array.splice(start, deleteCount)
    shuffledArray.push(randomElement);
  }
  return shuffledArray;
}

/* ----- doughnut ----- */
let timerChart = new Chart("timerChart", {
  type: "doughnut",
  data: {
    labels: ["Tempo rimanente", "Tempo trascorso"],
    datasets: [
      {
        backgroundColor: ["#B98D5A", "#00000000"],
        borderColor: "rgba(0, 0, 0, 0)",
        data: [0, 0],
      },
    ],
  },
  options: {
    title: { display: false },
    cutoutPercentage: 75,
    legend: { display: false },
    animation: {
      animateRotate: false,
      animateScale: false,
    },
    events: [],
    radius: 100,
  },
});

function doughnutTimer() {
  const timeDiff = 10 - countdown;
  timerChart.data.datasets[0].data = [countdown, timeDiff];
  timerChart.update();
}
