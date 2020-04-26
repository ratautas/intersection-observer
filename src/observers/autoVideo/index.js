const OPTIONS = { threshold: 1 };

const playHandler = entries => {
  const { isIntersecting, target } = entries[0];
  isIntersecting ? target.play() : target.pause();
};

const videoObserver = new IntersectionObserver(playHandler, OPTIONS);

document
  .querySelectorAll("video[autoplay]")
  .forEach($video => videoObserver.observe($video));
