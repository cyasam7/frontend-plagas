import React, { useState } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import CardEstacion from "../components/CardEstacion";
import { Link } from "react-router-dom";
function Estaciones() {
  const [Cliente, setCliente] = useState(false);
  const [Area, setArea] = useState(false);

  return (
    <>
      <Grid alignItems="center" container>
        <Grid xs={12} item md={10}>
          {/* <Autocomplete
            {...defaultProps}
            debug
            renderInput={(params) => (
              <TextField
                {...params}
                label="Codigo del cliente"
                margin="normal"
              />
            )}
          /> */}
        </Grid>
        <Grid xs={12} item md={2}>
          <SuccessButton onClick={() => setCliente(true)} fullWidth>
            Buscar
          </SuccessButton>
        </Grid>
      </Grid>
      {Cliente ? (
        <Grid alignItems="center" container>
          <Grid xs={12} item md={10}>
            {/* <Autocomplete
              {...defaultProps}
              debug
              renderInput={(params) => (
                <TextField {...params} label="Area" margin="normal" />
              )}
            /> */}
          </Grid>
          <Grid xs={12} item md={2}>
            <SuccessButton onClick={() => setArea(true)} fullWidth>
              Buscar
            </SuccessButton>
          </Grid>
        </Grid>
      ) : null}
      {Area ? (
        <>
          <Typography align="center" variant="h4" gutterBottom>
            Lista de estaciones
          </Typography>
          <Link to="/estaciones/agregar">
            <SuccessButton fullWidth>Agregar</SuccessButton>
          </Link>
          <Grid container spacing={1}>
            <Grid item md={4}>
              <CardEstacion />
            </Grid>
          </Grid>
        </>
      ) : (
        null
      )}
    </>
  );
}

export default Estaciones;
