import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import './App.css'
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/home.jsx";
import Cadastro from "./pages/cadastro.jsx";
import Login from "./pages/login.jsx";

import Aprendiz from "./pages/aprendiz/aprendiz-main.jsx";
import Emprestimo from "./pages/aprendiz/emprestimo.jsx";

import Adm from "./pages/adm/adm-relatorio.jsx";
import Problema from "./pages/aprendiz/problema";


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* TELAS APRENDIZ */}
        <Route path="/aprendiz" element={<Aprendiz />} />
        <Route path="/aprendiz/emprestimo" element={ <Emprestimo /> }/>
        <Route path="/aprendiz/problema" element={ <Problema /> }/>
        {/* TELAS ADM */}
        <Route path="/adm" element={<Adm />} />
      </Route>
    )
  );

  return (
    <><RouterProvider router={router} /></>
  );
};
