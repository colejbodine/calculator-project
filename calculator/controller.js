var calculator;

// setup variables and get a calculator instance
function CreateCalculator() {
    calculator = new Calculator();
    calculator.firstNumber = Number(document.getElementById("firstNumber").value);
    calculator.secondNumber = Number(document.getElementById("secondNumber").value);
}

// perform a calculation when the operator button is clicked
function calculate() {
    CreateCalculator();
    this.calculator.operator = getOperator();
    calculator.operate();
    updateResultText(calculator.value);
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    let resultText = document.getElementById("result");
    if (!calculator.attemptedDivideByZero) {
        resultText.innerHTML = `The result of ${calculator.getAction()} ${calculator.firstNumber} and ${calculator.secondNumber} is ${value}.`
    } else {
        resultText.innerHTML = "You can not divide by zero.";
    }
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("firstNumber").value = null;
    document.getElementById("secondNumber").value = null;
    document.getElementsByName('operation').checked = false;
    document.getElementById("firstNumber").focus();
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    return document.querySelector("input[name=operation]:checked").value;
}
