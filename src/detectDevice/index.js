const $mobileSentry = document.querySelector("#mobile");
const $tabletSentry = document.querySelector("#tablet");

const mobileObserver = new IntersectionObserver(
  entries => {
    const { isIntersecting } = entries[0];
    // console.log({ isIntersecting });
  },
  { threshold: 1 }
);

const tabletObserver = new IntersectionObserver(
  entries => {
    const { isIntersecting } = entries[0];
    // console.log({ isIntersecting });
  },
  { threshold: 1 }
);

mobileObserver.observe($mobileSentry);
tabletObserver.observe($tabletSentry);
