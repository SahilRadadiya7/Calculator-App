const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((element) => {
  element.addEventListener("click", (b) => {
    if (b.target.innerText == "=") {
      string = string == "" ? "error" : string;
      // string = string == "" ? "0" : string;

      try {
        string = String(eval(string));
        inputBox.value = string;
      } catch (error) {
        inputBox.value = "Error(Press C)";
      }
    } else if (b.target.innerText == "C") {
      string = "";
      inputBox.value = string;
    } else if (b.target.innerText == "☒") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else if (b.target.id == "plusMinus") {
      string = String(-eval(string));
      inputBox.value = string;
    } else {
      string += b.target.innerText;
      inputBox.value = string;
    }
  });
});

/*const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

function evaluateExpression() {
  try {
    const result = eval(expression);
    if (isNaN(result)) {
      throw new Error("Invalid expression");
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

function updateInputBox() {
  try {
    inputBox.value = evaluateExpression();
  } catch (error) {
    inputBox.value = "Error: " + error.message + ". Press C to clear.";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.innerText;
    switch (buttonText) {
      case "=":
        updateInputBox();
        break;
      case "C":
        expression = "";
        inputBox.value = "";
        break;
      case "☒":
        expression = expression.slice(0, -1);
        updateInputBox();
        break;
      case "plusMinus":
        expression = expression.startsWith("-")
          ? expression.slice(1)
          : "-" + expression;
        inputBox.value = expression;
        break;
      default:
        expression += buttonText;
        inputBox.value = expression;
    }
  });
});*/
