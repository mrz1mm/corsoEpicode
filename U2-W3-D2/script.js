const form = document.getElementsByTagName("form")[0];
const inputName = document.getElementById("inputName");
const saveButton = document.getElementsByTagName("button")[0];
const removeButton = document.getElementsByTagName("button")[1];
const counter = document.getElementById("counter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

saveButton.addEventListener("click", () => {
  const name = inputName.value;
  localStorage.setItem("name", name);
});

removeButton.addEventListener("click", () => {
  localStorage.removeItem("name");
});

let counterValue = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    counterValue++;
    updateCounter();
  }, 1000);
}

function updateCounter() {
  counter.textContent = counterValue;
  sessionStorage.setItem("counterValue", counterValue);
}

document.addEventListener("DOMContentLoaded", function () {
  startTimer();
});
