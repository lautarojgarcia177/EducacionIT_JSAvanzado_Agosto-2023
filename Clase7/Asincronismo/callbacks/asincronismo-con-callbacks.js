// Tareas a realizar

let elAguaEstaHervida = false;

function hervirElAgua(cb) {
  setTimeout(() => {
    // ...Codigo de la tarea
    elAguaEstaHervida = true;
    console.log("Fin tarea 1");
    const cantidadDeAgua = 100;
    const espacioEnLaOlla = 20;
    const huboError = Math.random() < 0.5 ? true : undefined;
    cb(huboError, cantidadDeAgua, espacioEnLaOlla);
  }, 1000);
}
function cocinarArroz(cantidadDeAgua) {
  setTimeout(() => {
    // ...Codigo de la tarea
    if (elAguaEstaHervida) {
      console.log("Fin tarea 2");
    } else {
      console.error("El agua no estaba hirviendo, no pude cocinar el arroz");
    }
  }, 1000);
}
function cocinarPollo(espacioEnLaOlla) {
  setTimeout(() => {
    // ...Codigo de la tarea
    if (elAguaEstaHervida) {
      console.log("Fin tarea 3");
    } else {
      console.error("El agua no estaba hirviendo, no pude cocinar el pollo");
    }
  }, 1000);
}

function cocinarIngredientes(huboError, cantidadDeAgua, espacioEnLaOlla) {
  if (!huboError) {
    cocinarArroz(cantidadDeAgua);
    cocinarPollo(espacioEnLaOlla);
  } else {
    console.error(
      "Lamentablemente hubo un error hirviendo el agua y no se pueden cocinar los ingredientes"
    );
  }
}

// Sincronico
hervirElAgua(cocinarIngredientes);