const $$sections = document.querySelectorAll("[data-section]");

const getNavLink = entry => {
  const {
    target: {
      dataset: { section }
    }
  } = entry;
  return document.querySelector(`[data-nav-link=${section}]`);
};

let currentEntry;
let nextEntry;

const sectionObserver = new IntersectionObserver(
  entries => {
    const interesectingEntry = entries.find(entry => entry.isIntersecting);
    if (interesectingEntry && !currentEntry) {
      currentEntry = interesectingEntry;
      getNavLink(currentEntry).classList.add("is-active");
    } else if (interesectingEntry && currentEntry) {
      nextEntry = interesectingEntry;
    } else if (!interesectingEntry) {
      getNavLink(currentEntry).classList.remove("is-active");
      getNavLink(nextEntry).classList.add("is-active");
      currentEntry = nextEntry;
    }
  },
  {
    rootMargin: "-70px 0px -70px 0px",
    threshold: 0
  }
);

$$sections.forEach($section => sectionObserver.observe($section));
