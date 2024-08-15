document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset for header
                behavior: 'smooth'
            });
        });
    }

    // Form submission (this can be expanded to integrate with your backend)
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message sent! We will get back to you soon.');
        form.reset();
    });
});
