# Asincronismo

Es la posibilidad de ejecutar codigo en paralelo para obtener los resultados mas rapido.

Ejemplo:
Mientras estoy hirviendo el agua, voy lavando el arroz.

Conceptos clave:

- Callbacks
- Promesas

## Callbacks

Se pasa una funcionB (callback) como parametro a una funcionA, para que funcionA llame a funcionB al finalizar sus tareas anteriores. Por convencion, FuncionA le va a pasar el como primer argumento de funcionB el error si hubiera.

## Promesas

Son otra forma de trabajar de forma asincrona, evitando el callback hell.
Consisten en construirlas con una funcion que tiene dos parametros, resolve y reject, los cuales son funciones que se llamaran ante el cumplimiento (resolve) o rechazo (reject) de la misma.

Las promesas se pueden usar con la sintaxis .then().catch() o se pueden utilizar con
async function () {
    try {
        await ...
    }
    catch(error) {
        
    }
}

#### Como trabajar varias promesas juntas

Para juntar varias promesas como si fuera una sola, utilizamos Promise.all() o Promise.race()

Promise.all() Cuando queremos que nos notifique cuando se hayan finalizado todas las promesas.

Promise.race() Cuando queremos que nos notifique una sola vez cuando se haya finalizado la primera.

### Datos de color

Javascript utiliza hosting para las declaraciones de variables y funciones, eso significa que "Eleva" O lleva al principio del script todas las declaraciones, y no debemos preocuparnos si declaramos algo antes o despues.