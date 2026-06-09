const revealTargets = document.querySelectorAll(".feature-grid article, .snapshot-card, .workflow-list li");

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
