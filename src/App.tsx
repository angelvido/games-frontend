//import { useState } from 'react'
import "./App.scss";
import "./main.scss";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import springLogo from "./assets/spring.svg";
import javaLogo from "./assets/java.svg";
import typescriptLogo from "./assets/typescript.svg";

function App() {
  return (
    <div className="container">
      <h1>Playground Games</h1>
      <div className="modeButtons">
        <button>Un jugador</button>
        <button>Multijugador</button>
      </div>
      <div className="techInfo">
        <p>
          Frontend realizado con Vite.js y React.js en TypeScript y Backend
          realizado con Spring Boot en Java.
        </p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="techLogo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="techLogo" alt="React logo" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img
              src={typescriptLogo}
              className="techLogo"
              alt="TypeScript logo"
            />
          </a>
          <a href="https://spring.io/" target="_blank">
            <img src={springLogo} className="techLogo" alt="Spring Boot logo" />
          </a>
          <a href="https://www.java.com/es/" target="_blank">
            <img src={javaLogo} className="techLogo" alt="Java logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
