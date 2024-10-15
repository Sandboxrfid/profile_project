// script.js
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const images = document.querySelectorAll('.bg-image');

    images.forEach((img, index) => {
        const speed = (index + 1) * 0.15; // Vary speed for different images
        img.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

