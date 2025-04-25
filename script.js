// script.js
let player1Health = 100;
let player2Health = 100;
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player1HealthBar = document.getElementById('player1-health');
const player2HealthBar = document.getElementById('player2-health');
const winnerMessage = document.getElementById('winner-message');
const restartButton = document.getElementById('restart-button');

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') movePlayer(player1, -10);
    if (event.key === 'd') movePlayer(player1, 10);
    if (event.key === 'w') attack(player1, player2);
    if (event.key === 'ArrowLeft') movePlayer(player2, -10);
    if (event.key === 'ArrowRight') movePlayer(player2, 10);
    if (event.key === 'ArrowUp') attack(player2, player1);
});

function movePlayer(player, distance) {
    const currentPosition = parseInt(player.style.left) || 0;
    player.style.left = Math.min(Math.max(currentPosition + distance, 0), 750) + 'px';
}

function attack(attacker, defender) {
    const attackerPosition = parseInt(attacker.style.left) || 0;
    const defenderPosition = parseInt(defender.style.left) || 0;
    if (Math.abs(attackerPosition - defenderPosition) < 50) {
        if (attacker === player1) {
            player2Health -= 10;
            player2HealthBar.style.width = player2Health + 'px';
        } else {
            player1Health -= 10;
            player1HealthBar.style.width = player1Health + 'px';
        }
        checkWinner();
    }
}

function checkWinner() {
    if (player1Health <= 0) {
        winnerMessage.innerText = 'Player 2 Wins!';
        winnerMessage.style.display = 'block';
        restartButton.style.display = 'block';
    } else if (player2Health <= 0) {
        winnerMessage.innerText = 'Player 1 Wins!';
        winnerMessage.style.display = 'block';
        restartButton.style.display = 'block';
    }
}

restartButton.addEventListener('click', () => {
    player1Health = 100;
    player2Health = 100;
    player1HealthBar.style.width = '100px';
    player2HealthBar.style.width = '100px';
    winnerMessage.style.display = 'none';
    restartButton.style.display = 'none';
});
