const gridElement = document.getElementById('grid');

class TicTacToe {
  constructor(root, gridSize = 3) {
    this.gridSize = gridSize;
    this.root = root;
    this.grid = [];
    this.currentPlayer = 'X';
    this.winner = null;
    this.cellFilled = 0;
    this.root.appendChild(this.createGrid());
    this.grid = Array.from(this.root.children).reduce((grid, cell, idx) => {
      let row = Math.floor(idx / gridSize);
      if (!grid[row]) grid[row] = [];
      grid[row].push(cell);
      return grid;
    }, []);
    this.root.addEventListener('click', e => e.target.classList.contains('cell') && !this.winner && this.play(e.target));
  }

  createGrid() {
    return Array.from({ length: this.gridSize ** 2 }, (_, idx) => {
      let cell = document.createElement('button');
      cell.classList.add('cell');
      cell.dataset.x = Math.floor(idx / this.gridSize);
      cell.dataset.y = idx % this.gridSize;
      return cell;
    }).reduce((frag, cell) => (frag.appendChild(cell), frag), document.createDocumentFragment());
  }

  play(cell) {
    if (!cell.textContent) {
      this.grid[cell.dataset.x][cell.dataset.y].textContent = this.currentPlayer;
      this.cellFilled++;
      if (this.checkWinner()) this.endGame(this.currentPlayer);
      else if (this.cellFilled === this.gridSize ** 2) this.endGame('Draw');
      else this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  endGame(winner) {
    this.winner = winner;
    this.winnerCallback?.(winner);
  }

  checkWinner() {
    return (
      [...Array(this.gridSize).keys()].some(i => this.isWinner(this.grid[i]) || this.isWinner(this.grid.map(row => row[i]))) ||
      this.isWinner(this.grid.map((row, i) => row[i])) ||
      this.isWinner(this.grid.map((row, i) => row[this.gridSize - 1 - i]))
    );
  }

  isWinner(cells) {
    return cells.every(cell => cell.textContent === this.currentPlayer) && this.currentPlayer;
  }

  reset() {
    this.grid.flat().forEach(cell => (cell.textContent = ''));
    this.currentPlayer = 'X';
    this.winner = null;
    this.cellFilled = 0;
  }
}

const ticTacToe = new TicTacToe(gridElement);
ticTacToe.winnerCallback = winner => {
  document.getElementById('winner').textContent = winner === 'Draw' ? 'Draw!' : `Player ${winner} won!`;
};
document.getElementById('reset').addEventListener('click', () => {
  ticTacToe.reset();
  document.getElementById('winner').textContent = '';
});
