const NUM_OF_DIVS = 16 * 16;

const num = document.getElementById("num");
num.addEventListener("click", (event) => {
  let squares = prompt("Enter number of squares: ", "");

  if (isNaN(squares)) {
    alert("Input is not a number.");
    return;
  }

  if (parseInt(squares) <= 0) {
    alert("Input too small. Enter a number higher than 0.");
    return;
  }

  if (parseInt(squares) > 100) {
    alert("Input too large. Enter a number less than 100.");
    return;
  }
});

const parent = document.getElementById("container");
for (let i = 0; i < NUM_OF_DIVS; i++) {
  const div = document.createElement("div");
  div.classList = "box";
  div.textContent = "";
  parent.appendChild(div);

  div.addEventListener("mouseenter", (event) => {
    div.style.backgroundColor = "black";
  });
}
