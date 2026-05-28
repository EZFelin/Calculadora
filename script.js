const btn = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
let firstnumber = 0;
let firstoperator = '';
let calculated = false;
function calculate(button) {
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
    if (button.textContent == '+') {
        firstoperator = "+";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    if (button.textContent == '-') {
        firstoperator = "-";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    if (button.textContent == '*') {
        firstoperator = "*";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    if (button.textContent == '/') {
        firstoperator = "/";
        firstnumber = display.textContent;
        display.textContent = '';
    }
    if (button.textContent == 'C') {
        display.textContent = '';
    }
    if (button.textContent == '1' || button.textContent == '2' || button.textContent == '3' || button.textContent == '4' || button.textContent == '5' || button.textContent == '6' || button.textContent == '7' || button.textContent == '8' || button.textContent == '9' || button.textContent == '0') {
        if (calculated) {
            display.textContent = '';
            calculated = false;
        }
        display.textContent += button.textContent;
    }
}

btn.forEach(button => {
    button.addEventListener('click', () => {
        calculate(button);
    });
});