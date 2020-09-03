import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";

import Usuarios from "./pages/Usuarios";
import AgregarUsuarios from "./pages/AgregarUsuarios";
import EditarUsuarios from "./pages/EditarUsuarios";

import Empresas from "./pages/Empresas";
import AgregarEmpresas from "./pages/AgregarEmpresa";
import EditarEmpresas from "./pages/EditarEmpresa";

import Areas from "./pages/Areas";
import AgregarAreas from "./pages/AgregarAreas";
import EditarAreas from "./pages/EditarAreas";

import Estaciones from "./pages/Estaciones";
import AgregarEstaciones from "./pages/AgregarEstacion";
import EditarEstaciones from "./pages/EditarEstacion";

import Graficas from "./pages/Graficas";

import Historial from "./pages/Historial";
import PrivateRoute from "./components/PrivateRoute";
import LoginRoute from "./components/LoginRoute";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LoginRoute exact path="/">
          <Login />
        </LoginRoute>
        <Layout>
          <PrivateRoute exact path="/usuarios">
            <Usuarios />
          </PrivateRoute>
          <PrivateRoute exact path="/usuarios/agregar">
            <AgregarUsuarios />
          </PrivateRoute>
          <PrivateRoute exact path="/usuarios/editar/:idUsuario">
            <EditarUsuarios />
          </PrivateRoute>
          <PrivateRoute exact path="/empresas">
            <Empresas />
          </PrivateRoute>
          <PrivateRoute exact path="/empresas/agregar">
            <AgregarEmpresas />
          </PrivateRoute>
          <PrivateRoute exact path="/empresas/editar/:idEmpresa">
            <EditarEmpresas />
          </PrivateRoute>
          <PrivateRoute exact path="/areas/">
            <Areas />
          </PrivateRoute>
          <PrivateRoute exact path="/areas/agregar">
            <AgregarAreas />
          </PrivateRoute>
          <PrivateRoute exact path="/areas/editar/:idArea">
            <EditarAreas />
          </PrivateRoute>
          <PrivateRoute exact path="/estaciones/">
            <Estaciones />
          </PrivateRoute>
          <PrivateRoute exact path="/estaciones/agregar">
            <AgregarEstaciones />
          </PrivateRoute>
          <PrivateRoute exact path="/estaciones/editar/:idEstacion">
            <EditarEstaciones />
          </PrivateRoute>
          <PrivateRoute exact path="/historial">
            <Historial />
          </PrivateRoute>
          <PrivateRoute exact path="/Graficas">
            <Graficas />
          </PrivateRoute>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
