"use strict";

const listContainer = document.querySelector(".list-todo");
const btnAdd = document.querySelector(".btn--add");
const inputEl = document.getElementById("add-text");
const btnDelete = document.querySelector(".btn--delete");

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const locale = navigator.language;
// const tasks = getLocalStorage()

const tasks = [];

class Task {
  date;
  text;
  id = (Date.now() + "").slice(-10);

  constructor(text) {
    this.text = text;
    this.date = new Intl.DateTimeFormat(locale, options).format(new Date());
  }
}

// const setLocalStorage = function (tasks) {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// const getLocalStorage = function () {
//   const data = JSON.parse(localStorage.getItem("tasks"));

//   return data;
//   // this.#workouts = data;

//   // this.#workouts.forEach(work => {
//   //   this._renderWorkout(work);
//   //   // this._renderWorkoutMarker(work) Nie działa bo mapa się wczytuje później niż chcemy ustawić znaczniki. Przenosimy to do metody, gdzie ładuje się mapa
//   // });
// };

const render = function (task) {
  const html = `<li class="list-item">
          <p class="item-text">${task.text}</p>
          <p class="item-date">Added on ${task.date}</p>
          <button class="btn btn--delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path
                d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
              ></path>
            </svg>
          </button>
        </li>`;
  listContainer.insertAdjacentHTML("beforeend", html);
};

const renderTasks = function () {
  //   const data = getLocalStorage();
  //   if (!data) return;

  tasks.forEach((task) => {
    render(task);
  });
};

renderTasks();

const reset = function () {
  //Metoda do resetowania wszystkich workouts
  localStorage.removeItem("workouts");
  location.reload(); //Automatyczne odświeżnie strony
};

listContainer.addEventListener("click", function (e) {
  const paragraph = e.target.closest(".item-text");

  if (!paragraph) return;

  paragraph.classList.toggle("crossed-out");
  const dateElement = paragraph.nextElementSibling;

  dateElement.textContent = `${
    paragraph.classList.contains("crossed-out") ? "Finished" : "Added"
  } on ${new Intl.DateTimeFormat(locale, options).format(new Date())}`;
});

btnAdd.addEventListener("click", function (e) {
  if (inputEl.value.length == 0) return;

  const newTask = new Task(inputEl.value);
  inputEl.value = "";
  //   const tasks = getLocalStorage();
  tasks.push(newTask);
  //   setLocalStorage(tasks);
  render(newTask);
  //   const html = `<li class="list-item">
  //           <p class="item-text">${newTask.text}</p>
  //           <p class="item-date">Added on ${newTask.date}</p>
  //           <button class="btn btn--delete">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 256 256"
  //             >
  //               <path
  //                 d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
  //               ></path>
  //             </svg>
  //           </button>
  //         </li>`;
  //   listContainer.insertAdjacentHTML("beforeend", html);
});

inputEl.addEventListener("keypress", function (e) {
  if (e.target.value.length != 0 && e.key === "Enter") {
    const newTask = new Task(inputEl.value);
    inputEl.value = "";

    const html = `<li class="list-item">
          <p class="item-text">${newTask.text}</p>
          <p class="item-date">Added on ${newTask.date}</p>
          <button class="btn btn--delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path
                d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
              ></path>
            </svg>
          </button>
        </li>`;
    listContainer.insertAdjacentHTML("beforeend", html);
  }
});
