import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function DescripcionProducto({ producto, img, precio, tipo }) {
  return (
    <div className="flex-prod">
      <br />
      <h2>Detalle del producto</h2>
      <div className="producto">{producto}</div>
      <div>{img && <img src={img} alt="" width={300} height={300} />}</div>
      <div>
        <p className="prod-desc">{precio}</p>
        <p className="prod-desc">{tipo}</p>
        <Link to="/login">Inicia Sesion para comprar</Link>
        <br /> <br />
      </div>
    </div>
  );
}

export default DescripcionProducto;
