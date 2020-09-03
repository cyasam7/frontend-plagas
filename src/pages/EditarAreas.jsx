import React, { useState, useEffect } from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
function EditarAreas() {
  const { idArea } = useParams();
  const history = useHistory();
  const [nombreArea, setNombreArea] = useState("");
  const [error, seterror] = useState(false);

  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/area/${idArea}`);
      return data;
    }
    initial().then((area) => {
      setNombreArea(area.nombre);
    });
  }, [idArea]);

  const handleActualizar = () => {
    if (error === "") {
      seterror(true);
      return;
    }
    const newArea = {
      nombre: nombreArea,
    };
    Axios.patch(`/area/${idArea}`, newArea).then(() => {
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
          <SuccessButton onClick={handleActualizar} fullWidth>
            Guardar
          </SuccessButton>
        </Grid>
      </Grid>
    </>
  );
}

export default EditarAreas;
