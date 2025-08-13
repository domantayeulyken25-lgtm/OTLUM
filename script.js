window.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');

    // Try autoplay
    bgMusic.play().catch(() => {
        const startMusic = () => {
            bgMusic.play();
            document.removeEventListener('click', startMusic);
            document.removeEventListener('mousemove', startMusic);
        };
        document.addEventListener('click', startMusic);
        document.addEventListener('mousemove', startMusic);
    });
});
