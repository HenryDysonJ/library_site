
const openForm = document.querySelector(".open-form");
const closeForm = document.querySelector(".close-form");
const form = document.querySelector(".fact-form");

openForm.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    closeForm.classList.remove("hidden");
    openForm.classList.add("hidden");
  }
});
closeForm.addEventListener("click", function () {
  if (!form.classList.contains("hidden")) {
    form.classList.add("hidden");
    closeForm.classList.add("hidden");
    openForm.classList.remove("hidden");
  }
});
