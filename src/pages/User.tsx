import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./styles/User.scss";
import { useEffect, useState } from "react";

function User() {

    const [loginAttempts, setLoginAttempts] = useState<{ createdAt: string; success: boolean }[]>([]);

    useEffect(() => {
        const fetchLoginAttempts = (token: string | null) => {
            const headers = {
                'Authorization': `Bearer ${token}`
            };

            fetch('http://localhost:8080/api/auth/loginAttempts', {
                method: 'GET',
                headers: headers
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener los datos de intentos de inicion de sesión.');
                    }
                    return response.json();
                })
                .then(data => {
                    setLoginAttempts(data);
                    console.log('Intentos de inicio de sesión: ', data);
                })
                .catch(error => {
                    console.error('Error: ', error);
                });
        };

        const token = localStorage.getItem("token");
        fetchLoginAttempts(token);
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        navigate("/menu");
    };

    return (
        <>
            <div className="container">
                <Header />
                <div className="userInfo">
                    <h2>Detalles de usuario</h2>
                    <p><strong>Username:</strong> user</p>
                    <p><strong>Name:</strong> name</p>
                    <p><strong>Lastname:</strong> lastname</p>
                    <p><strong>Email:</strong> example@gmail.com</p>
                </div>
                <div className="loggingInfo">
                    <h2>Intentos de inicio de sesión</h2>
                    <div className="logginAttempts" style={{ overflowY: 'scroll', height: '200px' }}>
                        {loginAttempts.map((attempt, index) => (
                            <div key={index}>
                                <p><strong>Inicio de sesión {index + 1}</strong></p>
                                <p><strong>Fecha:</strong> {new Date(attempt.createdAt).toLocaleString()}</p>
                                <p>{attempt.success ? 'Correcto' : 'Fallido'}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleLogout}>Cerrar sesión</button>
                <Footer />
            </div>
        </>
    );
}

export default User;