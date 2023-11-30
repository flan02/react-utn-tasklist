import { Routes, Route, Link } from "react-router-dom";
import DescripcionProducto from "./DescripcionProducto";
import Welcome from "./Welcome";

function DetalleProducto() {
  return (
    <>
      <h2 className="detalle-prod">Listado de productos</h2>
      <div className="grid-cont">
        <div className="list-prod">
          <Link to="/prod1" className="link-prod">
            Fideos
          </Link>
          <Link to="/prod2" className="link-prod">
            Coca-Cola
          </Link>
          <Link to="/prod3" className="link-prod">
            Arroz
          </Link>
          <Link to="/prod4" className="link-prod">
            Oreo
          </Link>
          <Link to="/prod5" className="link-prod">
            Fernet
          </Link>
        </div>
        <div className="descripcion-prod">
          <Routes>
            <Route
              path={"/prod1"}
              element={
                <DescripcionProducto
                  producto="Fideos"
                  img="https://res.cloudinary.com/dhbig9jt8/image/upload/v1701221367/fideos_oskx54.jpg"
                  precio="ARS $450"
                  tipo="tipo: Pastas"
                />
              }
            />
            <Route
              path={"/prod2"}
              element={
                <DescripcionProducto
                  producto="Coca-Cola"
                  img="https://res.cloudinary.com/dhbig9jt8/image/upload/v1701222005/cocacola_cu4ea2.webp"
                  precio="ARS $900"
                  tipo="tipo: Gaseosa"
                />
              }
            />
            <Route
              path={"/prod3"}
              element={
                <DescripcionProducto
                  producto="Arroz"
                  img={
                    "https://res.cloudinary.com/dhbig9jt8/image/upload/v1701222454/arroz_evdku6.jpg"
                  }
                  precio="ARS $380"
                  tipo="tipo: Cereales"
                />
              }
            />
            <Route
              path={"/prod4"}
              element={
                <DescripcionProducto
                  producto="Oreo"
                  img={
                    "https://res.cloudinary.com/dhbig9jt8/image/upload/v1701222711/oreo_ilh5yx.jpg"
                  }
                  precio="ARS $420"
                  tipo="tipo: Galletitas dulces"
                />
              }
            />
            <Route
              path={"/prod5"}
              element={
                <DescripcionProducto
                  producto="Fernet"
                  img={
                    "https://res.cloudinary.com/dhbig9jt8/image/upload/v1701222908/fernet_kcw5ph.webp"
                  }
                  precio="ARS $3200"
                  tipo="tipo: Bebidas alcoholicas"
                />
              }
            />
            <Route path={"/"} element={<Welcome />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
{
  /*

*/
}

export default DetalleProducto;
