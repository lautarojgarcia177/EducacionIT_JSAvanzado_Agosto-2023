function distributeGifts(packOfGifts, reindeers) {
  const giftsWeight = packOfGifts.map((gift) => gift.length); // Calcula el peso de cada regalo
  const reindeersCapacity = reindeers.map((reindeer) => 2 * reindeer.length); // Calcula la capacidad de cada reno

  let giftsCount = 0; // Contador de regalos entregados
  let reindeerIndex = 0; // Índice del reno actual

  for (const giftWeight of giftsWeight) {
    if (reindeerIndex >= reindeersCapacity.length) {
      // Si ya se asignaron todos los renos, detén la distribución
      break;
    }

    if (giftWeight <= reindeersCapacity[reindeerIndex]) {
      // Si el regalo puede ser entregado por el reno actual, entrégalo
      giftsCount += 1;
      reindeerIndex += 1; // Pasar al siguiente reno
    }
  }

  return giftsCount;
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
const result = distributeGifts(packOfGifts, reindeers);
console.log(result); // 2
