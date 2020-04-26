const $$images = document.querySelectorAll("[loading='lazy']");

const lazyHandler = entries => {
  const { isIntersecting, target } = entries[0];
  const { src } = target.dataset;
  if (isIntersecting) {
    target.src = src;
    target.style.willChange = "transform, opacity";
    target.style.opacity = 0;
    lazyObserver.unobserve(target);
  }
};

const zoomHandler = entries => {
  const { isIntersecting, target } = entries[0];
  if (isIntersecting) {
    target.animate(
      [
        // { transform: "scale(5)", opacity: 0 },
        // { transform: "scale(1)", opacity: 1 }
        { transform: "translate3d(0,30px,0)", opacity: 0 },
        { transform: "translate3d(0,0,0)", opacity: 1 }
      ],
      {
        duration: 500,
        easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)"
      }
    ).onfinish = () => {
      target.style.willChange = "";
      target.style.opacity = "";
    };
    zoomObserver.unobserve(target);
  }
};

const lazyObserver = new IntersectionObserver(lazyHandler, {
  threshold: 0,
  rootMargin: "300px" // shorthand for 0px 0px 300px 0px as we only need it once
});

const zoomObserver = new IntersectionObserver(zoomHandler, {
  threshold: 0,
  rootMargin: "-100px" // shorthand for 0px 0px -100px 0px as we only need it once
});

$$images.forEach($image => {
  lazyObserver.observe($image);
  zoomObserver.observe($image);
});
