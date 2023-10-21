import "./Card.css";

export default function Card(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </div>
  );
}
