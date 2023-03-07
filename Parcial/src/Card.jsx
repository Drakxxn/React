import React from 'react';
import './App.css'

function Card(props) {
  const { nombre, descripcion } = props;

  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default Card;