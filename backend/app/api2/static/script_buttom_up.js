// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code here

    // Example: Scroll to top button functionality
    const button = document.querySelector('.ec2');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
