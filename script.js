// 💖 CORAZONES AUTOMÁTICOS
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.innerHTML = "💖";
  corazon.classList.add("corazon");

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = (Math.random() * 20 + 10) + "px";
  corazon.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);


// 🐱 BOTÓN HELLO KITTY
document.getElementById("boton").addEventListener("click", () => {
  for (let i = 0; i < 25; i++) {
    let kitty = document.createElement("div");

    kitty.innerHTML = "🐱🎀";
    kitty.classList.add("kitty");

    kitty.style.left = Math.random() * 100 + "vw";
    kitty.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(kitty);

    setTimeout(() => {
      kitty.remove();
    }, 5000);
  }
});


// 🎁 BOTÓN SORPRESA (AUDIO)
const botonMusica = document.getElementById("musica");
const audio = document.getElementById("audio");

botonMusica.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    botonMusica.innerText = "⏸️ Pausar sorpresa";
  } else {
    audio.pause();
    botonMusica.innerText = "🎁 Sorpresa 🎁";
  }
});
