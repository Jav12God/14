const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const letterScreen = document.getElementById('letterScreen');
const letterText = document.getElementById('letterText');
const audio = document.getElementById('music');
const body = document.body;

const fullText = `Hola, mi amor...

Hoy es 14 de febrero, nuestro primer San Valentín juntos. ❤️

Hemos pasado por tantas cosas en estos meses... hemos reído, hemos llorado, hemos tenido nuestras peleas y discusiones fuertes, pero siempre hemos estado ahí el uno para el otro. Nunca nos hemos soltado.

Estos 4 meses han sido los más felices de toda mi vida. Contigo todo se siente diferente, más real, más bonito.

No soy perfecto, lo sé. A veces meto la pata, a veces soy demasiado celoso... pero todo eso es porque te amo con una intensidad que no puedo explicar. No quiero perderte nunca.

Por ti quiero ser mejor cada día. Quiero darte el mundo entero, porque tú mereces todo lo bueno que existe.

Te amo, Kath. Te amo muchísimo. Sueño con pasar el resto de mi vida a tu lado, con verte caminar hacia el altar siendo mi esposa, con construir una familia juntos y ser felices... realmente felices.

Gracias por elegirme. Gracias por ser tú.

Te amo con todo mi ser. ♾️💙`;

async function tryPlayAudio() {
  audio.volume = 0.6;
  audio.muted = false;
  audio.load();
  try {
    await audio.play();
    return true;
  } catch (err) {
    return false;
  }
}

startBtn.addEventListener('click', async () => {
  let played = await tryPlayAudio();

  if (!played) {
    setTimeout(async () => {
      await tryPlayAudio();
    }, 400);
  }

  startScreen.style.opacity = '0';
  setTimeout(() => {
    body.classList.add('loaded');
    startScreen.style.display = 'none';
    letterScreen.style.display = 'flex';
    letterScreen.style.opacity = '1';
    startTyping();
    addFloatingDecorations();
  }, 1200);
});

function startTyping() {
  let i = 0;
  letterText.innerHTML = '';
  const speed = 60;
  function type() {
    if (i < fullText.length) {
      let char = fullText.charAt(i);
      letterText.innerHTML += (char === '\n' ? '<br><br>' : char);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function addFloatingDecorations() {
  const images = ['./corazon_gato.png', './gato_flor.png', './mob_flores.png', './omori.png', './omori2.png'];

  for (let k = 0; k < 5; k++) {
    createFloat(images[Math.floor(Math.random() * images.length)]);
  }

  setInterval(() => {
    createFloat(images[Math.floor(Math.random() * images.length)]);
  }, 9000);
}

function createFloat(src) {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('float-img');
  img.style.left = Math.random() * 100 + 'vw';
  img.style.top = Math.random() * 100 + 'vh';
  img.style.width = (60 + Math.random() * 90) + 'px';
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 40000);
}
