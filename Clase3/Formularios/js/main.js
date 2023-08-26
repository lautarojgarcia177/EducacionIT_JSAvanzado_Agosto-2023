// -------------------------------------------------------------------------------------------------------
//       Validación de formularios a través de Javascript
// -------------------------------------------------------------------------------------------------------

let input = document.querySelector("#passwordInput");
let form = document.querySelector("#formulario");
let submitForm = document.querySelector("#submitBtn");
let dialog = document.querySelector("#estasSeguroDialog");
let confirmBtn = document.querySelector("#confirmBtn");

// Desactivo el boton de enviar
submitForm.disabled = true;

input.addEventListener("input", (e) => {
  // Expresion regular escrita por chatGPT, valida que el texto tenga 5 caracteres minimo
  // y que tambien tenga minusculas y mayusculas
  let validador = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  let mensaje = null;
  if (!validador.test(e.target.value)) {
    mensaje =
      "La clave no es valida, debe tener mayusculas, minusculas y 5 caracteres minimo";
  }
  const div = document.querySelector("#mensaje-de-error");
  div.innerText = mensaje;
  div.style.display = mensaje ? "block" : "none";
  mensaje ? (submitForm.disabled = true) : (submitForm.disabled = false);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dialog.showModal();
});

confirmBtn.addEventListener("click", () => {
  // Enviar formulario
  console.log("Formulario enviado");
  location.reload();
});
