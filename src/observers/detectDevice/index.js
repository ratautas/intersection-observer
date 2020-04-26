import "./style";

const OPTIONS = { threshold: 1 };

const $mobileSentry = document.querySelector("#mobile-sentry");
const $tabletSentry = document.querySelector("#tablet-sentry");

const mobileObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  document.body.classList[isIntersecting ? "remove" : "add"]("is-mobile");
}, OPTIONS);

const tabletObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  document.body.classList[isIntersecting ? "remove" : "add"]("is-tablet");
}, OPTIONS);

mobileObserver.observe($mobileSentry);
tabletObserver.observe($tabletSentry);
