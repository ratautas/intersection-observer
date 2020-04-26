const playHandler = entries => {
  const { isIntersecting, target } = entries[0];
  isIntersecting ? target.play() : target.pause();
};

const videoObserver = new IntersectionObserver(playHandler, {
  threshold: 1
});

document
  .querySelectorAll("[playsinline]")
  .forEach($video => videoObserver.observe($video));
