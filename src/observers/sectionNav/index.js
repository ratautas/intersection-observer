const $$sections = document.querySelectorAll("[data-section]");

// const getNavLink = e => {
//   return document.querySelector(`[data-nav-link=${e.target.dataset.section}]`);
// };

let currentEntry;
let nextEntry;

const sectionObserver = new IntersectionObserver(
  entries => {
    const interesectingEntry = entries.find(entry => entry.isIntersecting);
    if (interesectingEntry) {
      if (currentEntry) {
        nextEntry = interesectingEntry;
      } else {
        currentEntry = interesectingEntry;
        // const $navLink = getNavLink(currentEntry);
        // const hash = $navLink.getAttribute("href");
        // $navLink.classList.add("is-active");
        // if (window.location.hash !== hash) {
        //   history.pushState({}, window.title, hash);
        // }
      }
    } else {
      // getNavLink(currentEntry).classList.remove("is-active");
      // getNavLink(nextEntry).classList.add("is-active");
      // const $navLink = getNavLink(nextEntry);
      // const hash = $navLink.getAttribute("href");
      // $navLink.classList.add("is-active");
      // if (window.location.hash !== hash) {
      //   history.pushState({}, window.title, hash);
      // }
      currentEntry = nextEntry;
    }
  },
  {
    rootMargin: "-70px 0px -70px 0px",
    threshold: 0
  }
);

$$sections.forEach($section => sectionObserver.observe($section));
