import isInViewport from "./isInViewport"

function handleScroll() {
    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('animate')) {
            element.classList.add('animate');
        }
    });
}

export default handleScroll;