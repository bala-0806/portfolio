// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Example of interactivity: Alert when clicking on a project
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            alert(`You clicked on ${project.querySelector('h3').textContent}`);
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('popupMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
}
