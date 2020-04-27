const APPEAR_OPTIONS = {
  threshold: 0,
  rootMargin: "-100px"
};

const LAZY_OPTIONS = {
  threshold: 0,
  rootMargin: "300px"
};

const $$images = document.querySelectorAll("[loading='lazy']");

// load src from [data-src] and prepare for animation
const lazyHandler = entries => {
  const { isIntersecting, target } = entries[0];
  const { src } = target.dataset;
  if (isIntersecting) {
    // .unobserve() cleanup to trigger only once:
    lazyObserver.unobserve(target);
    // add src from data attribute and initial styles
    target.src = src;
    target.style.willChange = "transform, opacity";
    target.style.opacity = 0;
  }
};

const appearHandler = entries => {
  const { isIntersecting, target } = entries[0];
  if (isIntersecting) {
    // .unobserve() cleanup to trigger only once:
    appearObserver.unobserve(target);
    // do teh animation:
    target.animate(
      [
        { transform: "translate3d(0,30px,0)", opacity: 0 },
        { transform: "translate3d(0,0,0)", opacity: 1 }
      ],
      {
        duration: 500,
        easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)"
      }
      // .onfinish style cleanup:
    ).onfinish = () => {
      target.style.willChange = "";
      target.style.opacity = "";
    };
  }
};

const lazyObserver = new IntersectionObserver(lazyHandler, LAZY_OPTIONS);
const appearObserver = new IntersectionObserver(appearHandler, APPEAR_OPTIONS);

$$images.forEach($image => {
  lazyObserver.observe($image);
  appearObserver.observe($image);
});
