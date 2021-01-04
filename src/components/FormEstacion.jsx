import React, { useState, useEffect } from "react";
import {
  Paper,
  TextField,
  Grid,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box,
} from "@material-ui/core";
import { SuccessButton, ErrorButton } from "../components/Buttons";
import { useHistory, useLocation } from "react-router-dom";
const estations = [
  {
    value: "Roedores",
    label: "Roedores",
  },
  {
    value: "Rastreros",
    label: "Rastreros",
  },
  {
    value: "Voladores",
    label: "Voladores",
  },
  {
    value: "Yellow Jacket",
    label: "Yellow Jacket",
  },
];
function FormEstacion({ handle, estacion, error }) {
  const history = useHistory();
  const location = useLocation();

  const [isActiva, setisActiva] = useState(false);
  const [numero, setnumero] = useState("");
  const [tipo, settipo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    if (estacion) {
      setisActiva(estacion.isActiva);
      setnumero(estacion.numero);
      settipo(estacion.tipo);
      setArea(estacion.area);
      setEmpresa(estacion.empresa);
      return;
    }
    setEmpresa(location.state.Empresa);
    setArea(location.state.Area);
  }, [estacion, location]);

  const handleAgregar = async () => {
    const estacion = {
      empresa,
      area,
      tipo,
      numero,
      isActiva,
    };
    await handle(estacion);
    setisActiva(false);
    setnumero("");
    settipo("");
  };

  return (
    <Paper style={{ padding: 15 }} variant="outlined">
      <TextField
        fullWidth
        select
        label="Selecciona"
        value={tipo ? tipo : ""}
        onChange={(e) => settipo(e.target.value)}
        helperText="Seleccione tipo de estacion"
        error={error}
      >
        {estations.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Numero"
        margin="normal"
        fullWidth
        value={numero ? numero : ""}
        onChange={(e) => setnumero(e.target.value)}
        label="Numero"
        variant="outlined"
        error={error}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={isActiva ? isActiva : false}
            onChange={() => setisActiva(!isActiva)}
          />
        }
        label="Se encuentra activa la estacion"
      />
      <Grid container justify="space-between">
        <Grid>
          {error ? (
            <Typography variant="subtitle2" color="error">
              Error llenar los datos correctamente
            </Typography>
          ) : null}
        </Grid>
        <Box textAlign="end" marginTop={2}>
          <ErrorButton onClick={() => history.goBack()}>Volver</ErrorButton>
          <SuccessButton onClick={handleAgregar}>Aceptar</SuccessButton>
        </Box>
      </Grid>
    </Paper>
  );
}

export default FormEstacion;
