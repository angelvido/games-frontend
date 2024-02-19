//import { useState } from 'react'
import "./utils/styles/App.scss";
import "./utils/styles/main.scss";
import TechInfo from "./components/TechInfo.tsx";
import Header from "./components/Header.tsx";
//import Register from "./Register.tsx";
//import Login from "./Login.tsx";
import TestPage from "./TestPage.tsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <TestPage />
        <TechInfo />
      </div>
    </>
  );
}

export default App;
