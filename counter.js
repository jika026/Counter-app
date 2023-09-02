(() => {
  const buttons = document.querySelectorAll(".buttons");
  const counter = document.querySelector("#counter");
  let count = 0;
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("prevBtn")) {
        count--;
      } else if (button.classList.contains("addBtn")) {
        count++;
      } else if (button.classList.contains("reset")) {
        count = 0;
      }

      counter.textContent = count;
      if (count < 0) {
        counter.style.color = "red";
      } else if (count > 0) {
        counter.style.color = "green";
      } else {
        counter.style.color = "black";
      }
    });
  });
})();
