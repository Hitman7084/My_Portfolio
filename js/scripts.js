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

    const bubbles = document.querySelectorAll('.bubble');
    const scoreCounter = document.getElementById('score-counter');
    const popSound = document.getElementById('pop-sound'); // Get the pop sound element
    let score = 0;

    // Function to generate random sizes
    const generateRandomBubbleSize = (bubble) => {
        const randomSize = Math.floor(Math.random() * 50) + 50; // random size between 50px and 100px
        bubble.style.width = `${randomSize}px`;
        bubble.style.height = `${randomSize}px`;
    };

    // Function to play pop sound and animate popping effect
    const popBubble = (bubble) => {
        bubble.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; // random hex color

        // Play pop sound immediately
        if (popSound) {
            popSound.currentTime = 0; // Reset sound time to the beginning
            popSound.play(); // Play the sound
        }

        // Delay the pop animation slightly to sync with the sound
        setTimeout(() => {
            bubble.classList.add('pop'); // Apply pop animation
            setTimeout(() => {
                score += 1; // increase score
                scoreCounter.textContent = `Score: ${score}`; // update score display
                bubble.classList.remove('pop'); // Remove pop class after animation completes
                bubble.style.transform = 'scale(1)'; // reset size
                bubble.style.opacity = '1'; // reset opacity
            }, 500); // Wait for the pop animation to complete
        }, 50); // A slight delay to sync with the sound
    };

    // Add click event listeners to each bubble
    bubbles.forEach(bubble => {
        generateRandomBubbleSize(bubble); // Set random size for each bubble
        bubble.addEventListener('click', () => {
            popBubble(bubble);
        });
    });
});
