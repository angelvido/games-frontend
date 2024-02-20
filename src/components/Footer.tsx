import reactLogo from "../assets/icons/react.svg";
import viteLogo from "../assets/icons/vite.svg";
import springLogo from "../assets/icons/spring.svg";
import javaLogo from "../assets/icons/java.svg";
import typescriptLogo from "../assets/icons/typescript.svg";

import "./styles/Footer.scss";

function Footer() {
  return (
    <div className="techInfo">
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
      <footer>
        Frontend realizado con Vite.js y React.js en TypeScript, y Backend
        realizado con Spring Boot en Java.
      </footer>
    </div>
  );
}

export default Footer;
