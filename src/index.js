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

    document.addEventListener('DOMContentLoaded', function () {
        // Find the button element
        const jumpButton = document.getElementById('header-link');

        // Add a click event listener to the button
        jumpButton.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default behavior of the anchor link

            // Get the target section's ID from the button's href attribute
            const targetId = this.getAttribute('href').substring(1);

            // Find the target section
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate the target position
                const targetPosition = targetSection.offsetTop;

                // Scroll to the target position smoothly
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });