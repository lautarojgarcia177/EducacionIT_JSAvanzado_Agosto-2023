console.warn(document.querySelector("title").textContent);

let xhr;

function cargarImagen(imagen) {
  const img = document.querySelector("img");
  const progress = document.querySelector("progress");
  const span = document.querySelector("span");

  let porcentaje = 0;

  img.src = "";
  progress.value = porcentaje;
  span.innerText = porcentaje + "%";

  xhr = new XMLHttpRequest();

  let urlSinCache = imagen + "?" + Date.now();
  xhr.open("get", urlSinCache);

  xhr.responseType = "blob";
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      let imagenBlob = xhr.response;
      console.log(imagenBlob);

      const url = URL.createObjectURL(imagenBlob);
      console.log(url);

      //const img = document.createElement('img')
      img.src = url;
      //document.body.appendChild(img)
    }
  });

  xhr.addEventListener("progress", (e) => {
    //console.log('descargando', e)

    if (e.lengthComputable) {
      porcentaje = parseInt((e.loaded * 100) / e.total);
      console.warn(porcentaje + "%");

      progress.value = porcentaje;
      span.innerText = porcentaje + "%";
    }
  });

  xhr.send();
}

// ------------ Registro de eventos de Darg And Drop ---------------
let drop = document.getElementById("drop");

drop.addEventListener("dragenter", (e) => {
  e.preventDefault();
  drop.classList.add("dragenter");
  console.log("Evento dragenter disparado");
});

drop.addEventListener("dragleave", (e) => {
  e.preventDefault();
  drop.classList.remove("dragenter");
  console.log("Evento dragleave disparado");
});

drop.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("Solté el recurso en la zona de drop", e);

  let imagen = e.dataTransfer.files[0].name;
  //console.log(imagen)
  cargarImagen(imagen);
});

// ----- Cancelación del evento automático de d&d de fondo ---------
/* document.addEventListener('dragenter', e => e.preventDefault())
document.addEventListener('dragleave', e => e.preventDefault())
document.addEventListener('dragover', e => e.preventDefault())
document.addEventListener('drop', e => e.preventDefault()) */
["dragenter", "dragleave", "dragover", "drop"].forEach((event) => {
  document.addEventListener(event, (e) => e.preventDefault());
});

// ------ Pedido de nombre de la imagen desde el formulario ------
const input = document.querySelector("input");

input.addEventListener("change", () => {
  console.warn("Cambió el input");

  //let imagen = input.value            // para input type text
  let imagen = input.files[0].name; // para input type file
  let type = input.files[0].type; // para input type file

  //if(type.includes('image/')) {
  if (/^image\//.test(type)) {
    cargarImagen(imagen);
  } else {
    console.error("El archivo seleccionado debe ser un tipo imagen");
  }

  input.value = "";
});
