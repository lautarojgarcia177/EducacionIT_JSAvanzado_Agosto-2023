console.warn(document.querySelector("title").textContent);

// ---------------------------------------------------------------
console.log("\n/* CALLBACKS */");

var uno = () => {
  console.log("Soy la función 1");
};

var dos = () => {
  console.log("Soy la función 2");
};

uno();
dos();

// ----------------------------------------------------------------------------
function prueba(item, callback) {
  console.log(item);
  console.log(callback);

  // comprobación del callback no rigurosa
  /* if(callback) callback()
    else console.error(`Prueba: el callback "${callback}" no está definido`) */

  // comprobación del callback rigurosa
  if (typeof callback == "function") callback();
  else console.error(`Prueba: el callback "${callback}" no es una función`);
}

prueba(1, uno);
prueba(2, dos);
prueba(3, "Pepe");

// ----------------------------------------------------------------------------
function prueba2(item, cb1, cb2) {
  console.log(item);

  // comprobación del callback cb1 rigurosa
  if (typeof cb1 == "function") cb1();
  else console.error(`Prueba: el callback "${cb1}" no es una función`);

  // comprobación del callback cb1 rigurosa
  if (typeof cb2 == "function") cb2();
  else console.error(`Prueba: el callback "${cb2}" no es una función`);
}

prueba2(4, uno, dos);

console.log("--------------------------------------------------");

function operacion(a, b, cb) {
  if (typeof cb != "function") return "**** OPERACIÓN NO PERMITIDA ****";
  return cb(a, b);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
//const mod = (a,b) => a % b
const mod = function (a, b) {
  return a % b;
};

var n1 = 15,
  n2 = 6;

console.log(`La suma entre ${n1} y ${n2} es ${operacion(n1, n2, suma)}`);
console.log(`La resta entre ${n1} y ${n2} es ${operacion(n1, n2, resta)}`);
console.log(
  `La multiplicación entre ${n1} y ${n2} es ${operacion(n1, n2, mult)}`
);
console.log(`La división entre ${n1} y ${n2} es ${operacion(n1, n2, div)}`);

console.log(`El módulo entre ${n1} y ${n2} es ${operacion(n1, n2, mod)}`);
console.log(
  `El módulo entre ${n1} y ${n2} es ${operacion(n1, n2, (x, y) => x % y)}`
);
console.log(
  `El módulo entre ${n1} y ${n2} es ${operacion(n1, n2, function (x, y) {
    return x % y;
  })}`
);

// -------------------------------------------------------
console.log("\n/* EVENTOS */");

var btn = document.getElementById("btn");

//btn.onclick = console.log('Click!') // No funciona porque no le estoy asignado a la propiedad evento un callback

/* function click() {
    console.log('Click!')
} */

/* const click = function() {
    console.log('Click!')
} */

/* const click = () => {
    console.log('Click!')
} */

//btn.onclick = click
//btn.onclick = () => console.log('Click!')
//btn.onclick = function() { console.log('Click!') }

//btn.onclick = uno

// -------------------------------------------------------
console.log("\n/* EVENTOS con callbacks múltiples */");

/* btn.onclick = uno
btn.onclick = dos */

// Solución 1
/* btn.onclick = () => {
    uno()
    dos()
} */

// Solucion 2
btn.addEventListener("click", uno);
btn.addEventListener("click", dos);
btn.addEventListener("click", function () {
  console.log("Soy otra función");
});
btn.addEventListener("click", () => {
  console.log("Soy otra función 2");
});

/*
console.log('Inicio:', new Date().toLocaleString())
setTimeout(() => {
    console.log('Fin:', new Date().toLocaleString())
    console.log('Pasaron 3000mS')

    btn.removeEventListener('click', dos)
}, 3000)
*/

// -------------------------------------------------------
console.log("\n/* Event Object (e) (event) */");

btn.addEventListener("click", function (e) {
  console.log(e);
});
btn.addEventListener("click", (e) => {
  console.log(e);
});

btn.addEventListener("click", procesarEventoClick);

//funciona debido a Hoisting
function procesarEventoClick(e) {
  console.log(e);
}

// -------------------------------------------------------
console.log("\n/* Propagación de eventos (BUBBLING y CAPTURING) */");

var UNO = document.getElementById("uno");
var DOS = document.getElementById("dos");
var TRES = document.getElementById("tres");

TRES.addEventListener(
  "click",
  function (e) {
    e.stopPropagation()
    console.log("Click en TRES");
  },
  false
); // false ó nada : BUBBLING , true: CAPTURING

DOS.addEventListener(
  "click",
  function (e) {
    //e.stopPropagation()
    console.log("Click en DOS");
  },
  false
); // false ó nada : BUBBLING , true: CAPTURING

UNO.addEventListener(
  "click",
  function (e) {
    //e.stopPropagation()
    console.log("Click en UNO");
  },
  false
); // false ó nada : BUBBLING , true: CAPTURING

// -------------------------------------------------------
console.log("\n/* Aplicación avanzada de la propagación de eventos */");

var botonCreado = false;
//var estatico = document.getElementById('estatico')

//estatico.addEventListener('click', function() {
document.getElementById("estatico").addEventListener("click", function () {
  console.log("Soy el botón estático");

  if (!botonCreado) {
    var dinamico = document.createElement("button");
    dinamico.innerText = "Dinámico";
    dinamico.id = "dinamico";
    document.body.appendChild(dinamico);

    //-----------------------------------------------------------------------------
    // Forma de solución sin usar propagación de eventos (anidamiento de callbacks)
    //-----------------------------------------------------------------------------
    //var dinamico = document.getElementById('dinamico')
    //console.log(dinamico)
    /* dinamico.addEventListener('click', function() {
            console.log('Soy el botón dinámico')
        }) */
    //----------------------------------------------------------------------------

    botonCreado = true;
  }
});

//----------------------------------------------------------------------------
//           Forma de solución usando propagación de eventos
//----------------------------------------------------------------------------
document.addEventListener("click", function (e) {
  //console.log('Document Click', e)

  let id = e.target.id;
  if (id == "dinamico") {
    console.log("Soy el botón dinámico");
  }
});

//----------------------------------------------------------------------------
//                Eventos con comportamiento automático
//----------------------------------------------------------------------------
var link = document.querySelector("#link");
link.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Click en Link!");

  setTimeout(() => {
    location.href = "https://www.google.com";
  }, 2000);
});

