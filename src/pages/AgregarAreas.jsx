import React, { useState } from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import { useLocation } from "react-router-dom";
import { useModal } from "../Context/modal-context";
import Axios from "axios";
function AgregarAreas() {

  const { setLoading } = useModal();
  const [nombreArea, setNombreArea] = useState("");
  const [error, setError] = useState(false);
  const location = useLocation();

  const handleAgregar = async () => {
    setLoading(true);
    if (nombreArea === "") {
      setError(true);
      setLoading(false);
      return;
    }
    const area = {
      empresa: location.state.Empresa,
      nombre: nombreArea,
    };
    try {
      await Axios.post("/area", area);
      setNombreArea("");
    } catch (error) {
      setError(true)
    } finally{
      setLoading(false)
    }
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
