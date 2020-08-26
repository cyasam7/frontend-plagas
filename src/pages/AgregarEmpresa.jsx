import React from "react";
import { Container,Typography } from "@material-ui/core";
import FormEmpresas from "../components/FormEmpresa";
function AgregarEmpresa() {
  return (
    <Container>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Agrega a tu empresa o cliente
      </Typography>
      <FormEmpresas />
    </Container>
  );
}

export default AgregarEmpresa;
