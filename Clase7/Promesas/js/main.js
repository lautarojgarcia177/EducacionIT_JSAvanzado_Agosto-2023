console.warn(document.querySelector("title").textContent);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

/* ---------------------------------------- */
/*        Métodos: resolve, reject          */
/* ---------------------------------------- */
//Promise.reject('bad request')
/* Promise.resolve(6)
    .then( rta => rta * 2)
    .then( rta => {
        if(rta != 12) throw rta
        return rta
    })
    .then( rta => console.log('ok', rta))
    .catch( error => console.error('error',error))
    .finally( () => console.warn('Finally!') ) */

/* ---------------------------------------- */
/*           Métodos: race, all             */
/* ---------------------------------------- */
const retardo = (ms, mensaje) =>
  new Promise((resolve, reject) => {
    let tipo = typeof ms;

    if (tipo == "number") {
      setTimeout(() => {
        resolve(mensaje);
      }, ms);
    } else {
      let error = {
        title: "Error en tipo de entrada ms (debe ser numérico)",
        tipo, // es igual a -> tipo: tipo,
        mensaje, // es igual a -> mensaje: mensaje,
        ms, // es igual a -> ms: ms,
      };
      reject(error);
    }
  });

const retardo2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const prtTime = (mensaje, cb) => cb(mensaje, new Date().toLocaleString());

/* ----------------- test de la promesa retardo --------------- */
/* prtTime('Inicio delay', console.warn)
retardo(2000,'Retardo 2000ms de prueba')
    .then( rta => {
        console.log(rta)
        prtTime('Fin delay', console.warn)
    })
    .catch( error => console.error(error)) */

/* ----------------- test de la promesa retardo 2 --------------- */
/* prtTime('Inicio delay 2', console.warn)
retardo2(4000).then( () => prtTime('Fin delay 2', console.warn) ) */

/* --------------------------- RACE ---------------------------- */
prtTime("Inicio carrera", console.warn);
Promise.race([
  retardo(17000, "Retardo 17000ms de prueba"),
  retardo(13000, "Retardo 13000ms de prueba"),
  retardo(15000, "Retardo 15000ms de prueba"),
])
  .then((rta) => {
    console.log("Ganó", rta);
    prtTime("Fin carrera", console.warn);
  })
  .catch((error) => console.error("Error en carrera", error));

/* --------------------------- ALL ---------------------------- */
// prtTime('Inicio cumplimiento total', console.warn)
// Promise.all([
//     retardo(11000, 'Retardo 11000ms de prueba'),
//     retardo(13000, 'Retardo 13000ms de prueba'),
//     retardo(12000, 'Retardo 12000ms de prueba'),
// ])
// .then( rta => {
//     console.log('Cumplió', rta)
//     prtTime('Fin cumplimiento total', console.warn)
// })
// .catch( error => console.error('Error en cumplimiento total', error))
