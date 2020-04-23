const $headerSentry = document.querySelector("#header");

const headerObserver = new IntersectionObserver(
  entries => {
    const { isIntersecting } = entries[0];
    console.log({ isIntersecting });
  },
  { threshold: 1 }
);

headerObserver.observe($headerSentry);
