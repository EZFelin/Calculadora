const btn = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const equation = document.querySelector('.equation');
const result = document.querySelector('.result');

let firstnumber = 0;
let firstoperator = '';
let calculated = false;

function calculate(button) {
    // IGUAL
    if (button.textContent == '=') {
        calculated = true;
        let finalResult = 0;
        if (firstoperator == "+") {
            finalResult = parseFloat(firstnumber) + parseFloat(result.textContent);
            firstnumber = finalResult;
            result.textContent = finalResult;
        }
        if (firstoperator == "-") {
            finalResult = parseFloat(firstnumber) - parseFloat(result.textContent);
            firstnumber = finalResult;
            result.textContent = finalResult;
        } 
        if (firstoperator == "*") {
            finalResult = parseFloat(firstnumber) * parseFloat(result.textContent);
            firstnumber = finalResult;
            result.textContent = finalResult;
        }
        if (firstoperator == "/") {
            finalResult = parseFloat(firstnumber) / parseFloat(result.textContent);
            firstnumber = finalResult;
            result.textContent = finalResult;
        }
        equation.textContent = firstnumber + " " + firstoperator + " " + result.textContent;
        result.textContent = finalResult;
        equation.textContent = '';
        firstoperator = '';
    }
if (
    button.textContent == '+' ||
    button.textContent == '-' ||
    button.textContent == '*' ||
    button.textContent == '/'
) {

    // SE JÁ EXISTE OPERAÇÃO
    if (firstoperator != '' && result.textContent != '') {

        if (firstoperator == "+") {
            firstnumber =
                parseFloat(firstnumber) +
                parseFloat(result.textContent);
        }

        if (firstoperator == "-") {
            firstnumber =
                parseFloat(firstnumber) -
                parseFloat(result.textContent);
        }

        if (firstoperator == "*") {
            firstnumber =
                parseFloat(firstnumber) *
                parseFloat(result.textContent);
        }

        if (firstoperator == "/") {
            firstnumber =
                parseFloat(firstnumber) /
                parseFloat(result.textContent);
        }

        result.textContent = firstnumber;
    }

    // PRIMEIRA OPERAÇÃO
    else {

        firstnumber = result.textContent;

    }

    firstoperator = button.textContent;

    equation.textContent =
        firstnumber + " " + firstoperator;

    result.textContent = '';
}
    // LIMPAR O DISPLAY
    if (button.textContent == 'C') {
        result.textContent = '';
        equation.textContent = '';
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
            result.textContent = '';
            equation.textContent = '';

            calculated = false;
        }
        // EVITA QUE TENHA MAIS DE UM PONTO
        if (
            button.textContent == '.' &&
            result.textContent.includes('.')
        ) {
            return;
        }
        result.textContent += button.textContent;
    }
}
btn.forEach(button => {
    button.addEventListener('click', () => {
        calculate(button);
    });
});