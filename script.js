const musica = document.getElementById("musica");

document.addEventListener("click", () => {
  musica.play().catch(() => {
    console.log("El navegador bloqueó la música hasta que el usuario toque la pantalla.");
  });
}, { once: true });
