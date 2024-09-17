document.addEventListener('DOMContentLoaded', function () {
    // Fade in animation on page loading
    const container = document.querySelector('.container');
    container.style.opacity = 1;
});

document.addEventListener('DOMContentLoaded', function () {
    const typewriterElement = document.getElementById('typing');
    
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
});