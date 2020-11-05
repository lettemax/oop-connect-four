import { Game } from './game.js';
let game;

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

})

