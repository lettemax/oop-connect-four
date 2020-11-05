import { Game } from './game.js';

let game;
const boardHolder = document.getElementById('board-holder');
const gameName = document.getElementById('game-name');
let clickTargets = document.getElementById('click-targets')

function updateUI() {

    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            let square = document.getElementById(`square-${i}-${j}`);
            let currentPlayer = game.getTokenAt()
            square.innerHTML = '';
            if(currentPlayer === 1){
                const blackSquare = document.createElement('div');
                blackSquare.classList.add('black', 'token')
            } else {
                const redSquare = document.createElement('div');
                redSquare.classList.add('red', 'token')
            }
        }
    }

    if (game === undefined) {
        boardHolder.classList.add('is-invisible');
    } else {
        boardHolder.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();
        let currentPlayer = game.currentPlayer;
        if (currentPlayer === 1) {
            clickTargets.classList.remove('black');
            clickTargets.classList.add('red');
        } else {
            clickTargets.classList.remove('red');
            clickTargets.classList.add('black');
        }
    }
}

window.addEventListener('DOMContentLoaded', event => {

    let newGame = document.getElementById('new-game');
    let p1Name = document.getElementById('player-1-name');
    let p2Name = document.getElementById('player-2-name');

    function canStartNewGame() {
        if (p1Name.value && p2Name.value) {
            newGame.disabled = false;
        }
    }

    p1Name.addEventListener('keyup', ev => {
        canStartNewGame()
    })

    p2Name.addEventListener('keyup', ev => {
        canStartNewGame()
    })

    newGame.addEventListener('click', ev => {
        game = new Game(p1Name.value, p2Name.value);
        p1Name.value = '';
        p2Name.value = '';
        newGame.disabled = true;
        updateUI();
    })

    clickTargets.addEventListener('click', event => {
        let num = Number.parseInt(event.target.id[event.target.id.length - 1]);
        game.playInColumn(num);
        updateUI();
    })

})

