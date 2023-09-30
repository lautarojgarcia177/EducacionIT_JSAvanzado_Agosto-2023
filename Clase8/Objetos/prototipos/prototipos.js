// Creo el objeto persona teniendo de prototipo a object
const persona = Object.create(null);
// Le agrego las propiedades a persona
persona.piernas = 2;
persona.cabeza = 1;
persona.brazos = 2;

// Creo empleado a partir de persona
const empleado = Object.create(persona);
empleado.sueldo = 1000;
empleado.estaBlanqueado = true;

// Creo profesor a partir de empleado
const profesor = Object.create(empleado);
profesor.curso = "Javascript";

// Creo lautaro a partir de profesor
const lautaro = Object.create(profesor);
profesor.nombre = "Lautaro";

console.log(lautaro);
