import React, { useState } from "react";
import {
  Paper,
  TextField,
  Grid,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box
} from "@material-ui/core";
import { SuccessButton,ErrorButton } from "../components/Buttons";
import {useHistory} from 'react-router-dom'
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
  const history = useHistory();
  const [error, seterror] = useState(false);
  const [isActiva, setisActiva] = useState(false);
  const [codigo, setcodigo] = useState("");
  const [tipo, settipo] = useState("");
  return (
    <Paper style={{ padding: 15 }} variant="outlined">
      
      <TextField
        fullWidth
        select
        label="Selecciona"
        value={tipo}
        onChange={(e)=> settipo(e.target.value)}
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
        label="Codigo"
        variant="outlined"
      />
      <FormControlLabel 
        control={<Checkbox checked={isActiva} onChange={()=>setisActiva(!isActiva)}  />}
        label="Se encuentra activa la estacion"
      />
      <Grid container justify="space-between">
        <Grid>
          {error ? (
            <Typography>Error llenar los datos correctamente</Typography>
          ) : null}
        </Grid>
        <Box textAlign="end" marginTop={2}>
        <ErrorButton onClick={()=> history.goBack()}>Cancelar</ErrorButton>
        <SuccessButton>Aceptar</SuccessButton>
      </Box>
      </Grid>
    </Paper>
  );
}

export default FormEstacion;
