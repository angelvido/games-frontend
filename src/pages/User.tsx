import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./styles/User.scss";
import { useEffect, useState } from "react";

function User() {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
  });
  const [loginAttempts, setLoginAttempts] = useState<
    { createdAt: string; success: boolean }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDataAndLoginAttempts = (token: string | null) => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

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

    const token = localStorage.getItem("token");
    fetchUserDataAndLoginAttempts(token);
  }, []);

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
              <strong>Username:</strong> {userData.username}
            </p>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Lastname:</strong> {userData.lastname}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
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
        <button onClick={handleLogout} className="logoutButton">Cerrar sesión</button>
        <Footer />
      </div>
    </>
  );
}

export default User;
