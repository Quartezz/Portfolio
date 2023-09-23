import isInViewport from "./isInViewport"

function handleScroll() {
    const animatedElement = document.querySelector('.project');
    if (isInViewport(animatedElement)) {
        animatedElement.classList.add('animate');
        // Remove the event listener after the animation has played once
        window.removeEventListener('scroll', handleScroll);
    }
}

export default handleScroll;