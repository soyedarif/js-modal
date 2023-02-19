"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const butttons = document.querySelectorAll(".show-modal");
butttons.forEach(button => {
  button.addEventListener("click", openModal);
});
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
