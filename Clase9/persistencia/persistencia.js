let contador = 0;

function inicio() {
  // Usar localstorage para cargar el valor en que quedo el contador  
  actualizar();
}

function onClick() {
  contador++;
  // Usar localstorage para persistir el valor del contador
  actualizar();
}

inicio();

function actualizar() {
  document.querySelector("span").innerHTML = contador;
}
