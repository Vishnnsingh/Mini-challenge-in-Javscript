const starCount = 5, smileys = ['😢', '😞', '😐', '😀', '😎'];
let rating = 0, filled = 0, unfilled = 0;

const starContainer = document.getElementById('starContainer');
const smileyContainer = document.getElementById('smileyContainer');

starContainer.appendChild(createElements(starCount, i => createElement('button', { class: 'star star-empty', 'data-index': i }), 1));
const stars = starContainer.querySelectorAll('.star');

starContainer.addEventListener('mouseover', hoverListener);
starContainer.addEventListener('mouseleave', leaveListener);
starContainer.addEventListener('click', clickListener);

function fillStars(count) {
  stars.forEach((star, i) => {
    star.classList.toggle('star-filled', i < count);
    star.classList.toggle('star-empty', i >= count);
  });
  filled = unfilled = count;
}

function clickListener(event) {
  if (event.target.classList.contains('star')) {
    rating = +event.target.dataset.index;
    fillStars(rating);
    setSmiley(rating);
  }
}

function hoverListener(event) {
  if (event.target.classList.contains('star')) fillStars(+event.target.dataset.index);
}

function leaveListener() { fillStars(rating); }

function setSmiley(rating) {
  smileyContainer.textContent = smileys[Math.ceil((smileys.length * rating) / starCount) - 1];
}

function createElement(type, properties) {
  const element = document.createElement(type);
  Object.entries(properties).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function createElements(count, fn, start = 0) {
  const fragment = document.createDocumentFragment();
  for (let i = start; i < count + start; i++) fragment.appendChild(fn(i));
  return fragment;
}

