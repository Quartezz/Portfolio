import handleIntersection from "./handleIntersection";
const projectItems = document.querySelectorAll(".project");
const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.5, // Trigger when at least 50% of the element is in the viewport
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each project item
projectItems.forEach((item) => {
  observer.observe(item);
});
