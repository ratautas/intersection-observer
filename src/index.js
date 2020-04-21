import "./style.scss";

const $mobileSentry = document.querySelector("#mobile");
const $tabletSentry = document.querySelector("#tablet");
const $headerSentry = document.querySelector("#header");

const options = {
  threshold: 1
};

const mobileObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  console.log({ isIntersecting });
}, options);

const tabletObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  console.log({ isIntersecting });
}, options);

const headerObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  console.log({ isIntersecting });
}, options);

mobileObserver.observe($mobileSentry);
tabletObserver.observe($tabletSentry);
headerObserver.observe($headerSentry);
