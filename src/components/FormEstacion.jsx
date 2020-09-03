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
    value: "Cebado",
    label: "Cebado",
  },
  {
    value: "Terrestre",
    label: "Terrestre",
  },
  {
    value: "Insectos",
    label: "Insectos",
  },
];
function FormEstacion({ handle, estacion }) {
  const history = useHistory();
  const location = useLocation();

  const [error, seterror] = useState(false);
  const [isActiva, setisActiva] = useState(false);
  const [codigo, setcodigo] = useState("");
  const [tipo, settipo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [area, setArea] = useState("");
  useEffect(() => {
    if (estacion) {
      setisActiva(estacion.isActiva);
      setcodigo(estacion.codigo);
      settipo(estacion.tipo);
      setArea(estacion.area);
      setEmpresa(estacion.empresa);
      return;
    }
    setEmpresa(location.state.Empresa);
    setArea(location.state.Area);
  }, [estacion, location]);
  const handleAgregar = () => {
    if (codigo === "" || tipo === "") {
      seterror(true);
      return;
    }
    const estacion = {
      empresa,
      area,
      tipo,
      codigo,
      isActiva,
    };

    handle(estacion);
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
        placeholder="Codigo"
        margin="normal"
        fullWidth
        value={codigo ? codigo : ""}
        onChange={(e) => setcodigo(e.target.value)}
        label="Codigo"
        variant="outlined"
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
            <Typography>Error llenar los datos correctamente</Typography>
          ) : null}
        </Grid>
        <Box textAlign="end" marginTop={2}>
          <ErrorButton onClick={() => history.goBack()}>Cancelar</ErrorButton>
          <SuccessButton onClick={handleAgregar}>Aceptar</SuccessButton>
        </Box>
      </Grid>
    </Paper>
  );
}

export default FormEstacion;
