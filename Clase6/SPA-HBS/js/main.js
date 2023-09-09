function ajax(url, metodo = "get") {
  const xhr = new XMLHttpRequest();
  xhr.open(metodo, url);
  xhr.send();

  return xhr;
}

const marcarLink = (id) => {
  const links = document.querySelectorAll(".navbar a");
  links.forEach((link) => {
    if (link.id == id) link.classList.add("active");
    else link.classList.remove("active");
  });
};

function getNombreArchivo(id) {
  return "plantillas/" + (id || "home") + ".html"; // con shot circuit operator
}

function getNombreArchivoHbs(id) {
  return "plantillas/" + (id || "home") + ".hbs"; // con shot circuit operator
}

function getPlantilla(nombre, dst, cb) {
  let archivo = getNombreArchivo(nombre);
  const xhr = ajax(archivo);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      dst.innerHTML = xhr.response;
      if (typeof cb == "function") cb();
      /* if(nombre == 'perfil') {
                document.querySelector('.media p').innerText = 'nombre : X - apellido: Y'
            } */
    }
  });
}

const datos = {
  perfil: {
    nombre: "Daniel",
    apellido: "Sánchez",
    edad: 54,
    foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png",
  },
  //perfil : {nombre: 'Daniel', apellido: 'Sánchez', edad: 54, foto: ''},
  home: { mensaje: "Hola! Bienvenidos a mi página Web SPA" },
  usuarios: { lista: ["Juan", "María", "José", "Ana", "Fede"] },
  configuraciones: {
    lista: [
      { nombre: "Conf Nro 1", nivel: "estándar" },
      { nombre: "Conf Nro 2", nivel: "medio" },
      { nombre: "Conf Nro 3", nivel: "crítico" },
    ],
  },
};

function getPlantillaHbs(nombre, dst, cb) {
  let archivo = getNombreArchivoHbs(nombre);
  const xhr = ajax(archivo);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      //dst.innerHTML = xhr.response
      const plantilla = xhr.response;
      const template = Handlebars.compile(plantilla);

      /* let datos = {}
            if(nombre == 'perfil') {
                datos = {nombre: 'Daniel', apellido: 'Sánchez', edad: 54}
            }
            dst.innerHTML = template(datos) */

      dst.innerHTML = template(datos[nombre] || {});

      if (typeof cb == "function") cb();
    }
  });
}

function getPlantillasConHistoryHash() {
  const main = document.querySelector("main");

  // --------------------------------------------
  //       Carga de la página de inicio
  // --------------------------------------------
  let id = location.hash.slice(1);
  marcarLink(id);
  //getPlantilla(id, main)
  getPlantillaHbs(id, main);

  // --------------------------------------------
  //  Carga dinámica de las vistas de navegación
  // --------------------------------------------
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      let id = link.id;
      location.hash = id;
    });
  });

  window.addEventListener("hashchange", () => {
    let id = location.hash.slice(1);
    marcarLink(id);
    //getPlantilla(id, main)
    getPlantillaHbs(id, main);
  });
}

function pruebaHandlebars() {
  // compile the template
  var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
  // execute the compiled template and print the output to the console
  console.log(template({ doesWhat: "rocks!" }));

  // compile the template
  template = Handlebars.compile("<p>{{firstname}} {{lastname}}</p>");
  // execute the compiled template and print the output to the console
  console.log(
    template({
      firstname: "Yehuda",
      lastname: "Katz",
    })
  );

  const xhr = ajax("plantillas/prueba.hbs");
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      const plantilla = xhr.response;
      //console.log(plantilla)

      // compile the template
      const template = Handlebars.compile(plantilla);
      // execute the compiled template and print the output to the console
      console.log(
        template({
          firstname: "Yehuda",
          lastname: "Katz",
        })
      );
    }
  });
}

(() => {
  const header = document.querySelector("header");
  getPlantillaHbs("navbar", header, () => getPlantillasConHistoryHash());

  //pruebaHandlebars()
})();
