import React, { useState } from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import { useLocation, useHistory } from "react-router-dom";

import Axios from "axios";
function AgregarAreas() {
  const history = useHistory();
  const [nombreArea, setNombreArea] = useState("");
  const [error, setError] = useState(false);
  const location = useLocation();

  const handleAgregar = () => {
    if (nombreArea === "") {
      setError(true);
      return;
    }
    const area = {
      empresa: location.state.Empresa,
      nombre: nombreArea,
    };
    console.log(area);
    Axios.post("/area", area).then(({ data }) => {
      history.push("/areas");
    });
  };
  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        Selecciona el nombre del Area
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={nombreArea}
            error={error}
            onChange={(e) => setNombreArea(e.target.value)}
            variant="outlined"
            fullWidth
            helperText="Nombre del area que estan las trampas del cliente"
            placeholder="Nombre"
          />
        </Grid>
        <Grid item xs={12}>
          <SuccessButton onClick={handleAgregar} fullWidth>
            Guardar
          </SuccessButton>
        </Grid>
      </Grid>
    </>
  );
}

export default AgregarAreas;
