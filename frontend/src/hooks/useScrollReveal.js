import { useEffect } from "react";

/**
 * Observes all `.reveal`, `.reveal-x`, and `.reveal-scale` elements
 * and adds `.in-view` when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-x, .reveal-scale, .reveal-img");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}
