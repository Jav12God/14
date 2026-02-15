const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const site = document.getElementById("site");
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

  // Mostrar contenido
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    site.classList.remove("hidden");

    setTimeout(() => {
      site.style.opacity = "1";
    }, 100);

  }, 1000);

  // Forzar reproducción en móvil
  music.volume = 0.7;
  music.play().catch(err => {
    console.log("Autoplay bloqueado hasta interacción:", err);
  });

});
