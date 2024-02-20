import "./styles/Login.scss";

function Login() {
  return (
    <>
    <div className="loginBox">
      <form>
        <h3>Inicio de sesión</h3>

        <label>Nombre de usuario o correo electrónico:</label>
        <input type="text" id="nombre" name="nombre" required/>

        <label>Contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" required/>

        <button>Iniciar Sesión</button>
      </form>
    </div>
    </>
  );
}

export default Login;