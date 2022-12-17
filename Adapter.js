class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
    div(num1, num2) {
        return num1 / num2;
    }
    mult(num1, num2) {
        return num1 * num2;
    }
}

class CalculatorAdapter {
    constructor() {
        this.calculator = new Calculator();
    }
    operation(num1, num2, operation) {
        switch (operation) {
            case "add":
                return this.calculator.add(num1, num2);
            case "multiplication":
                return this.calculator.mult(num1, num2);
            case "division":
                return this.calculator.div(num1, num2);
            default:
                return NaN;
        }
    }
}

//Adapter
const calcAdapter = new CalculatorAdapter();
const sumAdapter = calcAdapter.operation(2, 2, "multiplication");
console.log(sumAdapter); 

//Calculator
const calculator = new Calculator();
const sum = calculator.mult(2, 2);
console.log(sum); 
