import "./style.scss";

const $mobileSentry = document.querySelector("#mobile");
const $tabletSentry = document.querySelector("#tablet");
const $headerSentry = document.querySelector("#header");
const $stickerObserver = document.querySelector("#sticker-observer");
const $stickerStart = document.querySelector("#sticker-start");
const $stickerEnd = document.querySelector("#sticker-end");

const options = {
  threshold: 1
};

const mobileObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  // console.log({ isIntersecting });
}, options);

const tabletObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  // console.log({ isIntersecting });
}, options);

const headerObserver = new IntersectionObserver(entries => {
  const { isIntersecting } = entries[0];
  // console.log({ isIntersecting });
}, options);

const stickerObserver = new IntersectionObserver(
  entries => {
    console.log(entries);
    // const { isIntersecting } = entries[0];
    // console.log({ isIntersecting });
  },
  {
    root: $stickerStart,
    threshold: [1]
  }
);

const stickerObserver2 = new IntersectionObserver(
  entries => {
    console.log(entries);
    // const { isIntersecting } = entries[0];
    // console.log({ isIntersecting });
  },
  {
    root: $stickerObserver,
    threshold: 1
  }
);

console.log($stickerObserver);
console.log($stickerStart);

mobileObserver.observe($mobileSentry);
tabletObserver.observe($tabletSentry);
headerObserver.observe($headerSentry);
stickerObserver.observe($stickerObserver);
stickerObserver2.observe($stickerStart);
// stickerObserver.observe($stickerEnd);
// stickerObserver.observe($stickerSentry);
