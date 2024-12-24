const getRandomColors = () => {
    const ratio = 0.618033988749895, hue = (Math.random() + ratio) % 1, sat = Math.random() * 85, light = Math.random() * 85;
    return { color: `hsl(${360 * hue},${sat}%,${light}%)`, oddColor: `hsl(${360 * hue},${sat}%,${light + 5}%)` };
  };
  
  const board = document.getElementById('board');
  const initSize = 3;
  let size = initSize, score = 0, maxScore = +localStorage.getItem('maxScore') || 0, clickAllowed = true;
  
  function createBoard(board, size) {
    const frag = document.createDocumentFragment(), { color, oddColor } = getRandomColors(), oddX = Math.ceil(Math.random() * size), oddY = Math.ceil(Math.random() * size);
    for (let i = 1; i <= size; i++) for (let j = 1; j <= size; j++) {
      const cell = document.createElement('button');
      cell.dataset.locX = i, cell.dataset.locY = j, cell.classList.add('box');
      cell.style.backgroundColor = i === oddX && j === oddY ? oddColor : color;
      if (i === oddX && j === oddY) cell.classList.add('odd-box');
      frag.appendChild(cell);
    }
    board.appendChild(frag);
    board.style.gridTemplateRows = board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }
  
  const shakeTheGrid = (cb) => {
    board.classList.add('shake');
    setTimeout(() => (board.classList.remove('shake'), cb()), 2000);
  };
  
  const updateScores = () => {
    if (score > maxScore) document.getElementById('maxScore').textContent = maxScore = score, localStorage.setItem('maxScore', maxScore);
    score = 0, document.getElementById('score').textContent = score;
  };
  
  document.addEventListener('click', (e) => {
    if (!clickAllowed || !e.target.classList.contains('box')) return;
    if (e.target.classList.contains('odd-box')) {
      board.innerHTML = '', document.getElementById('score').textContent = ++score, createBoard(board, ++size);
    } else {
      clickAllowed = false, document.querySelector('.odd-box').style.border = '2px solid red';
      shakeTheGrid(() => {
        updateScores(), board.innerHTML = '', size = initSize, createBoard(board, size), clickAllowed = true;
      });
    }
  });
  
  createBoard(board, size);
  document.getElementById('maxScore').textContent = maxScore;
  