import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormEstacion from "../components/FormEstacion";

function AgregarEstacion() {
  return (
    <>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Agrega una estacion
      </Typography>
      <FormEstacion />
    </>
  );
}

export default AgregarEstacion;
