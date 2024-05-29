const startWrapper = document.querySelector("#startWrapper");
const checkbox = document.querySelector("#checkbox");

/* ----- generazione dinamica ----- */
function createButtonGoDifficultyPage() {
  const goDifficultyPageButton = document.createElement("button");
  goDifficultyPageButton.id = "goDifficultyPage";
  goDifficultyPageButton.innerHTML = "PROCEDI!";
  startWrapper.appendChild(goDifficultyPageButton);
  goDifficultyPageButton.addEventListener("click", goNextPage);
}

/* ----- controlli ----- */
function goNextPage(event) {
  if (checkbox.checked === false) {
    alert("Devi accettare le condizioni!");
    event.preventDefault();
  } else if (checkbox.checked === true) {
    event.preventDefault();
    const welcomePageControl1 = "true";
    localStorage.setItem("welcomePageControl1", welcomePageControl1);
    window.location.href = "selectDifficulty.html";
  }
}

checkbox.addEventListener("change", function () {
  const goDifficultyPage = document.querySelector("#goDifficultyPage");
  if (checkbox.checked === true) {
    if (!goDifficultyPage) {
      createButtonGoDifficultyPage();
    } else if (goDifficultyPage && goDifficultyPage.style.display === "none") {
      goDifficultyPage.style.display = "block";
    }
  } else {
    if (goDifficultyPage) {
      goDifficultyPage.style.display = "none";
    }
  }
});
