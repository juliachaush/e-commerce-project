export function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100");
        entry.target.classList.remove("opacity-0");
      }
    });
  });

  document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
    observer.observe(element);
  });
}
