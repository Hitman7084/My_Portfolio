document.addEventListener('DOMContentLoaded', function () {
    // Fade in animation on page loading
    const container = document.querySelector('.container');
    container.style.opacity = 1;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour: 'smooth'
        })
    })
})