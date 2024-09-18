// frontend/index.js
import { backend } from 'declarations/backend';

const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') return;
        firstOperand = parseFloat(currentInput);
        operator = button.dataset.op;
        currentInput = '';
    });
});

document.getElementById('equals').addEventListener('click', async () => {
    if (currentInput === '' || firstOperand === null || operator === null) return;
    const secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case 'add':
            result = await backend.add(firstOperand, secondOperand);
            break;
        case 'subtract':
            result = await backend.subtract(firstOperand, secondOperand);
            break;
        case 'multiply':
            result = await backend.multiply(firstOperand, secondOperand);
            break;
        case 'divide':
            result = await backend.divide(firstOperand, secondOperand);
            if (result === null) {
                display.value = 'Error';
                return;
            }
            break;
    }
    display.value = result;
    currentInput = '';
    firstOperand = null;
    operator = null;
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.value = '';
});
