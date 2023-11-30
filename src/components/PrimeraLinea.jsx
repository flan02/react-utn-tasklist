//import React from 'react'

function PrimeraLinea() {
  return (
    <div className="primera-linea">
      <div>
        <h3>Nombre del producto</h3>
        <input type="text" disabled placeholder="Chocolate" />
      </div>
      <div>
        <h3>Descripcion del producto</h3>
        <input type="text" disabled placeholder="Dulces" />
      </div>
      <div>
        <h3>Precio del producto</h3>
        <input type="text" disabled placeholder="$1000" />
      </div>
    </div>
  );
}

export default PrimeraLinea;
