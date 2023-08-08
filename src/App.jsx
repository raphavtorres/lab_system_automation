import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import './App.css'
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/home.jsx";
import Cadastro from "./pages/cadastro.jsx";
import Login from "./pages/login.jsx";

import Aprendiz from "./pages/aprendiz/aprendiz-main.jsx";
import Emprestimo from "./pages/aprendiz/emprestimo.jsx";
import Problema from "./pages/aprendiz/problema";

import Relatorio from "./pages/adm/adm-relatorio.jsx";
import ListaProblemas from "./pages/adm/adm-problemas.jsx";



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
        <Route path="/adm" element={<Relatorio />} />
        <Route path="/adm/problemas" element={<ListaProblemas />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
