import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";

import Trabajadores from "./pages/Trabajadores";
import Clientes from "./pages/Clientes";
import { useUser } from "./Context/user-context";


function App() {
  const { auth } = useUser();
  return (
    <BrowserRouter>
      {auth ? (
        <Switch>
          <Layout>
            <Route exact path="/usuarios" component={Trabajadores} />
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/station" component={Clientes} />
          </Layout>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App
