let url = "https://jsonplaceholder.typicode.com/posts/";

//-----------------------------------------------------------
//   Petición asincrónica por Ajax (información desordenada)
//-----------------------------------------------------------
function getPost(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url + id);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      let respuesta = JSON.parse(xhr.response);
      console.log(respuesta);
    }
  });
  xhr.send();
}

function getPosts() {
  console.log("---> inicio de peticiones");
  getPost(1);
  getPost(2);
  getPost(3);
  getPost(4);
  getPost(5);
  console.log("---> fin de peticiones");
}

//getPosts()

//------------------------------------------------------------------------
//   Petición asincrónica por Ajax usando callbacks (información ordenada)
//------------------------------------------------------------------------
function getPostCb(id, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url + id);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      let respuesta = JSON.parse(xhr.response);
      //console.log(respuesta)
      if (cb) cb(respuesta);
    }
  });
  xhr.send();
}

function getPostsCb() {
  console.log("---> inicio de peticiones");

  //callbacks hell ó infierno de callbacks ó pirámide de la perdición
  getPostCb(1, (respuesta) => {
    console.log(respuesta);
    getPostCb(2, (respuesta) => {
      console.log(respuesta);
      getPostCb(3, (respuesta) => {
        console.log(respuesta);
        getPostCb(4, (respuesta) => {
          console.log(respuesta);
          getPostCb(5, (respuesta) => {
            console.log(respuesta);
          });
        });
      });
    });
  });
  console.log("---> fin de peticiones");
}

//getPostsCb()

//------------------------------------------------------------------------
//   Petición asincrónica por Ajax usando promesas (información ordenada)
//------------------------------------------------------------------------
function getPostPromise(id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url + id);
    xhr.addEventListener("load", () => {
      if (xhr.status == 200) {
        let respuesta = JSON.parse(xhr.response);
        //console.log(respuesta)
        resolve(respuesta);
      } else {
        let error = {
          type: "Error de status",
          id: id,
          body: xhr.status,
        };
        reject(error);
      }
    });
    xhr.addEventListener("error", (e) => {
      let error = {
        type: "Error de ajax",
        id: id,
        body: e,
      };
      reject(error);
    });
    xhr.send();
  });
}

//url = 'https://jsonplaceholder.typicodezzzzzzz.com/posts/'        // url error

/* ------------------------------------------------------------ */
/*       Uso de promesas anidadas con sintaxis then/catch       */
/* ------------------------------------------------------------ */
function getPostsPromiseTC() {
  console.log("---> inicio de peticiones");

  getPostPromise(1)
    .then((rta) => {
      console.log(rta);
      return getPostPromise(2);
    })
    .then((rta) => {
      console.log(rta);
      return getPostPromise(3);
    })
    .then((rta) => {
      console.log(rta);
      return getPostPromise(4);
    })
    .then((rta) => {
      console.log(rta);
      return getPostPromise(5);
    })
    .then((rta) => {
      console.log(rta);
    })
    .catch((error) => console.error(error));

  console.log("---> fin de peticiones");
}

//getPostsPromiseTC()

/* ------------------------------------------------------------ */
/*       Uso de promesas anidadas con sintaxis async/await      */
/* ------------------------------------------------------------ */
//async function getPostsPromiseAA() {
//const getPostsPromiseAA = async function() {
async function getPostsPromiseAA() {
  console.log("---> inicio de peticiones");

  try {
    for (let id = 1; id <= 5; id++) {
      //let rta = await getPostPromise(id==3? 333 : id) // para causar un error 404
      let rta = await getPostPromise(id);
      console.log(rta);
    }

    // let rta = await getPostPromise(1);
    // console.log(rta);

    // rta = await getPostPromise(2);
    // console.log(rta);

    // rta = await getPostPromise(3);
    // console.log(rta);

    // rta = await getPostPromise(4);
    // console.log(rta);

    // rta = await getPostPromise(5);
    // console.log(rta);

  } catch (error) {
    console.error(error);
  }

  console.log("---> fin de peticiones");
}

// getPostsPromiseAA();

console.log("Otras tareas...");
