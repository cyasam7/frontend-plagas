import React from "react";
import { useUser } from "./Context/user-context";
import { CircularProgress, Grid } from "@material-ui/core";
import { Switch, BrowserRouter, Route} from "react-router-dom";

import Usuarios from "./pages/Usuarios";
import AgregarUsuarios from "./pages/AgregarUsuarios";
import EditarUsuarios from "./pages/EditarUsuarios";

import Empresas from "./pages/Empresas";
import AgregarEmpresas from "./pages/AgregarEmpresa";
import EditarEmpresas from "./pages/EditarEmpresa";
import AgregarContactoEmpresa from "./pages/AgregarContactoEmpresa";
import ContactoEmpresa from "./pages/ContactoEmpresa";
import EditarContactoEmpresa from "./pages/EditarContactoEmpresa";

import Areas from "./pages/Areas";
import AgregarAreas from "./pages/AgregarAreas";
import EditarAreas from "./pages/EditarAreas";

import Estaciones from "./pages/Estaciones";
import AgregarEstaciones from "./pages/AgregarEstacion";
import EditarEstaciones from "./pages/EditarEstacion";
import QRList from "./pages/QRList";

import Graficas from "./pages/Graficas";
import GraficasMes from "./pages/GraficasMes";
import GraficasAñoArea from "./pages/GraficasAñoArea";
import GraficasAnual from "./pages/GraficasAnual";

import Historial from "./pages/Historial";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Layout from "./components/Layout";

import Cliente from "./pages/Cliente";

import EditarRevision from './pages/EditarRevision'
import Revision from './pages/Revision'

function App() {
  const { loading } = useUser();
  if (loading) {
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: "100%" }}
      >
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact path="/Cliente">
            <Cliente />
          </PrivateRoute>
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
            <PrivateRoute exact path="/empresas/agregar/contacto/:idEmpresa">
              <AgregarContactoEmpresa />
            </PrivateRoute>
            <PrivateRoute exact path="/empresas/trabajadores/:idEmpresa">
              <ContactoEmpresa />
            </PrivateRoute>
            <PrivateRoute exact path="/empresas/editar/contacto/:idUsuario">
              <EditarContactoEmpresa />
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
            <PrivateRoute exact path="/QRList/:idEmpresa/:idArea">
              <QRList />
            </PrivateRoute>
            <PrivateRoute exact path="/historial">
              <Historial />
            </PrivateRoute>
            <PrivateRoute exact path="/Graficas">
              <Graficas />
            </PrivateRoute>
            <PrivateRoute exact path="/Graficas/mes/:idEmpresa">
              <GraficasMes />
            </PrivateRoute>
            <PrivateRoute exact path="/Graficas/año/area/:idEmpresa">
              <GraficasAñoArea />
            </PrivateRoute>
            <PrivateRoute exact path="/Graficas/anual/:idEmpresa">
              <GraficasAnual />
            </PrivateRoute>
            <PrivateRoute exact path="/revision/:idRevision">
              <Revision />
            </PrivateRoute>
            <PrivateRoute exact path="/revision/editar/:idRevisionArea">
              <EditarRevision />
            </PrivateRoute>
          </Layout>
          <PrivateRoute>
              <>
              </>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
