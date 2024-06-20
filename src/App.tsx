import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import "./main.scss";
import Spinner from "./components/Spinner";
import { Suspense, lazy } from "react";
import User from "./pages/User";
import QuizMenu from "./pages/QuizMenu";
const Menu = lazy(() => import("./pages/Menu"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  const username = localStorage.getItem("username");

  const routes = [
    { index: true, element: <Menu /> }, 
    { path: "game", element: <QuizMenu /> }, // TODO - Cambiar el componente por un componente de selección de juegos
    { path: "game/sports", element: <QuizPage topic="SPO" /> },
    { path: "game/science", element: <QuizPage topic="SCI" /> },
    { path: "game/technology", element: <QuizPage topic="TECH" /> },
    { path: "game/history", element: <QuizPage topic="HIS" /> },
    { path: "game/art", element: <QuizPage topic="ART" /> },
    { path: "game/geography", element: <QuizPage topic="GEO" /> },
    { path: "stats", element: <Leaderboard /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ];

  if (username) {
    routes.push({ path: `${username}`, element: <User /> });
  }

  const router = createBrowserRouter([
    {
      path: "",
      children: routes,
    },
    { path: "*", element: <Menu /> },
  ]);

  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
