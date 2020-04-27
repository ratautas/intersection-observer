import "./style";

const OPTIONS = { threshold: 0 };

const $fetchSentry = document.querySelector("#fetch-sentry");
const $fetchPlaceholder = document.querySelector("#fetch-placeholder");
let isFetching = false;

const handleResponse = (posts, $sentry) => {
  isFetching = false;
  const $nodeToAppend = $fetchPlaceholder.cloneNode();
  $nodeToAppend.removeAttribute("id");
  posts.forEach(post => {
    $nodeToAppend.innerText = post.text;
    $fetchPlaceholder.parentNode.insertBefore($nodeToAppend, $fetchPlaceholder);
  });
  // re-check whether to re-emit callback:
  fetchObserver.unobserve($sentry);
  fetchObserver.observe($sentry);
};

const fetchData = $sentry => {
  isFetching = true;
  setTimeout(() => {
    fetch("api/posts.json")
      .then(response => response.json())
      .then(json => handleResponse(json, $sentry));
  }, 1000);
};

const fetchObserver = new IntersectionObserver(entries => {
  entries[0].isIntersecting && !isFetching && fetchData(entries[0].target);
}, OPTIONS);

fetchObserver.observe($fetchSentry);
