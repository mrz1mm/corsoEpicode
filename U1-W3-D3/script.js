/* --- newTask ---- */
const addButton = document.querySelector("#newTask button");
const tasksUl = document.querySelector("#tasks");
const newTaskInput = document.querySelector("#newTaskInput");

addButton.addEventListener("click", addTask);
let count = 1;
/* -------------------- FUNZIONI -------------------- */
function addTask() {
  const taskText = newTaskInput.value;
  let countText = count + "° task: ";

  const newLi = document.createElement("li");
  const newDivContainer = document.createElement("div");
  const newP = document.createElement("p");
  const newButton = document.createElement("button");
  newButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

  newDivContainer.classList.add("backgroundCelestino", "borderClassic");
  newButton.classList.add("backgroundRed", "colorWhite");

  tasksUl.appendChild(newLi);
  newLi.appendChild(newDivContainer);
  newDivContainer.appendChild(newP);
  newDivContainer.appendChild(newButton);

  newP.textContent = countText + taskText;

  newTaskInput.value = ""; // Reset

  // delete button
  newButton.addEventListener("click", function () {
    tasksUl.removeChild(newLi);
  });

  // seen
  newDivContainer.addEventListener("click", function () {
    newDivContainer.classList.toggle("lineThrough");
  });

  count++;
}
