const content = document.getElementById("content");

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

function render() {
  const route = location.hash.slice(1) || "home";
  switch (route) {
    case "home":
      content.innerHTML = `
        <h1>🌐 Sitio en Construcción</h1>
        <p>Bienvenido al proyecto. Aún estamos trabajando en los contenidos.</p>
      `;
      break;
    case "carrusel":
      content.innerHTML = `
        <h2>🖼️ Carrusel de Imágenes</h2>
        <div class="carrusel">
          <img src="https://via.placeholder.com/500x200?text=Imagen+1" class="active" />
          <img src="https://via.placeholder.com/500x200?text=Imagen+2" />
          <img src="https://via.placeholder.com/500x200?text=Imagen+3" />
        </div>
      `;
      iniciarCarrusel();
      break;
    case "estructura":
      content.innerHTML = `
        <h2>📋 Estructura por completar</h2>
        <h3>🖼️ Acá ingrese una imagen:</h3>
        <!-- imagen aquí -->

        <h3>📄 Aquí va una tabla:</h3>
        <!-- tabla aquí -->

        <h3>📑 Acá va una lista ordenada:</h3>
        <!-- lista ordenada aquí -->

        <h3>📑 Acá va una lista no ordenada:</h3>
        <!-- lista no ordenada aquí -->

        <h3>📥 Aquí debe ir un formulario:</h3>
        <!-- formulario aquí -->

        <h3>🔘 Aquí agregue un botón:</h3>
        <!-- botón aquí -->
      `;
      break;
    default:
      content.innerHTML = `<p>Ruta no encontrada.</p>`;
  }
}

function iniciarCarrusel() {
  const imgs = document.querySelectorAll(".carrusel img");
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove("active");
    current = (current + 1) % imgs.length;
    imgs[current].classList.add("active");
  }, 2000);
}
