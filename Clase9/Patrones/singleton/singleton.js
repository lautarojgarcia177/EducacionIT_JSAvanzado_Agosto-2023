let instancia;

function Personaje() {
  if (instancia == null) {
    this.id = Math.random();
    instancia = this;
  } else {
    return instancia;
  }
}
