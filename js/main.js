// This file contains JavaScript code for interactivity on the website.

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-skill-level');
        bar.style.width = value;
    });
});