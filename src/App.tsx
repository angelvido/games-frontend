import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import "./main.scss";
import Spinner from "./components/Spinner";
import { Suspense, lazy } from "react";
const Menu = lazy(() => import("./pages/Menu"));
const TestPage = lazy(() => import("./pages/TestPage"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const router = createBrowserRouter([
  {
    path: "",
    children: [
      { index: true, element: <Menu /> },
      { path: "game", element: <TestPage /> },
      { path: "stats", element: <Leaderboard /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  { path: "*", element: <Menu /> },
]);

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
