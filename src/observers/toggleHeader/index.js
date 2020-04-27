import "./style";

const OPTIONS = { threshold: 1 };

const $headerSentry = document.querySelector("#header-sentry");

const headerObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  document.body.classList[isIntersecting ? "remove" : "add"]("header-sticky");
}, OPTIONS);

headerObserver.observe($headerSentry);
