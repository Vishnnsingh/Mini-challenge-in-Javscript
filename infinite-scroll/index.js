// HTML ELEMENTS
const container = document.querySelector('.post-container'),
  loader = document.querySelector('.loader'),
  endOfContentEl = document.querySelector('.end-of-content'),
  errorEl = document.querySelector('.fetch-error');

// LOCAL STATE
let startIndex = 0, endIndex = getNextPostsCount(startIndex), isFetching = false, isError = false, endOfContent = false, attempt = 0, MAX_RETRIES = 3;

function getNextPostsCount(start) {
  return start + Math.ceil(window.innerHeight / 90);
}

function addPosts(posts = []) {
  posts.forEach((post, i) => {
    const postContainer = document.createElement('div');
    postContainer.className = 'post';
    postContainer.innerHTML = `<span class="post-number">${startIndex + i + 1}</span><span class="post-body">${post.body}</span>`;
    container.appendChild(postContainer);
  });
}

const showEndContent = () => (endOfContentEl.style.display = 'block');
const toggleError = display => (errorEl.style.display = display);
const toggleLoader = status => (loader.style.display = status);

function fetchPostsApi(start, end) {
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`;
  isFetching = true; toggleError('none'); toggleLoader('block');
  setTimeout(async () => {
    try {
      const res = await fetch(url), posts = await res.json();
      if (posts.length < end - start) {
        endOfContent = true; toggleLoader('none'); posts.length && addPosts(posts); showEndContent();
      } else {
        addPosts(posts); startIndex = end; endIndex = getNextPostsCount(startIndex);
      }
      attempt = 0; isError = false;
    } catch (err) {
      console.log(err); attempt++;
      if (attempt > MAX_RETRIES) toggleError('block'), isError = true;
      else if (!document.getElementsByClassName('post').length) fetchPostsApi(start, end);
      toggleLoader('none');
    } finally {
      isFetching = false;
    }
  }, 500);
}

fetchPostsApi(startIndex, endIndex);

function checkAndGetPosts() {
  if (isFetching || endOfContent || isError) return;
  if (Math.ceil(window.innerHeight + window.scrollY) >= window.document.body.offsetHeight - 36) fetchPostsApi(startIndex, endIndex);
}

window.addEventListener('scroll', checkAndGetPosts);
window.addEventListener('resize', checkAndGetPosts);
