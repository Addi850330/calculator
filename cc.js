const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function evil(fn) {
  return new Function("return " + fn)();
}

function calculator() {
  try {
    display.value = evil(display.value);
  } catch (err) {
    display.value = "Error";
  }
}

function square() {
  calculator();
  const number = display.value;
  display.value = number * number;
}

function sqrt() {
  calculator();
  const number = display.value;
  display.value = Math.sqrt(number);
}
function percent() {
  calculator();
  const number = display.value;
  display.value = number / 100;
}

function clearDisplay() {
  display.value = "";
}
