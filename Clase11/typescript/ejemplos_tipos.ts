/*
 Tipos
*/

type manzana = {
    calorias: number;
    carbohidratos: number;
    fibra: number;
    especie: "GALA" | "GOLDEN"; // Union type
  };
  
  const miManzana = {
    calorias: 15,
    carbohidratos: 15,
    fibra: 10,
    especie: "GOLDEN",
  };
  
  /*
  Interfaces
  */
  interface Fruta {
      calorias: number;
      carbohidratos: number;
      fibra: number;
      especie: string;
  }
  interface Pera extends Fruta {
      color: string;
  }
  
  const miPera: Pera = {
      calorias: 1,
      carbohidratos: 1,
      color: 'Verde',
      especie: 'GOLDEN',
      fibra: 1,
  }
  
  /* 
      Clases
  */
  
  class Mascota {
      private _edad: number;
      private _tieneHambre: boolean;
      constructor(edad: number) {
          this._edad = edad;
          this._tieneHambre = true;
      }
      get edad() {
          return this._edad;
      }
      get tieneHambre() {
          return this._tieneHambre;
      }
      public alimentar() {
          this._tieneHambre = false;
          setTimeout(() => {
              this._tieneHambre = true;
          }, 20000)
      }
  }
  
  class Perro extends Mascota {
      raza: string;
      constructor(raza: string, edad: number) {
          super(edad);
          this.raza = raza;
      }
  }
  
  class Gato extends Mascota {
      // ...
      constructor(edad: number) {
          super(edad)
      }
  }
  
  const bulldog = new Perro('bulldog', 10);
  
  const carey = new Gato(89);
  
  console.log(bulldog);