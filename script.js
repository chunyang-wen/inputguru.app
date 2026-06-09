const revealTargets = document.querySelectorAll(".feature-grid article, .workflow-list li");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.transitionDelay = `${Math.min(index * 20, 120)}ms`;
    observer.observe(target);
  });
}

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const viewport = carousel.querySelector(".carousel-viewport");
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".snapshot-slide"));
  const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
  const previous = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = 0;
  let timer;

  const centerSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
      dot.setAttribute("aria-selected", String(dotIndex === activeIndex));
    });

    const activeSlide = slides[activeIndex];
    const left = activeSlide.offsetLeft - (viewport.clientWidth - activeSlide.offsetWidth) / 2;
    viewport.scrollTo({
      left,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    });
  };

  const stopAutoAdvance = () => {
    window.clearInterval(timer);
  };

  const startAutoAdvance = () => {
    stopAutoAdvance();
    if (!prefersReducedMotion.matches) {
      timer = window.setInterval(() => centerSlide(activeIndex + 1), 2000);
    }
  };

  previous.addEventListener("click", () => {
    centerSlide(activeIndex - 1);
    startAutoAdvance();
  });

  next.addEventListener("click", () => {
    centerSlide(activeIndex + 1);
    startAutoAdvance();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      centerSlide(index);
      startAutoAdvance();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoAdvance);
  carousel.addEventListener("mouseleave", startAutoAdvance);
  carousel.addEventListener("focusin", stopAutoAdvance);
  carousel.addEventListener("focusout", startAutoAdvance);
  window.addEventListener("resize", () => centerSlide(activeIndex));
  window.addEventListener("load", () => centerSlide(activeIndex));

  requestAnimationFrame(() => {
    centerSlide(0);
    startAutoAdvance();
  });
}
