let questionFiveContainer = document.getElementById('q5');

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

let firstSideLabel = createHtmlElement('label', questionFiveContainer, {'for': 'firstSide'});
firstSideLabel.innerText = "Primeiro lado";
let firstSide = createHtmlElement('input', questionFiveContainer, { 'id':'firstSide', 'class': 'input-text', 'type': 'number', 'placeholder': 'lado 1', 'required': 'true' });

let secondSideLabel = createHtmlElement('label', questionFiveContainer, {'for': 'secondSide'});
secondSideLabel.innerText = "Segundo lado";
let secondSide = createHtmlElement('input', questionFiveContainer, { 'id':'secondSide', 'class': 'input-text', 'type': 'number', 'placeholder': 'lado 2', 'required': 'true' });

let thirdSideLabel = createHtmlElement('label', questionFiveContainer, {'for': 'thirdSide'});
thirdSideLabel.innerText = "Terceiro lado";
let thirdSide = createHtmlElement('input', questionFiveContainer, { 'id':'thirdSide', 'class': 'input-text', 'type': 'number', 'placeholder': 'lado 3', 'required': 'true'});

let sidesButton = createHtmlElement('input', questionFiveContainer, { 'class': 'input-button', 'type': 'button', 'value': 'Calcular', 'onclick': 'triangleSideChecker()' });
let answerQ5Div = createHtmlElement('div', questionFiveContainer, {'id': 'answerQ5Div'})

function checkParameters() {

    let first = Number(firstSide.value);
    let second = Number(secondSide.value);
    let third = Number(thirdSide.value);

    if (!first) {
        alert("Por favor preencha o primeiro lado!");
        return false;
    } else if (first < 0 || second < 0 || third < 0) {
        alert("O valor do lado não pode ser zero!");
        return false;
    } else if (!second) {
        alert("Por favor preencha o segundo lado!");
        return false;
    } else if (!third) {
        alert("Por favor preencha o terceiro lado!");
        return false;
    } else {
        return true;
    }
}


function createAnswer(triangleType) {
    var selectedCheckerDiv = document.getElementById('answerQ5Div');
    selectedCheckerDiv.innerText = `Este triângulo é ${triangleType}.`

}

function triangleSideChecker() {

    let parameters = checkParameters();
    let lado1 = Number(firstSide.value);
    let lado2 = Number(secondSide.value);
    let lado3 = Number(thirdSide.value);
    let resposta = "";

    if(parameters) {
        if (lado1 == lado2 && lado2 == lado3) {
            resposta = "equilatero";
        } else {
            if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
                resposta = "escaleno";
            } else {
                resposta = "isosceles";
            }
        }
        
        createAnswer(resposta);
    };
  }