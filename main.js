// LAKERS 2019-20 GAME STATS ASGN (2D)

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'display-all') {
        outputEl.innerHTML = 'Display All';
    } else if (selection == 'display-opponent') {
        outputEl.innerHTML = 'Display Opponent';
    } else if (selection == 'display-random') {
        outputEl.innerHTML = 'Display Random';
    } else if (selection == 'wins-losses') {
        outputEl.innerHTML = 'Wins & Losses';
    } else if (selection == 'game-stats') {
        outputEl.innerHTML = 'Game Stats';
    } else if (selection == 'add-game') {
        outputEl.innerHTML = 'Add Game';
    } else if (selection == 'remove-games') {
        outputEl.innerHTML = 'Remove Games';
    }
}