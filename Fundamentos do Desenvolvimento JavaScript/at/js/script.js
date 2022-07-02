const images = {
    "amber-ale": ["./img/hop_badge.svg", "./img/amber-ale.svg"],
    "belgian-ale": ["./img/hop_badge.svg", "./img/belgian.svg"],
    "blanche-beer": ["./img/hop_badge.svg", "./img/blanche.svg"],
    "brown-ale": ["./img/hop_badge.svg", "./img/brown-ale.svg"],
    "lager": ["./img/hop_badge.svg", "./img/lager.svg"],
    "pale-ale": ["./img/hop_badge.svg", "./img/pale-ale.svg"],
    "pilsner": ["./img/hop_badge.svg", "./img/pilsner.svg"],
    "stout": ["./img/hop_badge.svg", "./img/stout.svg"]
};


function createHtmlElement(tag, parent, properties) {

    let htmlElement = document.createElement(tag);
    if (properties) {
        Object.entries(properties).forEach(([key, value]) => {
            htmlElement.setAttribute(key, value)
        });
    }
    if (parent) {
        parent.appendChild(htmlElement);
    }

    return htmlElement
};

function createCardBoard(boardContainer, imageList) {

    Object.entries(imageList).forEach(value => {

        for (let index = 0; index < 2; index++) {

            let pairOfCards = createHtmlElement('div', boardContainer, { 'class': 'card memory-card', 'data-framework': value[0] })
            let card = createHtmlElement('img', pairOfCards, { 'class': 'card-img front-face', 'src': value[1][1] })
            let crossCard = createHtmlElement('img', pairOfCards, { 'class': 'card-img back-face', 'src': value[1][0] })

        }
    });
};

let container = document.getElementById('container');
let titleBoard = createHtmlElement('section', container, { 'class': 'game-element' })
let cardBoard = createHtmlElement('section', container, { 'class': 'memory-game' })
let titleDiv = createHtmlElement('div', titleBoard, { 'class': 'section-title text-center' })
let titleTex = createHtmlElement('h1', titleDiv, {})
titleTex.innerText = "Beer Style Memory Game"
let board = createCardBoard(cardBoard, images);
let buttonSection = createHtmlElement('section', container, { 'class': 'game-element' })
let buttonDiv = createHtmlElement('div', buttonSection, {})
let startButton = createHtmlElement('button', buttonDiv, { 'class': 'btn btn-primary btn-lg btn-block', 'type': 'button', 'onClick': 'startGame()' })
startButton.innerText = "Start"


const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(checkMatch) {

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // second click
    secondCard = this;

    checkForMatch();
    setTimeout(() => {
        countMatched();
    }, 1500);
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function countMatched() {
    const matched = document.querySelectorAll('.memory-card.flip');
    console.log(matched);
    if (matched.length === 16) {
        alert("You win!!!");
        modalAlert();
        resetBoard();
    }
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

function startGame() {

    this.shuffle()

    cards.forEach(card => card.classList.add('flip'));

    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flip'));
    }, 3000);
}


cards.forEach(card => card.addEventListener('click', flipCard));

(
    function start() {
        startGame();
    }
)();