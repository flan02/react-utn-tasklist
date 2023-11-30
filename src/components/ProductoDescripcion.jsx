import { useState } from "react";

import PrimeraLinea from "./PrimeraLinea";
import SegundaLinea from "./SegundaLinea";

function ProductoDescripcion() {
  const [compra, setCompra] = useState(false);
  return (
    <div className="orden-compra">
      <div className="descripcion">
        <PrimeraLinea />
        <SegundaLinea />
      </div>
      <div className="btn-comprar">
        <div>
          <button className="btn-primary" onClick={() => setCompra(true)}>
            Comprar
          </button>
        </div>
        <div>{compra && <p>Gracias por su compra</p>}</div>
      </div>
    </div>
  );
}

export default ProductoDescripcion;
