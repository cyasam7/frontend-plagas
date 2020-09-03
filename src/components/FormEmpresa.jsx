import React, { useState, useEffect } from "react";
import { Paper, TextField, Grid, Box, Typography } from "@material-ui/core";
import { ErrorButton, SuccessButton } from "../components/Buttons";
import FormTrabajador from "./FormTrabajador";
import CardTrabajadores from "./CardTrabajadores";
import { useHistory } from "react-router-dom";
function FormEmpresas({ empresa, handle }) {
  const history = useHistory();

  const [trabajadores, setTrabajadores] = useState([]);

  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");

  const [Error, setError] = useState(false);

  useEffect(() => {
    if (empresa !== undefined) {
      setNombre(empresa.nombre);
      setCodigo(empresa.noCliente);
      setTrabajadores(empresa.trabajadores);
    }
  }, [empresa]);

  const handleAgregarEmpresa = () => {
    if (nombre === "" || codigo === "") {
      setError(true);
      return;
    }
    const empresa = {
      nombre,
      noCliente: codigo,
      trabajadores,
    };
    handle(empresa)
  };

  const handleAddTrabajador = (trabajador) => {
    const newTrabajadores = [...trabajadores, trabajador];
    setTrabajadores(newTrabajadores);
  };
  const handleFilterTrabajador = (email) => {
    const trabajadoresAct = [...trabajadores];
    const nuevoTraba = trabajadoresAct.filter((t) => t.email !== email);
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
          value={nombre ? nombre : ""}
          onChange={(e) => setNombre(e.target.value)}
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
          value={codigo ? codigo : ""}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Codigo"
          margin="normal"
          fullWidth
          label="Codigo"
          variant="outlined"
          helperText="Tiene que ser el mismo codigo del sistema que se usa"
        />
        <FormTrabajador agregar={handleAddTrabajador} />
      </Paper>
      {trabajadores.length ? (
        <>
          <Typography variant="h5" align="center" gutterBottom>
            Trabajadores de la empresa
          </Typography>
          <Grid container spacing={1}>
            {trabajadores.map((data, index) => (
              <Grid key={index} item xs={12} md={4}>
                <CardTrabajadores
                  trabajador={data}
                  eliminar={handleFilterTrabajador}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Box>
          <Typography variant="h5" align="center" gutterBottom>
            No hay trabajadores
          </Typography>
          <Typography align="center" gutterBottom>
            - Agrega a un Trabajador -
          </Typography>
        </Box>
      )}

      <Box textAlign="end" marginTop={2}>
        <ErrorButton onClick={() => history.goBack()}>Volver</ErrorButton>
        <SuccessButton onClick={handleAgregarEmpresa}>Aceptar</SuccessButton>
      </Box>
    </>
  );
}

export default FormEmpresas;
