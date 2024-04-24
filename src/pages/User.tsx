import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./styles/User.scss";
import { FormEvent, useEffect, useState } from "react";
import { UserData } from "../models/interfaces/UserData";

function User() {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    name: "",
    lastname: "",
    email: "",
  });
  const [formData, setFormData] = useState<UserData>({
    username: "",
    name: "",
    lastname: "",
    email: "",
  });
  const [loginAttempts, setLoginAttempts] = useState<
    { createdAt: string; success: boolean }[]
  >([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchUserDataAndLoginAttempts = () => {
    //Peticion Datos de Usuario
    fetch("http://localhost:8080/api/user/data", {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del usuario.");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        console.log("Datos del usuario: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    //Peticion Intentos de Inicio de Sesion del Usuario
    fetch("http://localhost:8080/api/auth/loginAttempts", {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Error al obtener los datos de intentos de inicio de sesión."
          );
        }
        return response.json();
      })
      .then((data) => {
        setLoginAttempts(data);
        console.log("Intentos de inicio de sesión: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const fetchUpdateUser = (updatedData: UserData) => {
    const dataToSend = { ...updatedData };
    delete dataToSend['key'];
    console.log(dataToSend);

    fetch("http://localhost:8080/api/user/update", {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar los datos del usuario.");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        console.log("Log: ", data);
        fetchUserDataAndLoginAttempts();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    fetchUserDataAndLoginAttempts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedData: UserData = { ...userData };
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== userData[key]) {
        updatedData[key] = formData[key];
      }
    });

    if (Object.keys(updatedData).length > 0) {
      fetchUpdateUser(updatedData);
    } else {
      console.log("No se realizan cambios.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/menu");
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="userDetails">
          <div className="userInfo">
            <h2>Detalles de usuario</h2>
            <p>
              <strong>Nombre de usuario:</strong> {userData.username}
            </p>
            <p>
              <strong>Nombre:</strong> {userData.name}
            </p>
            <p>
              <strong>Apellidos:</strong> {userData.lastname}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </div>
          <div className="updatedUserDetails">
            <h2>Modificar datos de usuario</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre de usuario:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Modificación de nombre de usuario"
                />
              </label>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Modificación de nombre"
                />
              </label>
              <label>
                Apellidos:
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Modificación de apellidos"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Modificación de email"
                />
              </label>
              <button type="submit" className="formButton">
                Guardar cambios
              </button>
            </form>
          </div>
          <div className="loggingInfo">
            <h2>Intentos de inicio de sesión</h2>
            <div
              className="loggingAttempts"
              style={{ overflowY: "scroll", height: "200px" }}
            >
              {loginAttempts.map((attempt, index) => (
                <div key={index}>
                  <p>
                    <strong>Inicio de sesión {index + 1}</strong>
                  </p>
                  <p>
                    <strong>Fecha:</strong>{" "}
                    {new Date(attempt.createdAt).toLocaleString()}
                  </p>
                  <p>{attempt.success ? "Correcto" : "Fallido"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="logoutButton">
          Cerrar sesión
        </button>
        <Footer />
      </div>
    </>
  );
}

export default User;
