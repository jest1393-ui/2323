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

window.onload = () => {
  setTimeout(() => {
    const msg = document.getElementById("mensaje");
    if (msg) {
      msg.style.opacity = 1;  // hace aparecer el mensaje
    }
  }, 3000); // 3 segundos después de cargar la página
};
