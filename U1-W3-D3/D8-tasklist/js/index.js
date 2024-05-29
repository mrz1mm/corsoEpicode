document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => handleSubmit(e));
});

const handleSubmit = (e) => {
  e.preventDefault();
  addTask("#task");
  attachComplete();
  attachDelete();
};

function addTask(container) {
  let tasks = document.querySelector(container);
  let inputField = document.querySelector("#newTask input");
  let newTask = `
      <div class="task">
          <span id="taskname">
              ${inputField.value}
          </span>
          <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>
  `;
  tasks.innerHTML += newTask;
  inputField.value = "";
};

/*
const addTask = () => {
  let tasks = document.querySelector("#tasks");
  let inputField = document.querySelector("#newTask input");
  let newTask = `
      <div class="task">
          <span id="taskname">
              ${inputField.value}
          </span>
          <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>
  `;
  tasks.innerHTML += newTask;
  inputField.value = "";
};

const attachComplete = () => {
  let allTasks = document.querySelectorAll(".task");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("completed");
    });
  }
};

const attachDelete = function () {
  let allDeleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", (e) => {
      e.currentTarget.parentNode.remove();
    });
  }
};
