document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero');
    const heroBg = document.querySelector('.hero-bg');

    if (!heroSection || !heroBg) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    heroSection.addEventListener('mousemove', function(e) {
        const rect = heroSection.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', function() {
        targetX = 0;
        targetY = 0;
    });

    function animate() {
        // Smooth easing
        targetX += (mouseX - targetX) * 0.1;
        targetY += (mouseY - targetY) * 0.1;

        // Create multiple geometric layers
        const pseudoElements = [
            { offset: 0.3, size: 500, color: 'rgba(56, 189, 248, 0.4)' },
            { offset: 0.5, size: 350, color: 'rgba(14, 165, 233, 0.3)' },
            { offset: 0.7, size: 450, color: 'rgba(56, 189, 248, 0.2)' }
        ];

        // Update background with gradient that follows mouse
        const bgGradient = `
            radial-gradient(circle at ${targetX * 0.3}px ${targetY * 0.3}px, rgba(56, 189, 248, 0.15), transparent 40%),
            radial-gradient(circle at ${targetX * 0.2 + 100}px ${targetY * 0.2 + 100}px, rgba(14, 165, 233, 0.1), transparent 50%),
            radial-gradient(ellipse 800px 600px at ${targetX * 0.25}px ${targetY * 0.25}px, rgba(56, 189, 248, 0.08), transparent 60%)
        `;

        heroBg.style.background = bgGradient;

        requestAnimationFrame(animate);
    }

    animate();
});
