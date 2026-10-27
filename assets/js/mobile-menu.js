
(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const currentScrollY = window.scrollY;

    if (window.innerWidth <= 768) {
      if (currentScrollY <= 80 || currentScrollY < lastScrollY) {
        header.classList.remove("header-hidden");
      } else if (currentScrollY > lastScrollY) {
        header.classList.add("header-hidden");
      }
    } else {
      header.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", updateHeader);
})();
