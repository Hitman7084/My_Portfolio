document.addEventListener('DOMContentLoaded', function () {
    // Fade in animation on page loading
    const container = document.querySelector('.container');
    container.style.opacity = 1;
});

const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++){
        const windowheight = window.innerHeight;
        const revealtop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
};

window.addEventListener('scroll', revealOnScroll);