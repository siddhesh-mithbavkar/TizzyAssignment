gsap.registerPlugin(ScrollTrigger);

function animateOnScroll(selector, animationOptions) {
  document.querySelectorAll(selector).forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      ...animationOptions,
    });
  });
}

function initAnimations() {
  animateOnScroll(".fade-up", { y: 50, opacity: 0, duration: 1 });
  animateOnScroll(".fade-down", { y: -50, opacity: 0, duration: 1 });
  animateOnScroll(".fade-left", { x: -50, opacity: 0, duration: 1 });
  animateOnScroll(".fade-right", { x: 50, opacity: 0, duration: 1 });
  animateOnScroll(".zoom-in", { scale: 0.8, opacity: 0, duration: 1 });
  animateOnScroll(".zoom-out", { scale: 1.2, opacity: 0, duration: 1 });
  animateOnScroll(".flip-left", { rotationY: -90, opacity: 0, duration: 1, transformOrigin: "left center" });
  animateOnScroll(".flip-right", { rotationY: 90, opacity: 0, duration: 1, transformOrigin: "right center" });
  animateOnScroll(".rotate-in", { rotation: -45, opacity: 0, duration: 1 });
}

function clearAnimations() {
  // Kill all ScrollTriggers and clear GSAP tweens to avoid memory leaks & unwanted animations on mobile
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.globalTimeline.clear();
  // Optionally clear inline styles if needed:
  gsap.utils.toArray(".fade-up, .fade-down, .fade-left, .fade-right, .zoom-in, .zoom-out, .flip-left, .flip-right, .rotate-in")
    .forEach(el => gsap.set(el, { clearProps: "all" }));
}

function handleAnimations() {
  if (window.innerWidth >= 768) {
    // Desktop: Initialize animations if not initialized
    if (ScrollTrigger.getAll().length === 0) {
      initAnimations();
    }
  } else {
    // Mobile: Clear animations
    clearAnimations();
  }
}

// Run once on page load
handleAnimations();

// Run on window resize (debounced)
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    handleAnimations();
  }, 150);
});
