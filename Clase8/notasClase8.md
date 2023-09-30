# Formularios

Nos permiten enviar informacion, Podemos utilizarlos como vienen por defecto con HTML. o podemos controlarlos a traves de Javascript

Conceptos clave:

- enctype (application/x-www-urlencoded, multipart/form-data)
- FormData

# Node.js

Es un entorno de ejecucion Javascript, nos permite correrlo en el servidor.
Con node.js podemos levantar un servidor para que reciba la informacion que se envia en el formulario.

Conceptos clave:

- nvm (Para administrar la version de la instalacion de node.js)
- npm (Para administrar los paquetes de node, viene instalado por defecto con node.js)

## Objetos

Son protagonistas en JS, todo en JS es o valores primitivos o un objeto

Valores primitivos en Js:

- Number
- String
- Boolean
- Undefined
- Symbol
- BigInt
- null

Todo lo demas son objetos (inclusive funciones)

### Prototipos

Todo objeto en JS hereda de su prototipo, a su vez su prototipo tiene su prototipo, hasta llegar a Object que no tiene prototipo. Esto se conoce como Prototype chain (Cadena de prototipos)

#### Hay 4 formas de crear objetos en JS

- Literal
- Object.create (Para elegir el prototivo del objeto)
- Constructor Function
- Clases
