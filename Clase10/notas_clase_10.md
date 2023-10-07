# Node.js

LTS = Long Term Support

## Versionado semantico

Version 18.18.0

```
function suma(n1, n2) {
	return n1, n2;
}
```

### Patch version:

Cambios menores que no afectan al uso de la aplicacion

Version 18.18.1

```
function suma(n1,n2) {
	if (typeof n1 !== 'number' && isNaN(n2)) {|
		return new Error('Alguno de los valores ingresados no es un numero')
	}
	return n1 + n2
}
```

### Minor version:

Cambios que afectan al uso de la aplicacion pero que sigue funcionando lo que funcionaba antes

Version 18.19.0

```
function suma (...n) {
 let acumulador = 0;
    for (let numero of n) {
        acumulador+=numero;
    }
    return acumulador;
}
```

### Mayor version:

Cambios que afectan al uso de la aplicacion pero que pueden romper funcionando lo que funcionaba antes

Version 19.0.0
```
function sumaNumeros(...n) {
	// Validar que todos los n sean number	
	 let acumulador = 0;
    for (let numero of n) {
	if (isNaN(numero)) {
		return new Error('Alguno de los valores ingresados no es un numero')
	}
        acumulador+=numero;
    }
    return acumulador;	
}
```

# Typescript

Es un lenguaje de programacion que me permite escribir javascript con tipos.
Para utilizarlo, debo escribirlo en archivos .ts, luego utilizo el compilador para transpilar el codigo .ts a .js

Primero debo instalar el compilador typescript:
`npm install --global typescript`
Luego puedo utilizarlo ejecutando desde la terminal
`$ tsc <nombre_del_archivo>.ts`
Y eso me va a generar un archivo .js que puede ser ejecutado por node.js o el navegador web.
