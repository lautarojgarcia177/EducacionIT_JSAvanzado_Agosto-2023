let contadorLocalStorage = 0;
let contadorSessionStorage = 0;

function inicio() {
  contadorLocalStorage = Number(localStorage.getItem("contador"));
  contadorSessionStorage = Number(sessionStorage.getItem("contador"));
  actualizar();
}

function onClick() {
  contadorLocalStorage++;
  contadorSessionStorage++;
  localStorage.setItem("contador", contadorLocalStorage);
  sessionStorage.setItem("contador", contadorSessionStorage);
  actualizar();
}

function actualizar() {
  document.querySelector("#contador-localstorage").innerHTML =
    contadorLocalStorage;
  document.querySelector("#contador-sessionstorage").innerHTML =
    contadorSessionStorage;
}

inicio();
