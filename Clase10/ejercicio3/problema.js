/*
Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena.
Santa Claus tiene un trineo que puede llevar un peso limitado,
y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.
Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. 
Cada reno tiene un límite de peso máximo que puede llevar. 
El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.
Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos 
y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños.
Las cajas de regalos no se pueden dividir.

Cosas a tener en cuenta:

Las cajas de regalos no se pueden dividir.
Los nombres de los regalos y los renos siempre serán mayores que 0. 
*/

function distributeGifts(packOfGifts, reindeers) {
  // Calcula el peso de cada regalo utilizando length
  packOfGifts = packOfGifts.map((gift) => gift.length);
  // Calcula la capacidad de cada reno utilizando length * 2
  reindeersCapacity = reindeers.map((reinderr) => reinderr.length * 2);
  // Definir Contador de regalos entregados
  let contador = 0;
  // Definir Índice del reno actual
  let reindeerIndex = 0;
  for (const giftWeigth of packOfGifts) {
    // Si el reno tiene capacidad, asignarle el regalo, sino asignarselo al siguiente reno
    if (reindeersCapacity[reindeerIndex] >= giftWeigth) {
      contador++;
      reindeersCapacity[reindeerIndex] -= giftWeigth;
    } else {
      reindeerIndex++;
    }
  }
  return contador;
}

const packOfGifts = ["book", "doll", "ball", "bottle"];
const reindeers = ["thor", "maxi"];
const result = distributeGifts(packOfGifts, reindeers);
console.log(result); // Me deberia dar 3
