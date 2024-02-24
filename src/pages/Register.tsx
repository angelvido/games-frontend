import Header from "../components/Header";
import Footer from "../components/Footer";

import "./styles/Register.scss";

function Register() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="registerBox">
          <form>
            <h3>Registro de usuario</h3>

            <label>Nombre de usuario:</label>
            <input type="text" id="username" name="username" required />

            <label>Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label>Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required />

            <label>Correo electrónico:</label>
            <input type="email" id="correo" name="correo" required />

            <label>Contraseña:</label>
            <input
              type="password"
              id="contraseña1"
              name="contraseña1"
              required
            />

            <label>Repita la contraseña:</label>
            <input
              type="password"
              id="contraseña2"
              name="contraseña2"
              required
            />

            <button>Registrarse</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
