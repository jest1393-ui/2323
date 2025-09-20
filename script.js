onload = () => {
  document.body.classList.remove("container");
};
window.onload = () => {
  setTimeout(() => {
    const msg = document.getElementById("msg");
    if (msg) {
      msg.style.opacity = 1; // hace que el mensaje aparezca
    }
  }, 3000); // tiempo en milisegundos (3000 = 3 segundos)
};
