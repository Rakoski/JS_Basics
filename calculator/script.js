let currentDisplay = "";
let previousNum = "";
let displayElement = document.getElementById("displayNumber");
let previousOperationElement = document.getElementById("previous-operation")

function registerNumber(button) {
  let numberString = button.getAttribute("data-number");
  currentDisplay += numberString;
  displayElement.textContent = currentDisplay;
  if(isOperatorPresent()) {
    colocaEmCima(currentDisplay)
  }
};

function registerOperator(button) {
  if(currentDisplay != "") {
    if (isOperatorPresent() && ["+", "-", "*", "/"].includes(numberString)) {
      return;
    }  
    let operatorString = button.getAttribute("data-operator");
    currentDisplay += operatorString;
    displayElement.textContent = currentDisplay;
    colocaEmCima(currentDisplay)
  }
}

function isOperatorPresent() {
  const operators = ["+", "-", "*", "/"];
  for (i = 0; i < operators.length; i++) {
    if (currentDisplay.includes(operators[i])) {
      return true;
    }
  }
  return false;
};

function reset() {
  console.log(previousOperationElement.textContent, typeof previousOperationElement.textContent) 
  currentDisplay = "";
  displayElement.textContent = "";
  previousOperationElement.textContent = "";
};

function colocaEmCima(oqueColocar) {
  previousOperationElement.textContent = oqueColocar
};

function calculateExpression() {
  let expression = previousOperationElement.textContent
  var operands = expression.split(/[\+\-\*\/]/);
  var operators = expression.split(/[\d\.]+/).filter(Boolean);

  // Applying operators sequentially
  var result = parseFloat(operands[0]);
  for (var i = 0; i < operators.length; i++) {
    var operator = operators[i];
    var operand = parseFloat(operands[i + 1]);
    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        result /= operand;
        break;
    }
  }

  displayElement.textContent = result.toFixed(3);
}



