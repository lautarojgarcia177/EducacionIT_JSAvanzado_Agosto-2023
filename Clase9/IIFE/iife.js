/*
  I Inmediatly
  I Invoked
  F Function
  E Expression 
 */

(function (texto) {
  const p = document.createElement("p");
  p.innerHTML = texto;
  document.querySelector("body").appendChild(p);
})("Este es un parrafo generado con JS en una IIFE");

