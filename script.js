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
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '÷':
            return divide(a, b);
    }
}

function updateDisplay(value) {
    displayValue += value;
    current.innerText = displayValue;
}

function clear() {
    displayValue = '';
    previous.innerText = '';
    firstOperand = '';
    operation = undefined;
    secondOperand;
    updateDisplay(displayValue);
}

function erase() {
    let temp = displayValue.slice(0, -1);
    displayValue = '';
    updateDisplay(temp);
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
const del = document.querySelector('[data-del]');

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
    previous.innerText = displayValue;
    displayValue = '';
    let result = operate(+firstOperand, operation, +secondOperand);
    updateDisplay(result);
    firstOperand = result;
    secondOperand = '';
    operation = undefined;
})

del.addEventListener('click', ()=> {
    erase();
})