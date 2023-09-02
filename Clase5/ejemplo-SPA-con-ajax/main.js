const title = document.getElementById("title");
const app = document.getElementById("app");
title.innerText = "Bienvenidos a mi sitio web con AJAX";

function mediator() {
  const paginaActual = location.hash.slice(1);
  switch (paginaActual) {
    case "":
      title.innerText = "index";
      break;
    case "contacto":
      title.innerText = "contacto";
      break;
    case "comunidad":
      title.innerText = "comunidad";
      break;
  }
  cargarPlantilla(paginaActual);
}

function cargarPlantilla(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", 'plantillas/' + url + '.html');
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      app.innerHTML = xhr.response;
    }
  });
  xhr.send();
}

window.addEventListener("popstate", (e) => {
  mediator();
});
