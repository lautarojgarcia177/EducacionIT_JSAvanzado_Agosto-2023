let contador = 0;

function inicio() {
  contador = Number(localStorage.getItem("contador"));
  actualizar();
}

function onClick() {
  contador++;
  localStorage.setItem("contador", contador);
  actualizar();
}

inicio();

function actualizar() {
  document.querySelector("span").innerHTML = contador;
}
