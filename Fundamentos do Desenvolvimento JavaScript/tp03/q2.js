let questionTwoContainer = document.getElementById('q2');

function createHtmlElement(tag, parent, properties) {
    let divContainer = document.createElement('div');
    let htmlElement = document.createElement(tag);
    if (properties) {
        Object.entries(properties).forEach(([key, value]) => {
            htmlElement.setAttribute(key, value)
        });
    }
    
    divContainer.appendChild(htmlElement);
    parent.appendChild(divContainer);
    return htmlElement
};

let label = createHtmlElement('label', questionTwoContainer, {'for': 'factorial'});
label.innerText = "Calcular o fatorial de"
let factorialInput = createHtmlElement('input', questionTwoContainer, { 'id': 'factorial', 'class': 'input-text', 'type': 'number', 'placeholder': 'número', 'required': 'true' });
let factorialButton = createHtmlElement('input', questionTwoContainer, { 'class': 'input-button', 'type': 'button', 'value': 'Fatorial', 'onclick': 'calculateFactorial()' });

function checkParameters() {
    if (!factorialInput.value) {
        alert("Por favor preencha o campo com um número!");
        return false;
    } else {
        return true;
    }
}

function createAnswer(number, factorial) {

    let answerDiv = createHtmlElement('div', questionTwoContainer, {})
    answerDiv.innerText = `O fatorial de ${number} é ${factorial}.`

}

function calculateFactorial() {

    let parameters = checkParameters();

    if(parameters) {
        var number = Number(factorialInput.value);
        let factorial = 1;
        if (number == 0 || number == 1) {
            createAnswer(number, factorial)
            return factorial;

        } else {
            for (var i = number; i >= 1; i--) {
                factorial = factorial * i;
            }
            createAnswer(number, factorial)
            return factorial;
        }
    }
};
