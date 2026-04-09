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


// 🎈 GLOBOS AL PRESIONAR
document.getElementById("boton").addEventListener("click", () => {
  for (let i = 0; i < 25; i++) {
    let globo = document.createElement("div");
    globo.classList.add("globo");

    globo.style.left = Math.random() * 100 + "vw";
    globo.style.background = `hsl(${Math.random()*360}, 70%, 60%)`;

    document.body.appendChild(globo);

    setTimeout(() => {
      globo.remove();
    }, 5000);
  }
});
