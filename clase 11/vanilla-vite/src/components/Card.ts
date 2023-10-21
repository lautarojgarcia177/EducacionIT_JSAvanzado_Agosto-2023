// Componente
export function setupCard(element: HTMLElement, titulo: string, descripcion: string) {
  const markup = `
  <div style="border: 2px solid grey; border-radius: 10px; width: 200px">
    <h2>${titulo}</h2>
    <p>${descripcion}</p>
  </div>
  `;
  element.innerHTML = markup;
}
