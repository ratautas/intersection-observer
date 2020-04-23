const $navSentry = document.querySelector("[data-nav-sentry]");
const $nav = document.querySelector("[data-nav]");

const navObserver = new IntersectionObserver(
  entries => {
    const { isIntersecting } = entries[0];
    $nav.classList[isIntersecting ? "remove" : "add"]("is-stuck");
  },
  { threshold: 1 }
);

navObserver.observe($navSentry);
