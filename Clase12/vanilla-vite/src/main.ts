import { setupCard } from "./components/Card";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="componente-1"></div>
  <div id="componente-2"></div>
`;

const refComponente1 = document.querySelector<HTMLElement>("#componente-1")!;
const titulo1 = "Titulo del componente 1";
const descripcion1 = "Descripcion del componente 1";
setupCard(refComponente1, titulo1, descripcion1);

const refComponente2 = document.querySelector<HTMLElement>("#componente-2")!;
const titulo2 = "Titulo del componente 2";
const descripcion2 = "Descripcion del componente 2";
setupCard(refComponente2, titulo2, descripcion2);