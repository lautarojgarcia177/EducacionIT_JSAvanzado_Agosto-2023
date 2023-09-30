console.warn(document.querySelector("title").textContent);

/* ------------------------------------------------ */
/*    Objetos en Javascript: formas para crearlos   */
/* ------------------------------------------------ */
// 1) Forma literal (JS5)
// 2) Forma utilizando método create de Object (JS5)
// 3) Forma utilizando funciones constructoras (con operador new) (JS5)
// 4) Forma utilizando funciones constructoras (con funcion class) (ES6)
/* ------------------------------------------------ */

//------------------------------------------------
console.warn("\n/* 1) Forma literal (JS5) */");

let a = { nombre: "Juan" };
console.log(a);

console.log(a.nombre);
console.log(a.hasOwnProperty("nombre"));
console.log(a.hasOwnProperty("edad"));

//------------------------------------------------
console.warn("\n/* 2) Forma utilizando método create de Object (JS5) */");

console.dir(Object);

//let b = Object.create(null)
let b = Object.create(Object.prototype);
console.log(b);

//------------------------------------------------
console.warn(
  "\n/* 3) Forma utilizando funciones constructoras (con operador new) (JS5) */"
);
function Persona(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const Lautaro = new Persona("Lautaro", "Garcia", 28, "Marron");

console.log(Lautaro);

//------------------------------------------------
console.warn("\n/* 4) Forma utilizando Clases (ES6)*/");

class Person {
  static saludar = () => "Hola!";
  static importante = true;
  constructor(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
}

const Genaro = new Person("Genaro", "Garcia", 26, "Marron");

console.log(Person.saludar());
console.log(Person.importante);
console.log(Genaro.firstName);
