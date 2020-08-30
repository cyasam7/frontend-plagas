import React, { useState } from "react";
import { Paper, TextField, Grid, Box, Typography } from "@material-ui/core";
import { ErrorButton, SuccessButton } from "../components/Buttons";
import FormTrabajador from "./FormTrabajador";
import CardTrabajadores from "./CardTrabajadores";
import { useHistory } from "react-router-dom";
import Axios from "axios";
function FormEmpresas() {
  const history = useHistory();
  const [trabajadores, setTrabajadores] = useState([]);

  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");

  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const handleAgregarEmpresa = () => {
    setLoading(true);
    if (nombre === "" || codigo === "") {
      setError(true);
      return;
    }
    const empresa = {
      nombre,
      noCliente: codigo,
      trabajadores,
    };
    Axios.post("/empresa", empresa)
    .then(({data})=>{
      setLoading(false);
      setTimeout(()=>{
        history.push("/empresas");
      }, 500)
    })
    .catch((err)=>{
        setError(true);
    })
  };

  const handleAddTrabajador = (trabajador) => {
    const newTrabajadores = [...trabajadores, trabajador];
    setTrabajadores(newTrabajadores);
  };
  const handleFilterTrabajador = (id) => {
    const trabajadoresAct = [...trabajadores];
    const nuevoTraba = trabajadoresAct.filter((t) => t.id !== id);
    setTrabajadores(nuevoTraba);
  };
  return (
    <>
      <Paper style={{ padding: 15 }} variant="outlined">
        <Typography variant="h5" align="center" gutterBottom>
          Datos de la empresa
        </Typography>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          error={Error}
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}
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
          error={Error}
          value={codigo}
          onChange={(e)=> setCodigo(e.target.value)}
          placeholder="Codigo"
          margin="normal"
          fullWidth
          label="Codigo"
          variant="outlined"
          helperText="Tiene que ser el mismo codigo del sistema que se usa"
        />
        <FormTrabajador agregar={handleAddTrabajador} />
      </Paper>
      {trabajadores >= 0 ? (
        <Box>
          <Typography variant="h5" align="center" gutterBottom>
            No hay trabajadores
          </Typography>
          <Typography align="center" gutterBottom>
            - Agrega a un Trabajador -
          </Typography>
        </Box>
      ) : (
        <Typography variant="h5" align="center" gutterBottom>
          Trabajadores de la empresa
        </Typography>
      )}
      <Grid container spacing={2}>
        {trabajadores.map((data, index) => (
          <Grid key={data.id} item md={4}>
            <CardTrabajadores
              key={data.id}
              trabajador={data}
              eliminar={handleFilterTrabajador}
            />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="end" marginTop={2}>
        <ErrorButton onClick={() => history.goBack()}>Volver</ErrorButton>
        <SuccessButton onClick={handleAgregarEmpresa}>Aceptar</SuccessButton>
      </Box>
    </>
  );
}

export default FormEmpresas;
