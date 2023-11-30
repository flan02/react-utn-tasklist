import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="login-cont">
      <h1>Registrarse</h1>
      <br />
      <br />
      <div className="form-cont">
        <form action="" className="form">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="email" id="nombre" />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
          <br />
          <label htmlFor="repassword">Repetir Contraseña</label>
          <input type="password" name="repassword" id="repassword" />
          <button type="submit" className="btn-submit">
            Crear cuenta
          </button>
        </form>
      </div>
      <br />
      <h3>Ya tiene cuenta? Inicia Sesion</h3>
      <br />
      <Link to={"/login"} className="signup-btn">
        Iniciar Sesion
      </Link>
    </div>
  );
}

export default SignUp;
