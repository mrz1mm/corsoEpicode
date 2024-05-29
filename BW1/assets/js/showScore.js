/* ----- import ----- */
const username = localStorage.getItem("username");
const score = localStorage.getItem("score");
const filteredQuestionsLenght = localStorage.getItem("filteredQuestionsLenght");

/* ----- controlli ----- */
window.addEventListener("DOMContentLoaded", () => {
  if (
    (username === null || undefined) &&
    (filteredQuestionsLenght === null || undefined) &&
    (score === null || undefined)
  ) {
    window.location.href = "welcomePage.html";
  }

  const rateUsButton = document.querySelector("#rateUsButton");
  rateUsButton.addEventListener("click", () => {
    localStorage.removeItem("score");
    localStorage.removeItem("filteredQuestionsLenght");
    const showScoreControl1 = true;
    localStorage.setItem("showScoreControl1", showScoreControl1);
    window.location.href = "rateUs.html";
  });
});

/* ----- assegnazione valori ----- */
const correctPercentage = document.querySelector(
  "#correctPercentageWrapper h2"
);
if (score == 0) {
  correctPercentage.innerHTML = "0%";
} else {
  correctPercentage.innerHTML = (score / filteredQuestionsLenght) * 100 + "%";
}

const correctAnswers = document.querySelector("#correctPercentageWrapper p");
correctAnswers.innerHTML = `${score} / ${filteredQuestionsLenght}`;

const wrongPercentage = document.querySelector("#wrongPercentageWrapper h2");
if (score == 0) {
  wrongPercentage.innerHTML = "100%";
} else if (score == 10) {
  wrongPercentage.innerHTML = "0%";
} else {
  wrongPercentage.innerHTML =
    ((filteredQuestionsLenght - score) / filteredQuestionsLenght) * 100 + "%";
}

const wrongAnswers = document.querySelector("#wrongPercentageWrapper p");
wrongAnswers.innerHTML = `${
  filteredQuestionsLenght - score
} / ${filteredQuestionsLenght}`;

const resultWrapperP = document.querySelector("#resultsWrapper p");
resultWrapperP.innerHTML = `Ciao ${username} questi sono i tuoi risultati:`;

/* ----- doughnut ----- */
const wrongAnswer = filteredQuestionsLenght - score;
const rightAnswer = score;

let scoreChart = new Chart("scoreChart", {
  type: "doughnut",
  data: {
    labels: ["Risposte sbagliate", "Risposte corrette"],
    datasets: [
      {
        backgroundColor: ["#470310", "#00755A"],
        borderColor: "rgba(0, 0, 0, 0)",
        data: [wrongAnswer, rightAnswer],
      },
    ],
  },
  options: {
    title: { display: false },
    cutoutPercentage: 60,
    legend: { display: false },
    circumference: 2 * Math.PI,
  },
});

function innerTextDoughnut() {
  switch (score) {
    case "0":
      return "Sei un aborto";
    case "1":
    case "2":
    case "3":
    case "4":
      return "Fai quasi schifo";
    case "5":
    case "6":
      return "Nè carne nè pesce";
    case "7":
    case "8":
      return "Azz allora qualcosa lo sai";
    case "9":
    case "10":
      return "Sei un drago";
  }
}

const scoreChartText = document.querySelector("#scoreChartText");
scoreChartText.innerText = innerTextDoughnut();
