// Funzioni
function appendNumber(number) {
    if (display.textContent.length > 10) return;
    currentInput += number;
    updateDisplay();
}

function updateDisplay() {
    if (currentInput) display.textContent = currentInput;
    else display.textContent = '0';
}

function clearDisplay() {
    
    display.classList.add('dissolve');

    
    setTimeout(() => {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay();
        display.classList.remove('dissolve'); 
    }, 600); 
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentInput = parseFloat(computation.toPrecision(10));
    operator = '';
    previousInput = '';
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function activateButton(button) {
    button.classList.add('active');

    setTimeout(() => {
        button.classList.remove('active');
    }, 100);
}

// Prendo tutti gli elementi
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const clear = document.getElementById("clear");
const result = document.getElementById("result");
const display = document.getElementById("display");
const multiplicator = document.getElementById("multiplicator");
const divisor = document.getElementById("divisor");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const dot = document.getElementById("dot");

let currentInput = "";
let operator = "";
let previousInput = "";

// Aggiungo gli eventi
one.addEventListener("click", () => { appendNumber('1'); activateButton(one) });
two.addEventListener("click", () => { appendNumber('2'); activateButton(two) });
three.addEventListener("click", () => { appendNumber('3'); activateButton(three) });
four.addEventListener("click", () => { appendNumber('4'); activateButton(four) });
five.addEventListener("click", () => { appendNumber('5'); activateButton(five) });
six.addEventListener("click", () => { appendNumber('6'); activateButton(six) });
seven.addEventListener("click", () => { appendNumber('7'); activateButton(seven) });
eight.addEventListener("click", () => { appendNumber('8'); activateButton(eight) });
nine.addEventListener("click", () => { appendNumber('9'); activateButton(nine) });
zero.addEventListener("click", () => { appendNumber('0'); activateButton(zero) });
dot.addEventListener("click", () => { appendNumber('.'); activateButton(dot) });
plus.addEventListener("click", () => setOperator('+'));
minus.addEventListener("click", () => setOperator('-'));
multiplicator.addEventListener("click", () => setOperator('*'));
divisor.addEventListener("click", () => setOperator('/'));
clear.addEventListener("click", clearDisplay);
result.addEventListener("click", () => {
    calculate();
    result.classList.add('rotating');
    setTimeout(() => {
        result.classList.remove('rotating'); 
    }, 600); 
});
