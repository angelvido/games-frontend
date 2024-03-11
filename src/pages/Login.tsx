import Header from "../components/Header";
import Footer from "../components/Footer";

import "./styles/Login.scss";

function Login() {
  return (
    <>
    <div className="container">
      <Header />
      <div className="loginBox">
        <form>
          <h3>Inicio de sesión</h3>

          <label>Nombre de usuario:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese nombre de usuario" required />

          <label>Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" placeholder="Ingrese contraseña" required />

          <button>Iniciar Sesión</button>
        </form>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default Login;
