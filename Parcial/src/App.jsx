import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value.trim());
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 3 || nombre.startsWith(' ') || descripcion.length < 6) {
      setError(true);
    } else {
      setFormularioEnviado(true);
    }
  };

  return (
    <div className="App">
      {!formularioEnviado ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
          </div>
          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <input type="text" id="descripcion" value={descripcion} onChange={handleDescripcionChange} />
          </div>
          <button type="submit">Enviar</button>
          {error && <p>Por favor chequea que la información sea correcta</p>}
        </form>
      ) : (
        <Card nombre={nombre} descripcion={descripcion} />
      )}
    </div>
  );
}

export default App;
