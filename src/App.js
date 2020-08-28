import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Login from './pages/Login'
import Layout from './components/Layout'

import Usuarios from './pages/Usuarios'
import AgregarUsuarios from './pages/AgregarUsuarios'
import EditarUsuarios from './pages/EditarUsuarios'


import Empresas from './pages/Empresas'
import AgregarEmpresas from './pages/AgregarEmpresa'
import EditarEmpresas from './pages/EditarEmpresa'

import Areas from './pages/Areas'
import AgregarAreas from './pages/AgregarAreas'
import EditarAreas from './pages/EditarAreas'

import Estaciones from './pages/Estaciones'
import AgregarEstaciones from './pages/AgregarEstacion'
import EditarEstaciones from './pages/EditarEstacion'


import Graficas from './pages/Graficas';

import Historial from './pages/Historial';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Layout>
        <Route exact path="/usuarios" component={Usuarios}/>
        <Route exact path="/usuarios/agregar" component={AgregarUsuarios}/>
        <Route exact path="/usuarios/editar/:idUsuario" component={EditarUsuarios}/>
        <Route exact path="/empresas" component={Empresas}/>
        <Route exact path="/empresas/agregar" component={AgregarEmpresas}/>
        <Route exact path="/empresas/editar/:idEmpresa" component={EditarEmpresas}/>
        <Route exact path="/areas/" component={Areas}/>
        <Route exact path="/areas/agregar" component={AgregarAreas}/>
        <Route exact path="/areas/editar/:idArea" component={EditarAreas}/>
        <Route exact path="/estaciones/" component={Estaciones}/>
        <Route exact path="/estaciones/agregar" component={AgregarEstaciones}/>
        <Route exact path="/estaciones/editar/:idEstacion" component={EditarEstaciones}/>
        <Route exact path="/historial" component={Historial}/>
        <Route exact path="/Graficas" component={Graficas}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
