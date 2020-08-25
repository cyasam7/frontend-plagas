import React from "react";
import {
  Paper,
  TextField,
} from "@material-ui/core";

function FormTrabajador() {
  return (
    <Paper style={{ margin:15, padding: 15 }} variant="outlined">
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Nombre"
        margin="normal"
        fullWidth
        label="Nombre"
        variant="outlined"
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Apellido"
        margin="normal"
        fullWidth
        label="Apellido"
        variant="outlined"
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        label="Telefono"
        placeholder="Telefono"
        variant="outlined"
        fullWidth
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        label="Puesto de trabajo"
        placeholder="Puesto"
        variant="outlined"
        fullWidth
      />
    </Paper>
  );
}

export default FormTrabajador;
