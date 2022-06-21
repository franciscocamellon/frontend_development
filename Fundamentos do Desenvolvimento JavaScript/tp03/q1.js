let questionContainer = document.getElementById('q1');

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

let minInput = createHtmlElement('input', questionContainer, {'type':'number', 'placeholder':'minimo', 'required': 'true'});
let maxInput = createHtmlElement('input', questionContainer, {'type':'number', 'placeholder':'maximo', 'required': 'true'});
let calculateButton = createHtmlElement('input', questionContainer, {'type':'button', 'value':'Calcular', 'onclick':'calculate()'});

function createAnswer(min, max, listOfNumbersLength) {

    let answerDiv = createHtmlElement('div', questionContainer, {})
    answerDiv.innerText = `Existem ${listOfNumbersLength} números múltiplos de 2 e 3 entre ${min} e ${max}.`

}

function calculate() {

    var listOfNumbers = [];
    var min = Number(minInput.value) + 1;
    var max = Number(maxInput.value);
    
    for (min; min < max; min++) {
        console.log(min)
        if (min % 2 == 0 && min % 3 == 0) {
            listOfNumbers.push(min);
        }
    };
    createAnswer(minInput.value, maxInput.value, listOfNumbers.length)
    return listOfNumbers.length
    
};



