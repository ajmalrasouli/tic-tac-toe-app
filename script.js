const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const playerXScoreElement = document.getElementById('playerXScore');
const playerOScoreElement = document.getElementById('playerOScore');
const drawScoreElement = document.getElementById('drawScore');
let circleTurn;
let playerXScore = 0;
let playerOScore = 0;
let drawScore = 0;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  circleTurn = false;
  cells.forEach(cell => {
    cell.classList.remove(X_CLASS, CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove('show');
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
    if (currentClass === X_CLASS) {
      playerXScore++;
      playerXScoreElement.textContent = `Player X: ${playerXScore}`;
    } else {
      playerOScore++;
      playerOScoreElement.textContent = `Player O: ${playerOScore}`;
    }
  } else if ([...cells].every(cell => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS))) {
    endGame(true);
    drawScore++;
    drawScoreElement.textContent = `Draw: ${drawScore}`;
  } else {
    circleTurn = !circleTurn;
    setBoardHoverClass();
  }
}

function endGame(draw) {
  winningMessageTextElement.innerText = draw ? 'Draw!' : `${circleTurn ? "O's" : "X's"} Wins!`;
  winningMessageElement.classList.add('show');
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS, CIRCLE_CLASS);
  board.classList.add(circleTurn ? CIRCLE_CLASS : X_CLASS);
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => combination.every(index => cells[index].classList.contains(currentClass)));
}
