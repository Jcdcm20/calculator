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
    display.innerText = displayValue;
}

function clear() {
    displayValue = '';
    updateDisplay(displayValue);
}

const display = document.querySelector('.display');
let displayValue = '';

const numbersButtons = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equals]');
const allClear = document.querySelector('[data-all-clear]');

numbersButtons.forEach(button => {
    button.addEventListener('click', () => {updateDisplay(button.textContent)});
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        updateDisplay(operator.textContent);
    })
})

allClear.addEventListener('click', () => {
    clear();
})