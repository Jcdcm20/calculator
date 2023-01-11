function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    switch(operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
    }
}

function updateDisplay(value) {
    displayValue += value;
    current.innerText = displayValue;
}

function clear() {
    displayValue = '';
    updateDisplay(displayValue);
}

const display = document.querySelector('.display');
const previous = display.querySelector('.previous');
const current = display.querySelector('.current');
let displayValue = '';
let firstOperand = '';
let operation;
let secondOperand = '';
const numbersButtons = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equals]');
const allClear = document.querySelector('[data-all-clear]');

numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        if (!operation) {
            firstOperand += value;
        } else {
            secondOperand += value;
        }
        updateDisplay(value)});
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operation = operator.textContent;
        updateDisplay(operation);
    })
})

allClear.addEventListener('click', () => {
    clear();
})

equals.addEventListener('click', () => {
    console.log(typeof operate(+firstOperand, operation, +secondOperand));
})

