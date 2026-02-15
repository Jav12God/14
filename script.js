document.getElementById('startBtn').addEventListener('click', () => {
    // Cambiar fondo y transiciones
    document.body.classList.remove('initial');
    document.body.classList.add('main');

    // Fade out del botón Start
    document.getElementById('intro').style.opacity = '0';

    // Después del fade out, mostrar contenido y reproducir música
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';

        const mainContent = document.getElementById('main-content');
        mainContent.style.opacity = '1';
        mainContent.style.pointerEvents = 'auto';

        // Reproducir música (funciona en móvil porque es tras interacción del usuario)
        const music = document.getElementById('music');
        music.volume = 0.6; // volumen cómodo
        music.play();
    }, 1500);
});
