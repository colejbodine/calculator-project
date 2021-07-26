class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {
        let action = null;
        switch(this.operator) {
            case "add":
                action = "adding";
                break;
            case "subtract":
                action = "subtracting";
                break;
            case "multiply":
                action = "multiplying";
                break;
            case "divide":
                action = "dividing";
                break;
            default:
                "adding";
                break;
        }
        return action;
    }

    // performa a calculation based on the currently selected operation
    operate() {
        switch(this.operator) {
            case "add":
                return this.add();
            case "subtract":
                return this.subtract();
            case "multiply":
                this.multiply();
            case "divide":
                return this.divide();
            default:
                return this.add();
        }
    }

    attemptedDivideByZero = false;

    // perform addition operation
    add() {
        this.value = this.firstNumber + this.secondNumber;
    }

    // perform subtraction operation
    subtract() {
        this.value = this.firstNumber - this.secondNumber;
    }

    // perform multiplication operation
    multiply() {
        this.value = this.firstNumber * this.secondNumber;
    }

    // perform divide operation
    divide() {
        if (this.secondNumber === 0) {
            this.attemptedDivideByZero = true;
        }
        if (!this.attemptedDivideByZero) {
            this.value = this.firstNumber / this.secondNumber;
        }
    }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
