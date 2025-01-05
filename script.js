document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Mechatronics Engineering Student",
        "Currently Attending McMaster University",
        "Design, Test, Analyze, Optimize, Results",
        "Develop, Refine, and Produce the Best Product"
    ];

    const textContainer = document.createElement('p');
    textContainer.className = 'typing-text';
    document.querySelector('main').insertBefore(textContainer, document.querySelector('#about'));

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetween = 1000;

    const typeText = () => {
        const currentText = texts[index];
        if (!isDeleting) {
            charIndex++;
            textContainer.textContent = currentText.slice(0, charIndex) + '|';
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeText, pauseBetween);
            } else {
                setTimeout(typeText, typingSpeed);
            }
        } else {
            charIndex--;
            textContainer.textContent = currentText.slice(0, charIndex) + '|';
            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(typeText, pauseBetween);
            } else {
                setTimeout(typeText, deletingSpeed);
            }
        }
    };

    typeText();
});