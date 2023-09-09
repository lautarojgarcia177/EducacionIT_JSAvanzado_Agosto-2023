console.warn(document.querySelector("title").textContent);

let urlNoCORS = "https://jsonplaceholder.typicode.com/posts";
let urlCORS =
  "https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json";

const url = urlNoCORS;

// CORS : Cross Origin Resources Sharing
// JSONP : JSON Padding

const xhr = new XMLHttpRequest();
xhr.open("get", url);
//xhr.setRequestHeader('miheader','hola123')
xhr.addEventListener("load", () => {
  if (xhr.status == 200) {
    let respuesta = JSON.parse(xhr.response);
    console.warn(typeof respuesta);
    console.log("No fue necesario JSONP", respuesta);
  }
});
xhr.send();

// ------------------------------------------------------------------------
// Detección del error de Ajax por CORS (en este caso) y petición por JSONP
xhr.addEventListener("error", (e) => {
  console.warn("Error Ajax", e);

  const script = document.createElement("script");
  script.src = url + "&callback=micallback";
  document.body.appendChild(script);
});

function micallback(res) {
  console.log("Callback de JSONP", res);
}
