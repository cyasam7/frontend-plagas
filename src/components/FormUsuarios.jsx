import React, { useState, useEffect } from "react";
import {
  Paper,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@material-ui/core";
import { WarningButton, SuccessButton } from "../components/Buttons";
import {useHistory} from 'react-router-dom'
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

function FormUsuarios({ handle,error, setError, goBack, usuario }) {
  const history = useHistory();

  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [telefono, settelefono] = useState("");
  const [tipo_usuario, setTipo] = useState("");
  const [isTrabajando, setisTrabajando] = useState(false);
  
  useEffect(()=>{
    if(usuario){
      setnombre(usuario.nombre);
      setapellido(usuario.apellido);
      setemail(usuario.email);
      setpassword(usuario.password);
      settelefono(usuario.telefono);
      setTipo(usuario.tipo_usuario);
      setisTrabajando(usuario.isTrabajando)
    }
  },[usuario])

  const handleAgregar = () => {
    if (
      nombre === "" ||
      apellido === "" ||
      email === "" ||
      password === "" ||
      telefono === ""
    ) {
      setError(true);
      return;
    }
    const usuario = {
      nombre,
      apellido,
      email,
      password,
      tipo_usuario,
      telefono,
      isTrabajando,
    };
    handle(usuario)
  };
  return (
    <Paper style={{ padding: 15 }} variant="outlined">
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        error={error}
        value={nombre}
        onChange={(e) => setnombre(e.target.value)}
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
        error={error}
        value={apellido ? apellido : ""}
        onChange={(e) => setapellido(e.target.value)}
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
        error={error}
        value={email}
        onChange={(e) => setemail(e.target.value)}
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
        error={error}
        value={password}
        onChange={(e) => setpassword(e.target.value)}
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
        error={error}
        value={telefono}
        onChange={(e) => settelefono(e.target.value)}
        margin="normal"
        fullWidth
        placeholder="Telefono"
        label="Telefono"
        variant="outlined"
      />
      <TextField
        error={error}
        fullWidth
        select
        value={tipo_usuario}
        onChange={(e) => setTipo(e.target.value)}
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
          <Checkbox
            checked={isTrabajando}
            onChange={() => setisTrabajando(!isTrabajando)}
          />
        }
        label="¿Trabaja actualmente?"
      />
      <Grid container justify="space-between" margintop={2}>
        <Grid>
          {error ? (
            <Typography variant="subtitle2" color="error">
              Revisa bien los datos
            </Typography>
          ) : null}
        </Grid>
        <Grid>
          <WarningButton onClick={()=> history.goBack()}>Volver</WarningButton>
          <SuccessButton onClick={handleAgregar}>Guardar</SuccessButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FormUsuarios;
