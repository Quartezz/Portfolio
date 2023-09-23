import handleScroll from "./handleScroll"

window.addEventListener("scroll", handleScroll);

const scrollToTopButton = document.getElementById('back-to-top');

    scrollToTopButton.addEventListener('click', () => {
        // Scroll to the top of the page with a smooth animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });