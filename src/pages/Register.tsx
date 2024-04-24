import Header from "../components/Header";
import Footer from "../components/Footer";

import "./styles/Register.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Las contraseñas no coinciden.");
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.status == 201) {
        console.log("Usuario registrado exitosamente");
        navigate("/login");
      } else {
        console.error("Error al registrar el usuario: ", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud: ", error);
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="registerBox">
          <form onSubmit={handleSubmit}>
            <h3>Registro de usuario</h3>

            <label>Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Ingrese un nombre de usuario"
              required
            />

            <label>Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingrese su nombre"
              required
            />

            <label>Apellidos:</label>
            <input
              type="text"
              id="apellidos"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Ingrese sus apellidos"
              required
            />

            <label>Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico"
              required
            />

            <label>Contraseña:</label>
            <input
              type="password"
              id="contraseña1"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingrese una contraseña"
              required
            />

            <label>Repita la contraseña:</label>
            <input
              type="password"
              id="contraseña2"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Ingrese de nuevo la contraseña"
              required
            />

            <button type="submit">Registrarse</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
