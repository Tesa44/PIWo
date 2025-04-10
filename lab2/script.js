"use strict";

const listContainer = document.querySelector(".list-todo");
const btnAdd = document.querySelector(".btn--add");
const inputEl = document.getElementById("add-text");
const btnRestore = document.querySelector(".btn--restore");
const dateEls = document.querySelectorAll(".item-date");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const btnYes = document.querySelector(".btn--yes");
const btnNo = document.querySelector(".btn--no");
// Data format options
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
const locale = navigator.language;

let lastDeletedTask = null;
let currentTaskToDelete = null;
// Cross-out task, when click on it
listContainer.addEventListener("click", function (e) {
  const textEl = e.target.closest(".item-text");

  if (!textEl) return;

  const listEl = e.target.closest(".list-item");
  const dateEl = textEl.nextElementSibling;

  textEl.classList.toggle("crossed-out");
  listEl.classList.toggle("dim");
  dateEl.textContent = `${
    textEl.classList.contains("crossed-out") ? "Finished" : "Added"
  } on ${new Intl.DateTimeFormat(locale, options).format(new Date())}`;
});

// Add new task, when click "Add" button
btnAdd.addEventListener("click", function (e) {
  if (inputEl.value.length == 0) return;

  const html = `<li class="list-item">
            <p class="item-text">${inputEl.value}</p>
            <p class="item-date">Added on ${new Intl.DateTimeFormat(
              locale,
              options
            ).format(new Date())}</p>
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
  inputEl.value = "";
});

// Add new task, when hit enter on input field
inputEl.addEventListener("keypress", function (e) {
  if (e.target.value.length !== 0 && e.key === "Enter") {
    const html = `<li class="list-item">
          <p class="item-text">${inputEl.value}</p>
          <p class="item-date">Added on ${new Intl.DateTimeFormat(
            locale,
            options
          ).format(new Date())}</p>
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
    inputEl.value = "";
  }
});

// Delete task, when click Yes on modal
btnYes.addEventListener("click", function (e) {
  if (!currentTaskToDelete) return;

  currentTaskToDelete.remove();
  modal.classList.add("hidden");
  lastDeletedTask = currentTaskToDelete;
  currentTaskToDelete = null;
});

// Close modal, when click No on modal
btnNo.addEventListener("click", function (e) {
  modal.classList.add("hidden");
  currentTaskToDelete = null;
});

// Show modal, when click on red trash can
listContainer.addEventListener("click", function (e) {
  const btnDelete = e.target.closest(".btn--delete");

  if (!btnDelete) return;

  modal.classList.remove("hidden");
  const listEl = btnDelete.parentElement;
  currentTaskToDelete = listEl;
});

// Restore only last deleted task, when click on "Restore" button
btnRestore.addEventListener("click", function (e) {
  if (!lastDeletedTask) return;

  listContainer.insertAdjacentHTML("beforeend", lastDeletedTask.outerHTML);
  lastDeletedTask = null;
});

// Close modal, when click on span el "X"
closeModal.addEventListener("click", function (e) {
  modal.style.display = "none";
});

// Close modal, when click outside the modal
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Nothing important
dateEls.forEach(
  (el) =>
    (el.textContent = `Added on ${new Intl.DateTimeFormat(
      locale,
      options
    ).format(new Date())}`)
);

// Wszystkie treści zadań przedstawione na stronie zostały utworzone w celach humorystycznych i nie mają na celu urazić żadnego prowadzącego.
// Treści powstały we współpracy z ChatGPT, natomiast cały kod źródłowy został napisany wyłącznie przez autora.
