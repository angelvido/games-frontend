//import { useState } from 'react'
import "./App.scss";
import "./main.scss";
import TechInfo from "./components/TechInfo.tsx";
import Header from "./components/Header.tsx";
//import Register from "./components/Register.tsx";
//import Login from "./components/Login.tsx";
import TestPage from "./components/TestPage.tsx";

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
