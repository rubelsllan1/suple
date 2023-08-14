import React, { useState } from 'react';
import './App.css';

function Bandera({ colores }) {
  return (
    <div className="bandera">
      {colores.map((color, index) => (
        <div key={index} className={`bandera-rect ${color.toLowerCase()}`} />
      ))}
    </div>
  );
}

function App() {
  const [bandera, setBandera] = useState({ colores: [] });

  const mostrarBandera = (pais) => {
    let colores = [];
    switch (pais) {
      case 'Ecuador':
        colores = ['Amarillo', 'Azul', 'Rojo'];
        break;
      case 'Bolivia':
        colores = ['Rojo', 'Amarillo', 'Verde'];
        break;
      case 'Argentina':
        colores = ['Celeste', 'Blanco', 'Celeste'];
        break;
      default:
        colores = [];
    }
    setBandera({ colores });
  };

  return (
    <div className="App">
      <h1>Bandera de Países</h1>
      <button onClick={() => mostrarBandera('Ecuador')}>Ecuador</button>
      <button onClick={() => mostrarBandera('Bolivia')}>Bolivia</button>
      <button onClick={() => mostrarBandera('Argentina')}>Argentina</button>
      {bandera.colores.length > 0 && <Bandera colores={bandera.colores} />}
    </div>
  );
}

export default App;
