document.addEventListener('DOMContentLoaded', function () {
    // Typing animation for the Home section
    const typewriterElement = document.getElementById('typing');
    
    if (typewriterElement) {
        const text = typewriterElement.dataset.text || typewriterElement.textContent;
        typewriterElement.textContent = '';
    
        let index = 0;
        const typingSpeed = 100; // Set the typing speed here
    
        const typeEffect = () => {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, typingSpeed);
            }
        };
    
        typeEffect();
    }

    // Use IntersectionObserver for fade-in animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const sections = document.querySelectorAll('.container');
    sections.forEach(section => observer.observe(section));

});
