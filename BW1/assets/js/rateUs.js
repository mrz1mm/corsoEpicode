/* ----- import ----- */
const username = localStorage.getItem("username");
const showScoreControl1 = localStorage.getItem("showScoreControl1");

/* ----- controlli ----- */
if (
  (username === null || undefined) &&
  (showScoreControl1 === null || undefined)
) {
  window.location.href = "welcomePage.html";
}

/* ----- generazione statica ----- */
const howDidItGoWrapperH1 = document.querySelector("#howDidItGoWrapper h1");
const howDidItGoWrapperP = document.querySelector("#howDidItGoWrapper p");
howDidItGoWrapperH1.innerHTML = `Hey ${username} com'è andata?`;
howDidItGoWrapperP.innerHTML = `E perchè daresti proprio 10?`;

/* ----- generazione dinamica ----- */
function createFeedbackPage() {
  const feedbackWrapper = document.createElement("div");
  feedbackWrapper.id = "feedbackWrapper";
  feedbackContainer.appendChild(feedbackWrapper);

  const feedbackForm = document.createElement("form");
  feedbackWrapper.appendChild(feedbackForm);

  const feedbackLabel = document.createElement("label");
  feedbackLabel.textContent = "Faccelo sapere con un commento";
  feedbackForm.appendChild(feedbackLabel);

  const feedbackInput = document.createElement("input");
  feedbackInput.type = "textarea";
  feedbackInput.name = "feedback";
  feedbackInput.placeholder = "Lascia un commento...";
  feedbackForm.appendChild(feedbackInput);
  feedbackInput.addEventListener("keydown", submitFeedback);

  const playItAgainWrapper = document.createElement("div");
  playItAgainWrapper.id = "playItAgainWrapper";
  feedbackContainer.appendChild(playItAgainWrapper);

  const playItAgainButton = document.createElement("button");
  playItAgainButton.textContent = "Gioca ancora";
  playItAgainWrapper.appendChild(playItAgainButton);
  playItAgainButton.addEventListener("click", goToSelectDifficulty);

  feedbackInput.focus();
}

/* ----- star rating system ----- */
const stars = document.querySelectorAll(
  "#starRatingWrapper .fa-fire-flame-curved"
);

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    if (!star.classList.contains("clicked")) {
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("hovered");
      }
    }
  });

  star.addEventListener("mouseout", () => {
    stars.forEach((star) => star.classList.remove("hovered"));
  });

  star.addEventListener("click", () => {
    const feedbackWrapper = document.querySelector("#feedbackWrapper");
    if (feedbackWrapper) {
      stars.forEach((star) => star.classList.remove("clicked"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("clicked");
      }
    } else {
      createFeedbackPage();
      stars.forEach((star) => star.classList.remove("clicked"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("clicked");
      }
    }
  });
});

/* ----- invio feedback ----- */
function submitFeedback(e) {
  const feedbackInput = e.target;
  const feedbackValue = feedbackInput.value.trim();
  if (e.key === "Enter") {
    e.preventDefault();

    if (feedbackValue === "") {
      alert("Compila il campo, muoviti.");
    } else {
      alert("Grazie per il tuo feedback!");
      sendFeedback();
    }
  }
}

function sendFeedback() {
  const feedbackInput = document.querySelector("#feedbackWrapper input");
  const feedbackValue = feedbackInput.value;
  const feedbackData = {
    username: username,
    data: new Date().toLocaleString(),
    rating: document.querySelectorAll(
      "#starRatingWrapper .fa-fire-flame-curved.clicked"
    ).length,
    message: feedbackValue,
  };
  console.log(feedbackData);
}

/* ----- gioca ancora ----- */
function goToSelectDifficulty() {
  localStorage.clear();
  const welcomePageControl1 = "true";
  localStorage.setItem("welcomePageControl1", welcomePageControl1);
  window.location.href = "selectDifficulty.html";
}
