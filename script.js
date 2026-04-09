// CORAZONES AL ENTRAR
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.innerHTML = "💖";
  corazon.classList.add("corazon");

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);


// BOTÓN GLOBOS
document.getElementById("boton").addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
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