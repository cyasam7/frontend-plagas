import React from "react";
import {
  Paper,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from "@material-ui/core";
const usuarios = [
  {
    value: "Gerente",
    label: "Gerente",
  },
  {
    value: "Trabajador",
    label: "Trabajador",
  },
  {
    value: "Administrador",
    label: "Administrador",
  },
];

function FormUsuarios() {
  

  return (
    <Paper style={{ padding: 15 }} variant="outlined">
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
        label="Email"
        placeholder="Email"
        variant="outlined"
        fullWidth
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        fullWidth
        placeholder="Contraseña"
        label="Contraseña"
        type="password"
        variant="outlined"
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        fullWidth
        placeholder="Telefono"
        label="Telefono"
        variant="outlined"
      />
      <TextField
        fullWidth
        select
        label="Selecciona"
        helperText="Selecciona tipo de Usuario"
      >
        {usuarios.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormControlLabel
        control={
          <Checkbox/*  checked={User.isTrabajando} onChange={handleChangeChecked}  *//>
        }
        label="¿Trabaja actualmente?"
      />
      <Box align="center" marginTop={2}>
        <Button >Agregar</Button>
        <Button >Volver</Button>
      </Box>
    </Paper>
  );
}

export default FormUsuarios;
