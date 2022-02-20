const changeColorButton = document.getElementById("changeColorButton");
const cancelChangeColor = document.getElementById("cancelChangeColor");
const box = document.getElementById("box");

changeColorButton.addEventListener("click", onChangeColorClick);
cancelChangeColor.addEventListener("click", onCancelChangeColorClick);

let timerId = 0;

function onChangeColorClick() {
  timerId = setTimeout(changeColor, 2000); //1000ms == 1 second
  changeColorButton.disabled = true;
}

function onCancelChangeColorClick() {
  clearTimeout(timerId);
  changeColorButton.disabled = false;
}

function changeColor() {
  changeColorButton.disabled = false;
  if (box.style.backgroundColor == "blue") {
    box.style.backgroundColor = "white";
  } else {
    box.style.backgroundColor = "blue";
  }
}
