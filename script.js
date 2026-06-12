const redButton = document.getElementById("redButton");

redButton.addEventListener("click", () => {
  redButton.classList.add("is-pressed");

  setTimeout(() => {
    redButton.classList.remove("is-pressed");
  }, 180);
});