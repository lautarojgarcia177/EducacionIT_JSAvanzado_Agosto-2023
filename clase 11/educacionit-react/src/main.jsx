import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Card titulo="Titulo card 1" descripcion="Descripcion card 1" />
    <Card titulo="Titulo card 2" descripcion="Descripcion card 2" />
  </>
);
