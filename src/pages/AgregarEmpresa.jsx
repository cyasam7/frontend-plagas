import React from "react";
import { Container,Typography } from "@material-ui/core";
import FormEmpresas from "../components/FormEmpresa";
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
function AgregarEmpresa() {
  const history = useHistory();

  const handleAgregarEmpresa = (empresa) =>{
    console.log(empresa);
    Axios.post("/empresa", empresa)
    .then(({ data }) => {
      setTimeout(() => {
        history.push("/empresas");
      }, 500);
    })
  }
  return (
    <Container>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Agrega a tu empresa o cliente
      </Typography>
      <FormEmpresas handle={handleAgregarEmpresa} />
    </Container>
  );
}

export default AgregarEmpresa;
