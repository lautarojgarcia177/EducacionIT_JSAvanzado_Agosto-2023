var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esHombre) {
        this._nombre = nombre;
        this._edad = edad;
        this._esHombre = esHombre;
    }
    Persona.prototype.obtenerSaludo = function () {
        return "".concat(this.nombre, " te saluda!");
    };
    Persona.prototype.saludar = function () {
        console.log("".concat(this.nombre, " te saluda!"));
    };
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var lautaro = new Persona("Lautaro", 28, true);
console.log(lautaro.nombre);
