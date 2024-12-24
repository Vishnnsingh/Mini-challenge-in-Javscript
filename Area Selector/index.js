const root = document.querySelector('.grid'), rows = window.innerHeight / 60 - 3, cols = window.innerWidth / 60 - 3, state = [];
const fragment = document.createDocumentFragment();
for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  state.push([]);
  for (let j = 0; j < cols; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.dataset.x = i;
    box.dataset.y = j;
    state[i].push(box);
    row.appendChild(box);
  }
  fragment.appendChild(row);
}
root.appendChild(fragment);

let x1, y1;
root.addEventListener('mousedown', e => e.target.classList.contains('box') && (x1 = e.target.dataset.x, y1 = e.target.dataset.y, markCells(x1, y1, x1, y1)));
root.addEventListener('mousemove', e => x1 && y1 && e.target.classList.contains('box') && (unmarkCells(), markCells(e.target.dataset.x, e.target.dataset.y)));
root.addEventListener('mouseup', clearAction);
root.addEventListener('mouseleave', clearAction);

function clearAction() { x1 = y1 = null; unmarkCells(); }
function markCells(x2, y2) {
  if (x1 && x2 && y1 && y2) {
    const [minRow, maxRow, minCol, maxCol] = [Math.min(x1, x2), Math.max(x1, x2), Math.min(y1, y2), Math.max(y1, y2)];
    for (let i = minRow; i <= maxRow; i++) for (let j = minCol; j <= maxCol; j++) state[i][j].style.backgroundColor = 'skyblue';
  }
}
function unmarkCells() {
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) state[i][j].style.backgroundColor = 'white';
}
