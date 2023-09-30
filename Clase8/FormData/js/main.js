console.warn( document.querySelector('title').textContent )


function repreContenidoFormData(data) {

    console.warn('Represento valores contenido en el FormData')

    //console.log(data)

    let keys = data.keys()
    /* console.log(keys)
    console.log(keys.next())
    console.log(keys.next())
    console.log(keys.next()) */


    let values = data.values()
    /* console.log(values)
    console.log(values.next())
    console.log(values.next())
    console.log(values.next()) */

    do {
        let clave = keys.next()
        let valor = values.next()
        if(clave.done || valor.done) break
        console.log(clave.value, valor.value)
    }
    while(true)
}


/* ----------------------------------------------------------- */
/*  Uso de FormData con formularios (modo automático de carga) */
/* ----------------------------------------------------------- */
const form = document.querySelectorAll('form')[0]

form.addEventListener('submit', e => {
    e.preventDefault()

    //console.log('form')

    //creo el objeto formdata y lo cargo con los datos del formulario
    let data = new FormData(form)
    
    //represento la información contenida en el formdata
    repreContenidoFormData(data)

    //Envío el FormData al servidor
    enviarFormDataAjax('http://localhost:8080/datos',data)
})


const form2 = document.querySelectorAll('form')[1]

form2.addEventListener('submit', e => {
    e.preventDefault()

    //console.log('form2')

    const input = form2[0]
    
    //creo un FormData vacío
    let data = new FormData()
    
    //Cargo la información del archivo en ese formdata en forma manual
    data.append('archivo', input.files[0])

    //represento la información contenida en el formdata
    repreContenidoFormData(data)

    //Envío el FormData al servidor
    enviarFormDataAjax('http://localhost:8080/upload',data)
})


/* ----------------------------------------------------------- */
/*         Uso de FormData con carga manual de datos           */
/* ----------------------------------------------------------- */
const btnCrear = document.getElementById('btn-crear')

btnCrear.addEventListener('click', () => {

    //console.log('crear valores')

    //Creo el formdata vacío
    let data = new FormData();

    //Cargo la información en formdata en forma manual
    for(let i=0; i<10; i++) {
        data.append(`Param-${i+1}`, i+1)
    }
    
    //represento la información contenida en el formdata
    repreContenidoFormData(data)

    //Envío el FormData al servidor
    enviarFormDataAjax('http://localhost:8080/datos',data)
})

/* ----------------------------------------------------------- */
/*    Envío de información al servidor contenida en FormData   */
/* ----------------------------------------------------------- */
function enviarFormDataAjax(url, data) {
    const xhr = new XMLHttpRequest()
    xhr.open('post',url)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            console.log(xhr.response)
        }
        else {
            console.error('Error el enviar los datos', xhr.status)
        }
    })
    xhr.addEventListener('error', e => {
        console.error('Error en la comunicación ajax', e)
    })
    xhr.send(data)
}
