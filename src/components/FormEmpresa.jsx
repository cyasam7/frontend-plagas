import React, { useState, useEffect } from "react";
import { Paper, TextField, Box, Typography } from "@material-ui/core";
import { ErrorButton, SuccessButton } from "../components/Buttons";
import { useHistory } from "react-router-dom";
function FormEmpresas({ error, empresa, handle }) {
  const history = useHistory();
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    if (empresa !== undefined) {
      setNombre(empresa.nombre);
      setCodigo(empresa.noCliente);
    }
  }, [empresa]);

  const handleAgregarEmpresa = () => {
    const empresa = {
      nombre,
      noCliente: codigo,
    };
    handle(empresa);
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
          error={error}
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
          error={error}
          value={codigo ? codigo : ""}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Codigo"
          margin="normal"
          fullWidth
          label="Codigo"
          variant="outlined"
          helperText="Tiene que ser el mismo codigo del sistema que se usa"
        />
        {error ? (
          <Typography variant="subtitle2" color="error">
            Revisa bien los datos o codigo repetido
          </Typography>
        ) : null}
      </Paper>
      <Box textAlign="end" marginTop={2}>
        <ErrorButton onClick={() => history.goBack()}>Volver</ErrorButton>
        <SuccessButton onClick={handleAgregarEmpresa}>Aceptar</SuccessButton>
      </Box>
    </>
  );
}

export default FormEmpresas;
