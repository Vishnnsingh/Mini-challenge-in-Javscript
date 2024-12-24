const gridSize = 8;
const board = document.querySelector('.board');
const moveType = 'bishop';

function resetChessGrid() {
  const elements = document.querySelector('.board')?.getElementsByClassName('selected');
  while (elements && elements.length > 0) {
    elements[0].classList.remove('selected');
  }
}

function onClick(event) {
  resetChessGrid();

  const element = event.target;
  if (element.classList.contains('box')) {
    const x = Number(element.dataset.x);
    const y = Number(element.dataset.y);

    if (moveType === 'bishop') {
      markBishopMoves(board, x, y, gridSize);
    }
  }
}

const boardFragment = createBoard(gridSize);
board.appendChild(boardFragment);
document.addEventListener('click', onClick);



function createBoard(rows, cols = rows) {
    const gridDocFragment = document.createDocumentFragment();
  
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('div');
      for (let j = 0; j < cols; j++) {
        const col = document.createElement('button');
        col.dataset.x = String(i);
        col.dataset.y = String(j);
        col.classList.add('box');
        row.appendChild(col);
      }
      gridDocFragment.appendChild(row);
    }
  
    return gridDocFragment;
  }
  
  function setColor(element) {
    if (element) {
      element.classList.add('selected');
    }
  }
  
  function getCell(board, x, y) {
    return board.querySelector(`[data-x='${x}'][data-y='${y}']`);
  }
  
  function markBishopMoves(board, x, y, size) {
    const cell = getCell(board, x, y);
    setColor(cell);
  
    for (let i = x - 1, offset = 1, col = y; i >= 0; i--, offset++) {
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col - offset}']`));
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col + offset}']`));
    }
  
    for (let i = x + 1, offset = 1, col = y; i < size; i++, offset++) {
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col - offset}']`));
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col + offset}']`));
    }
  }
  