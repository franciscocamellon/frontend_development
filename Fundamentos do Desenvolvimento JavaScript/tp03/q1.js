let questionOneContainer = document.getElementById('q1');

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

let minValueLabel = createHtmlElement('label', questionOneContainer, {'for':'minimo'});
minValueLabel.innerText = "Valor mínimo";
let minInput = createHtmlElement('input', questionOneContainer, {'id': 'minimo', 'class': 'input-text', 'type':'number', 'placeholder':'minimo', 'required': 'true'});
let maxValueLabel = createHtmlElement('label', questionOneContainer, {'for':'maximo'});
maxValueLabel.innerText = "Valor máximo";
let maxInput = createHtmlElement('input', questionOneContainer, {'id': 'maximo', 'class': 'input-text', 'type':'number', 'placeholder':'maximo', 'required': 'true'});
let calculateButton = createHtmlElement('input', questionOneContainer, {'class': 'input-button', 'type':'button', 'value':'Calcular', 'onclick':'calculate()'});
let answerDiv = createHtmlElement('div', questionOneContainer, {'id': 'answerDiv'})

function createQ1Answer(min, max, listOfNumbersLength) {
    
    if (listOfNumbersLength > 0) {
        var selected = document.getElementById('answerDiv');
        selected.innerText = `Existem ${listOfNumbersLength} números múltiplos de 2 e 3 entre ${min} e ${max}.`
    } else {
        var selected = document.getElementById('answerDiv');
        selected.innerText = `Não existem números múltiplos de 2 e 3 entre ${min} e ${max}.`
    }
}

function checkParameters() {
    if (!minInput.value) {
        alert("Por favor preencha o campo de valor mínimo!");
        return false;
    } else if (!maxInput.value) {
        alert("Por favor preencha o campo de valor máximo!");
        return false;
    } else if (minInput.value > maxInput.value) {
        alert("O valor mínimo não pode ser maior que o valor máximo!");
        return false;
    } else {
        return true;
    }
}

function calculate() {

    let parameters = checkParameters();

    if(parameters) {
        var listOfNumbers = [];
        var min = Number(minInput.value) + 1;
        var max = Number(maxInput.value);
        
        for (min; min < max; min++) {
            console.log(min)
            if (min % 2 == 0 && min % 3 == 0) {
                listOfNumbers.push(min);
            }
        };
        createQ1Answer(minInput.value, maxInput.value, listOfNumbers.length)
        return listOfNumbers.length
    };

    
    
};



