import React from "react";
import { Typography } from "@material-ui/core";
import FormEstacion from "../components/FormEstacion";
import { useHistory} from 'react-router-dom'
import Axios from "axios";
function AgregarEstacion() {
  const history = useHistory();

  const handleCrearEstacion = async (estacion) =>{
    await Axios.post("/estacion",estacion);
    history.push("/estaciones");
  }

  return (
    <>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Agrega una estacion
      </Typography>
      <FormEstacion handle={handleCrearEstacion}/>
    </>
  );
}

export default AgregarEstacion;
