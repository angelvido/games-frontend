import Header from "../components/Header";
import Footer from "../components/Footer";

import "./styles/Login.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.status == 200) {
        const data = await response.json();
        const { username, token } = data;
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        console.log('Inicio de sesión de usuario realizado correctamente');
        navigate("/");
      } else {
        console.error('Error al iniciar sesión el usuario: ', response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud: ', error);
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="loginBox">
          <form onSubmit={handleSubmit}>
            <h3>Inicio de sesión</h3>

            <label>Nombre de usuario:</label>
            <input type="text" id="nombre" name="username" value={formData.username} onChange={handleChange} placeholder="Ingrese nombre de usuario" required />

            <label>Contraseña:</label>
            <input type="password" id="contraseña" name="password" value={formData.password} onChange={handleChange} placeholder="Ingrese contraseña" required />

            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
