const $fetchSentry = document.querySelector("#fetch-sentry");
const $fetchResult = document.querySelector("#fetch-result");
let isFetching = false;

const handleResponse = posts => {
  isFetching = false;
  const $nodeToAppend = $fetchResult.cloneNode();
  $nodeToAppend.removeAttribute("id");
  posts.forEach(post => {
    const $p = document.createElement("p");
    $p.innerText = post.text;
    $nodeToAppend.appendChild($p);
    $fetchResult.parentNode.insertBefore($nodeToAppend, $fetchResult);
  });
};

const fetchData = () => {
  isFetching = true;
  fetch("api/posts.json")
    .then(response => response.json())
    .then(json => handleResponse(json));
};

const fetchObserver = new IntersectionObserver(entries => {
  entries[0].isIntersecting && !isFetching && fetchData();
});

fetchObserver.observe($fetchSentry);
