import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
} from "@material-ui/core";
import CardEmpresa from "../components/CardEmpresa";
import { Add } from "@material-ui/icons";
import {SuccessButton} from '../components/Buttons'
import { Link } from "react-router-dom";
function Empresas() {
  return (
    <Container>
      <Box alignItems="center">
        <Typography align="center" variant="h4">
          Lista de Empresas
        </Typography>
        <Box textAlign="end">
          <Link to="/empresas/agregar">
          <SuccessButton startIcon={<Add />}>
            Agregar
          </SuccessButton>
          </Link>
        </Box>
        <TextField
          margin="normal"
          variant="outlined"
          helperText="Busca el codigo de empresa que tienen en el otro sistema"
          placeholder="Codigo"
          label="Busca por codigo de Empresa"
          fullWidth
        />
      </Box>
      <Box>
        <CardEmpresa />
        <CardEmpresa />
        <CardEmpresa />
        <CardEmpresa />
      </Box>
    </Container>
  );
}

export default Empresas;
