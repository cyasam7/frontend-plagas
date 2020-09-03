import React, {useState} from "react";
import { Paper, TextField, Grid, Typography } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import {v4 as uid} from 'uuid';

function FormTrabajador({agregar}) {
  const [nombre, setnombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [email, setemail] = useState("")
  const [telefono, settelefono] = useState("")
  const [puesto, setpuesto] = useState("")

  const [error, seterror] = useState(false);

  const handleAgregar = () =>{
    if(nombre === "" || apellido === "" || email === "" || telefono === "" || puesto === ""){
      seterror(true);
      return;
    }
      const trabajador = {
        nombre,
        apellido,
        email,
        telefono,
        puesto,
      }
      agregar(trabajador);
      setnombre("");
      setapellido("");
      setemail("");
      settelefono("");
      setpuesto("");
      seterror(false)
  }



  return (
    <Paper style={{ padding: 15 }} variant="outlined">
      <Typography align="center" variant="h6">
        Llena para agregar a un trabajador
      </Typography>
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        error={error}
        value={nombre}
        onChange={(e)=> setnombre(e.target.value)}
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
        value={apellido}
        onChange={(e)=> setapellido(e.target.value)}
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
        onChange={(e)=> setemail(e.target.value)}
        placeholder="Email"
        margin="normal"
        fullWidth
        label="Email"
        variant="outlined"
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        error={error}
        onChange={(e)=> settelefono(e.target.value)}
        value={telefono}
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
        error={error}
        value={puesto}
        onChange={(e)=> setpuesto(e.target.value)}
        margin="normal"
        label="Puesto de trabajo"
        placeholder="Puesto"
        variant="outlined"
        fullWidth
      />
      <Grid container justify="space-between">
        <Grid>
          {error ? <Typography  color="error">Error llenar los datos correctamente</Typography> : null}
        </Grid>
        <Grid>
        <SuccessButton onClick={handleAgregar}>Agregar</SuccessButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FormTrabajador;
