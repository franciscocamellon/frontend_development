let questionFourContainer = document.getElementById('q4');

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

let quantityLabel = createHtmlElement('label', questionFourContainer, {});
quantityLabel.innerText = "Quantidade de números";
let numberQuantity = createHtmlElement('input', questionFourContainer, { 'type': 'number', 'placeholder': 'quantidade', 'required': 'true' });
let minValue = createHtmlElement('input', questionFourContainer, { 'type': 'number', 'placeholder': 'mínimo', 'required': 'true' });
let maxValue = createHtmlElement('input', questionFourContainer, { 'type': 'number', 'placeholder': 'máximo', 'required': 'true'});
let resultButton = createHtmlElement('input', questionFourContainer, { 'type': 'button', 'value': 'Calcular', 'onclick': 'calculateFactorial()' });