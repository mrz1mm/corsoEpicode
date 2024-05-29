document.addEventListener("DOMContentLoaded", () => {
  generateScoreboard(1, 90);
});

/* -------------------- DICHIARAZIONI -------------------- */
const scoreboardSection = document.querySelector("#scoreboard");
const actionsSection = document.querySelector("#actions");
const numberGenerator = document.querySelector("#numberGenerator");
const displayNumber = document.querySelector("#displayNumber");
const foldersGenerator = document.querySelector("#foldersGenerator");
const foldersSection = document.querySelector("#folders");

let generatedNumbers = [];

/* -------------------- FUNZIONI -------------------- */

/* --- tabellone ---- */
const generateScoreboard = (startNumber, endNumber) => {
  for (let i = startNumber; i <= endNumber; i++) {
    const cellNumberDiv = document.createElement("div");
    cellNumberDiv.classList.add("cellNumber");

    const cellNumberValue = document.createElement("p");
    cellNumberValue.classList.add("cellNumberValue");
    cellNumberValue.textContent = i;

    cellNumberDiv.appendChild(cellNumberValue);
    scoreboardSection.appendChild(cellNumberDiv);
  }
};

/* --- Numero casuale ---- */
const getRandomNumber = () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 90) + 1;
  } while (generatedNumbers.includes(randomNumber));

  generatedNumbers.push(randomNumber);
  displayNumber.textContent = randomNumber;
  associateNumber(randomNumber);
};

/* --- Numero estratto ---- */
const associateNumber = (randomNumber) => {
  const cellNumberValues = document.querySelectorAll(".cellNumberValue");
  cellNumberValues.forEach((p) => {
    const cellNumber = parseInt(p.textContent);
    if (cellNumber === randomNumber) {
      p.classList.add("out");
    }
  });
};

/* --- tabelline ---- */
const generateFolders = () => {
  const folderDiv = document.createElement("div");
  folderDiv.classList.add("folder");

  let startNumber = 1;
  let endNumber = 30;

  for (let i = startNumber; i <= endNumber; i++) {
    const randomNumber = Math.floor(Math.random() * 90) + 1;

    const cellNumberDiv = document.createElement("div");
    cellNumberDiv.classList.add("cellNumber");

    const cellNumberValue = document.createElement("p");
    cellNumberValue.classList.add("cellNumberValue");
    cellNumberValue.textContent = randomNumber;

    cellNumberDiv.appendChild(cellNumberValue);
    folderDiv.appendChild(cellNumberDiv);
  }

  foldersSection.appendChild(folderDiv);
};

/* -------------------- ADD EVENT LISTENER -------------------- */
numberGenerator.addEventListener("click", getRandomNumber);
foldersGenerator.addEventListener("click", generateFolders);
