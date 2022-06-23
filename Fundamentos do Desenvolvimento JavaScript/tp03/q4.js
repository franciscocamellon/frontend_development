let questionFourContainer = document.getElementById('q4');

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

let quantityLabel = createHtmlElement('label', questionFourContainer, {'for': 'quantity'});
quantityLabel.innerText = "Quantidade de números";
let numberQuantity = createHtmlElement('input', questionFourContainer, { 'id': 'quantity', 'class': 'input-text', 'type': 'number', 'placeholder': 'quantidade', 'required': 'true' });

let minLabel = createHtmlElement('label', questionFourContainer, {'for': 'minValue'});
minLabel.innerText = "Valor mínimo"
let minValue = createHtmlElement('input', questionFourContainer, { 'id': 'minValue', 'class': 'input-text', 'type': 'number', 'placeholder': 'mínimo', 'required': 'true' });

let maxLabel = createHtmlElement('label', questionFourContainer, {'for': 'maxValue'});
maxLabel.innerText = "Valor máximo"
let maxValue = createHtmlElement('input', questionFourContainer, { 'id': 'maxValue', 'class': 'input-text', 'type': 'number', 'placeholder': 'máximo', 'required': 'true'});

let resultButton = createHtmlElement('input', questionFourContainer, { 'class': 'input-button', 'type': 'button', 'value': 'Calcular', 'onclick': 'calculateRange()' });
let answerQ4Div = createHtmlElement('div', questionFourContainer, {'id': 'answerQ4Div'})

function checkParameters() {
    let min = Number(minValue.value);
    let max = Number(maxValue.value);
    let qtd = Number(numberQuantity.value);

    if (!qtd) {
        alert("Por favor preencha o campo de quantidade!");
        return false;
    } else if (qtd < 0) {
        alert("A quantidade não pode ser negativa!");
        return false;
    } else if (!min) {
        alert("Por favor preencha o campo de valor mínimo!");
        return false;
    } else if (!max) {
        alert("Por favor preencha o campo de valor máximo!");
        return false;
    } else if ((Math.abs(min) + Math.abs(max)) < qtd) {
        alert("A soma dos valores não pode ser menor que a quantidade!");
        return false;
    } else {
        return true;
    }
}

function createQ4Answer(min, max, quantity, array) {

    var selectedOrderedArrayDiv = document.getElementById('answerQ4Div');
    selectedOrderedArrayDiv.innerText = `O array ordenado de ${quantity} números entre ${min} e ${max} é [${array}].`

}

function getRandomIntInclusive(min, max) {
    var randomNumber;
    
    min = Math.ceil(Number(min.value));
    max = Math.floor(Number(max.value));
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function calculateRange() {

    let parameters = checkParameters();
    let length = numberQuantity.value;
    var arrayOfNumbers = [];

    if(parameters) {
        for (let index = 0; index < length; index++) {

            let number = getRandomIntInclusive(minValue, maxValue);
            console.log('number: ', number);

            if (arrayOfNumbers.includes(number)) {
                index--
            } else {
                arrayOfNumbers.push(number);
            } 
        }
        let orderedArray = arrayOfNumbers.slice().sort((a,b)=>a-b);
        createQ4Answer(minValue.value, maxValue.value, length, orderedArray)
        return orderedArray
    };
}