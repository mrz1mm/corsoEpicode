/* ----- import ----- */
const welcomePageControl1 = localStorage.getItem("welcomePageControl1");

/* ----- controlli ----- */
if (welcomePageControl1 === null || undefined) {
  window.location.href = "welcomePage.html";
}

/* ----- onload ----- */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#username").focus();
});

/* ----- array ----- */
const imageDifficulty = [
  {
    id: "easyImage",
    src: "./assets/img/selectDifficulty/easy.png",
    alt: "Luffy Bambino",
    caption: "Facile",
    href: "quiz.html",
  },
  {
    id: "mediumImage",
    src: "./assets/img/selectDifficulty/medium.png",
    alt: "Luffy Gear 2",
    caption: "Medio",
    href: "quiz.html",
  },
  {
    id: "hardImage",
    src: "./assets/img/selectDifficulty/hard.png",
    alt: "Luffy Gear 4",
    caption: "Difficile",
    href: "quiz.html",
  },
];

/* ----- seleziona difficoltà ----- */
function createImageElements() {
  const difficulties = ["easy", "medium", "hard"];
  const luffyImagesWrapper = document.querySelectorAll(".luffyImagesWrapper");

  if (luffyImagesWrapper.length === 0) {
    const selectDifficultyWrapper = document.querySelector(
      "#selectDifficultyWrapper"
    );

    /* ----- generazione dinamica ----- */
    imageDifficulty.forEach((image) => {
      let a = document.createElement("a");
      a.classList.add("luffyImagesWrapper");
      a.href = image.href;
      selectDifficultyWrapper.appendChild(a);
      a.addEventListener("click", attributeDifficulty);

      let figure = document.createElement("figure");
      a.appendChild(figure);

      let img = document.createElement("img");
      img.id = image.id;
      img.src = image.src;
      img.alt = image.alt;
      figure.appendChild(img);

      let figcaption = document.createElement("figcaption");
      figure.appendChild(figcaption);

      let p = document.createElement("p");
      p.textContent = image.caption;
      figcaption.appendChild(p);
    });
  }

  /* ----- assegnazione del livello di difficoltà ----- */
  const link = document.querySelectorAll("#selectDifficultyWrapper a");
  link.forEach((link, index) => {
    link.addEventListener("click", () => {
      localStorage.removeItem("welcomePageControl1");
      let desiredDifficulty = difficulties[index];
      localStorage.setItem("desiredDifficulty", desiredDifficulty);
      window.location.href = "quiz.html";
    });
  });
}

/* ----- dati utente ----- */
const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("keydown", (e) => {
  const usernameInputValue = usernameInput.value.trim();
  if (e.key === "Enter") {
    e.preventDefault();

    if (usernameInputValue === "") {
      alert("Compila il campo, muoviti.");
    } else {
      createImageElements();
      const username = usernameInput.value;
      localStorage.setItem("username", username);
    }
  }
});

/* ----- export ----- */
function attributeDifficulty() {
  let desiredDifficulty = difficulties[index];
  localStorage.setItem("desiredDifficulty", desiredDifficulty);
  window.location.href = "quiz.html";
}
