const btn = document.querySelectorAll('.btn');
const display = document.querySelector('.display');

let firstnumber = 0;
let firstoperator = '';
let calculated = false;

function calculate(button) {
    // IGUAL
    if (button.textContent == '=') {
        calculated = true;
        let result = '';
        if (firstoperator == "+") {
            result += parseFloat(firstnumber) + parseFloat(display.textContent);
            display.textContent = result;
        }
        if (firstoperator == "-") {
            result += parseFloat(firstnumber) - parseFloat(display.textContent);
            display.textContent = result;
        }   
        if (firstoperator == "*") {
            result += parseFloat(firstnumber) * parseFloat(display.textContent);
            display.textContent = result;
        }
        if (firstoperator == "/") {
            result += parseFloat(firstnumber) / parseFloat(display.textContent);
            display.textContent = result;
        }
    }
    // ADIÇÃO
    if (button.textContent == '+') {
        firstoperator = "+";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    // SUBTRAÇÃO
    if (button.textContent == '-') {
        firstoperator = "-";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    // MULTIPLICAÇÃO
    if (button.textContent == '*') {
        firstoperator = "*";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    // DIVISÃO
    if (button.textContent == '/') {
        firstoperator = "/";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    // LIMPAR O DISPLAY
    if (button.textContent == 'C') {
        display.textContent = '';
    }
    // NÚMEROS E PONTO
    if (button.textContent == '1' ||
        button.textContent == '2' ||
        button.textContent == '3' ||
        button.textContent == '4' ||
        button.textContent == '5' ||
        button.textContent == '6' ||
        button.textContent == '7' ||
        button.textContent == '8' || 
        button.textContent == '9' ||
        button.textContent == '0' ||
        button.textContent == '.') {
        if (calculated) {
            display.textContent = '';
            calculated = false;
        }
        // EVITA QUE TENHA MAIS DE UM PONTO
        if (
            button.textContent == '.' &&
            display.textContent.includes('.')
        ) {
            return;
        }
        display.textContent += button.textContent;
    }
}

btn.forEach(button => {
    button.addEventListener('click', () => {
        calculate(button);
    });
});