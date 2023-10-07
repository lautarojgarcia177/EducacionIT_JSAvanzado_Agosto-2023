class Persona {
    private _nombre: string;
    private _edad: number;
    private _esHombre: boolean;
    constructor(nombre: string, edad: number, esHombre: boolean) {
        this._nombre = nombre;
        this._edad = edad;
        this._esHombre = esHombre;
    }
    public obtenerSaludo(): string {
        return `${this.nombre} te saluda!`;
    }
    public saludar(): void {
        console.log(`${this.nombre} te saluda!`);
    }
    public get nombre() {
        return this._nombre;
    }
}

const lautaro = new Persona("Lautaro", 28, true);

console.log(lautaro.nombre);