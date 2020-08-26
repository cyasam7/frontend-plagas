import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
function EditarUsuario() {

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Editar Usuario
      </Typography>
      <FormUsuarios/>
    </Container>
  );
}

export default EditarUsuario;
