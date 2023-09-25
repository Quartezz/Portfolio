function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When a project item is in the viewport, add the 'animate' class
            entry.target.classList.add('animate');
        }
    });
}

export default handleIntersection;