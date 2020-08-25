import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { ErrorButton, SuccessButton } from "../components/Buttons";
import FormTrabajador from "./FormTrabajador";

function FormEmpresas({ }) {
  const [num, setnum] = useState([1])

  return (
    <Paper style={{ padding: 15 }} variant="outlined">
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Nombre"
        margin="normal"
        fullWidth
        label="Nombre de la Empresa"
        variant="outlined"
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Codigo"
        margin="normal"
        fullWidth
        label="Codigo"
        variant="outlined"
        helperText="Tiene que ser el mismo codigo del sistema que se usa"
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
      <Typography variant="h5" style={{marginBottom:7}}>Trabajador</Typography>
      {num.map(()=>(
          <FormTrabajador />
      ))}
      <Box textAlign="end" marginTop={2}>
        <Button onClick={()=>setnum(num.concat(1))} variant="outlined">Agregar Trabajador</Button>
        <SuccessButton>Aceptar</SuccessButton>
        <ErrorButton>Volver</ErrorButton>
      </Box>
    </Paper>
  );
}

export default FormEmpresas;
