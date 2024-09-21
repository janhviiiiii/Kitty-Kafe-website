document.addEventListener('DOMContentLoaded', () => {
    const catSlider = document.querySelector('.cat-slider');

    catSlider.addEventListener('mouseenter', () => {
        catSlider.style.animationPlayState = 'paused';
    });

    catSlider.addEventListener('mouseleave', () => {
        catSlider.style.animationPlayState = 'running';
    });
});
