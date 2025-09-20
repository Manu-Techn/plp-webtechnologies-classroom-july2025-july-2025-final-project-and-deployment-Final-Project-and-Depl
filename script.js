document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector('.circle');
    const text = document.getElementById('breathe-text');
    const phases = [
        { label: 'Breathe in...', class: 'breathe-in' },
        { label: 'Hold...', class: 'hold' },
        { label: 'Breathe out...', class: 'breathe-out' }
    ];
    let i = 0;

    function breathe() {
        const phase = phases[i % phases.length];
        text.textContent = phase.label;
        circle.className = 'circle ' + phase.class; // resets and adds correct class
        i++;
    }

    setInterval(breathe, 4000); // every 4 seconds
    breathe(); // start immediately
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
