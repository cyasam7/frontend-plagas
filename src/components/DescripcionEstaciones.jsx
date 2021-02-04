import React from "react";
import { Grid, Typography } from "@material-ui/core";
function DescripcionEstaciones({ estaciones }) {
  return (
    <Grid container justify="space-between">
      <Grid item xs={3}>
        <Typography>
          Roedores: {estaciones.filter((est) => est.tipo === "Roedores").length}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>
          Rastreros:{" "}
          {estaciones.filter((est) => est.tipo === "Rastreros").length}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>
          Voladores:{" "}
          {estaciones.filter((est) => est.tipo === "Voladores").length}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>
          Yellow Jacket:{" "}
          {estaciones.filter((est) => est.tipo === "Yellow Jacket").length}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DescripcionEstaciones;