//----------------------------------------------------------------------------
//                Manipulación del DOM con un evento del BOM
//----------------------------------------------------------------------------
//window.addEventListener('resize', () => {
addEventListener("resize", () => {
  console.log("Cambió el tamaño del navegador");

  document.getElementById("info-resize").innerHTML = `
        <b>Cambió el tamaño del navegador</b><br>
        Las dimensiones <span style="color:red;">externas</span> son <i>${outerWidth} x ${outerHeight}</i> pixeles de ancho por alto.<br>
        Las dimensiones <span style="color:blue;">internas</span> son <i>${innerWidth} x ${innerHeight}</i> pixeles de ancho por alto.
    `;
});

//----------------------------------------------------------------------------
//                     Eventos Custom ó personalizados
//----------------------------------------------------------------------------
// 1) Creación del evento
var ev1 = new Event("look1", { bubbles: true, cancelable: false });
var ev2 = new Event("look2", { bubbles: true, cancelable: false });
var ev3 = new Event("look3", { bubbles: true, cancelable: false });

// 2) Registro del evento custom
document.addEventListener("look1", () => {
  console.log("Evento look1");
  document.dispatchEvent(ev2);
});
document.addEventListener("look2", () => {
  console.log("Evento look2");
});
document.addEventListener("look3", () => {
  console.log("Evento look3", new Date().toLocaleString());
});

// 3) disparo ó dispatch del evento
document.getElementById("btn-look1").addEventListener("click", () => {
  document.dispatchEvent(ev1);
});

// --------------- Operación con setInterval y setTimeout --------------------
const refTimer = setInterval(() => {
  document.dispatchEvent(ev3);
}, 3000);

document.addEventListener("look3", () => {
  console.warn("Esta tarea A se ejecuta cada 3 segundos");
});

document.addEventListener("look3", () => {
  console.warn("Esta tarea B se ejecuta cada 3 segundos");
});

setTimeout(() => {
  console.error("stop timer");
  clearInterval(refTimer);
}, 10000);

/* FORMAS DE HACER CALLBACKS */
const inputEventos = document.querySelector("#input__eventos");
// Forma 1: Con una funcion aparte
function callback__onBlur() {
  alert("El usuario acaba de dejar el campo de entrada");
}
inputEventos.addEventListener("blur", callback__onBlur);
inputEventos.removeEventListener('blur', callback__onBlur);

// Forma 2: Con una funcion anonima
inputEventos.addEventListener("change", function () {
  console.info("El valor del input ha cambiado");
});
inputEventos.addEventListener("focus", () => {
  console.info("El usuario ha hecho foco en el input");
});

// Forma 3: Con una funcion, que es llamada desde el HTML
// Es decir, el event listener esta en el html, y el callback esta en el js
// Los callback siempre tienen que estar en js.
function input__onKeydown(event) {
  const { key } = event;
  console.info("Se ha presionado la tecla " + key + " en el input");
}
