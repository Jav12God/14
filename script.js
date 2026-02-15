document.getElementById('startBtn').addEventListener('click', () => {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('music');

    // Fade out del botón Start
    intro.style.opacity = '0';

    setTimeout(() => {
        intro.style.display = 'none';

        // Cambiar fondo directamente (más confiable que clases)
        document.body.style.background = 'url("14/fondo.png") center/cover no-repeat';

        // Mostrar contenido principal con fade-in
        mainContent.style.opacity = '1';
        mainContent.style.pointerEvents = 'auto';
        mainContent.classList.add('show'); // Activa el fade-in de las imágenes decorativas

        // Reproducir música
        music.volume = 0.5;
        music.play().catch(error => {
            console.log('Error al reproducir audio (puede ser por nombre del archivo o bloqueo del navegador):', error);
        });
    }, 1500);
});
