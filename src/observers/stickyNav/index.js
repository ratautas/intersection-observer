import "./style";

const OPTIONS = { threshold: 1 };

const $navSentry = document.querySelector("#nav-sentry");

const navObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  document.body.classList[isIntersecting ? "remove" : "add"]("nav-stuck");
}, OPTIONS);

navObserver.observe($navSentry);
