const INITIAL_NUM = 16;
const hovers = new Map();

const parent = document.getElementById("container");

function createNew(num) {
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList = "box";
    div.style.setProperty("--squares", `${num}`);

    hovers.set(div, 0);
    parent.appendChild(div);

    div.addEventListener("mouseenter", (event) => {
      if (hovers.get(div) === 0) {
        let newRandomColor = Math.floor(Math.random() * 16777215).toString(16);
        div.style.backgroundColor = `#${newRandomColor}`;
        div.style.opacity = 0.1;
      } else {
        const currentOpacity = parseFloat(window.getComputedStyle(div).opacity);
        div.style.opacity = Math.min(currentOpacity + 0.1, 1);
      }

      hovers.set(div, hovers.get(div) + 1);
    });
  }
}

const choice = document.getElementById("choice");
choice.addEventListener("click", (event) => {
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

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  createNew(parseInt(squares));
});

createNew(INITIAL_NUM);
