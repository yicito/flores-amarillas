const boton = document.getElementById("abrir");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    boton.style.display = "none";
    mensaje.style.display = "block";
});