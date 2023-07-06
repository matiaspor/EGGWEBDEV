const terminalText = "Hola Mundo";
const textElement = document.querySelector(".text");

function typeText(index) {
  if (index <= terminalText.length) {
    textElement.textContent = terminalText.slice(0, index) + "_";
    setTimeout(() => typeText(index + 1), 150);
  } else {
    setTimeout(() => removeCursor(), 500);
  }
}

function removeCursor() {
  textElement.textContent = terminalText;
  setTimeout(() => addCursor(), 500);
}

function addCursor() {
  textElement.textContent = terminalText + "_";
  setTimeout(() => removeCursor(), 500);
}

typeText(0);
