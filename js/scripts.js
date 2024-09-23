document.addEventListener('DOMContentLoaded', function () {
    // Typing animation for the Home section
    const typewriterElement = document.getElementById('typing');
    
    if (typewriterElement) {
        const text = typewriterElement.dataset.text || typewriterElement.textContent;
        typewriterElement.textContent = '';
    
        let index = 0;
    
        const typeEffect = () => {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        };
    
        typeEffect();
    }

    // Fade-in animations for About and Projects sections
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function activateSections() {
        const sections = document.querySelectorAll('.container');
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Initial activation on load and scroll
    window.addEventListener('scroll', activateSections);
    window.addEventListener('load', activateSections);
    activateSections(); // Run on page load
});
