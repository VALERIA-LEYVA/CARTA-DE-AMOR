document.addEventListener('DOMContentLoaded', function() {
    const carta = document.querySelector('.carta');
    carta.addEventListener('mouseenter', function() {
        this.style.animation = 'shake 0.5s ease-in-out infinite alternate';
    });
    carta.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});
