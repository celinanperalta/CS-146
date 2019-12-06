// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    const hashval = el.getAttribute("href");
    const target = document.querySelector(hashval);

    if (target && hashval) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, null, hashval);
    }
  });
});
