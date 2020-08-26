import React, { useState } from "react";
import {
  Paper,
  TextField,
  Grid,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
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
function FormEstacion() {
  const [error, seterror] = useState(false);

  return (
    <Paper style={{ padding: 15 }} variant="outlined">
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Tipo"
        margin="normal"
        fullWidth
        label="Tipo de estacion"
        variant="outlined"
      />
      <TextField
        fullWidth
        select
        label="Selecciona"
        helperText="Seleccione tipo de estacion"
      >
        {estations.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Grid container justify="space-between">
        <Grid>
          {error ? (
            <Typography>Error llenar los datos correctamente</Typography>
          ) : null}
        </Grid>
        <Grid>
          <SuccessButton>Agregar</SuccessButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FormEstacion;
