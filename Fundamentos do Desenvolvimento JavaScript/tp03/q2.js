let questionTwoContainer = document.getElementById('q2');

function createHtmlElement(tag, parent, properties) {

    let htmlElement = document.createElement(tag);
    if (properties) {
        Object.entries(properties).forEach(([key, value]) => {
            htmlElement.setAttribute(key, value)
        });
    }

    parent.appendChild(htmlElement);
    return htmlElement
};

let label = createHtmlElement('label', questionTwoContainer, {});
let factorialInput = createHtmlElement('input', questionTwoContainer, { 'type': 'number', 'placeholder': 'maximo', 'required': 'true' });
let factorialButton = createHtmlElement('input', questionTwoContainer, { 'type': 'button', 'value': 'Fatorial', 'onclick': 'calculateFactorial()' });

function createAnswer(number, factorial) {

    let answerDiv = createHtmlElement('div', questionTwoContainer, {})
    answerDiv.innerText = `O fatorial de ${number} é ${factorial}.`

}

function calculateFactorial() {
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

};
