//import React from 'react'

import ProductoDescripcion from "./ProductoDescripcion";
import ProductoTitle from "./ProductoTitle";

function Producto() {
  return (
    <div className="producto-cont">
      <ProductoTitle />
      <ProductoDescripcion />
    </div>
  );
}

export default Producto;
