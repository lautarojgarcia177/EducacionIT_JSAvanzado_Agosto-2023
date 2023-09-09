SPA = Single Page Application

Funcionan con AJAX

Ejemplos:
- Google Maps
- Homebanking
- Redes sociales
- Spotify
- Youtube
- Gmail

NO son SPA:
- Wikipedia
- Google

Conceptos clave:
- Routeo (Navegacion dentro de una SPA)
- Comando universal de VSCODE: ctrol+shift+p



Pasos de Handlebars:
1) Cargar el archivo plantilla .hbs 
2) Compilar el archivo con Handlebars, utilizando un objeto con datos
3) Injectar el resultado del paso 2 en un elemento HTML

Sintaxis en plantillas handlebars:
Cuando ejecutamos Handlebars.compile(plantilla), y el retorno de esa funcion lo llamamos con 
un objeto de datos, podemos utilizar esos datos para renderizar la plantilla.
- Interpolacion: {{ nombre_propiedad }} 
- If: {{#if nombre_propiedad}}<contenido a renderizar si la propiedad existe>{{/if}}
- Iteracion: {{#nombre_propiedad_array}}{{this}}{{/nombre_propiedad_array}}