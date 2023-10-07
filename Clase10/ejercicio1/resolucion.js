const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

function wrapping(gifts) {
  let result = [];
  for (let gift of gifts) {
    result.push(`*${gift}*`);
  }
  return result;
}

console.log(wrapped);