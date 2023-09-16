let contadorDeResolve = 0;

const myPromise = new Promise(function (resolve, reject) {
  // ...codigo de la promesa
  if (Math.random() < 0.75) {
    contadorDeResolve++;
    console.log("La promesa se resolvio ", contadorDeResolve, " veces");
    resolve();
  } else {
    reject("No se resolvio :(");
  }
});

// Sintaxis then
myPromise
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .then(handleResolvedA)
  .catch(handleRejectedA)
  .then(() => {
    // Reinicio el contador
    contadorDeResolve = 0;
  });

function handleResolvedA() {
  return myPromise;
}

function handleRejectedA(error) {
  console.error(
    "La promesa se rechazo, alcanzo a resolverse ",
    contadorDeResolve,
    " veces"
  );
  return error;
}

// sintaxis async await
(async function contadorDeResolvesAA() {
  try {
    for (let i = 0; i < 5; i++) {
      await myPromise;
    }
  } catch (err) {
    console.error("La promesa se rechazo :(");
  }
})();
