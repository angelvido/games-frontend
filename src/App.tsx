import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import "./main.scss";
import Spinner from "./components/Spinner";
import { Suspense, lazy } from "react";
import User from "./pages/User";
const Menu = lazy(() => import("./pages/Menu"));
const TestPage = lazy(() => import("./pages/TestPage"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  const username = localStorage.getItem("username");

  const routes = [
    { index: true, element: <Menu /> },
    { path: "game", element: <TestPage /> },
    { path: "stats", element: <Leaderboard /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ];

  if (username) {
    routes.push({ path: `${username}`, element: <User /> })
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
