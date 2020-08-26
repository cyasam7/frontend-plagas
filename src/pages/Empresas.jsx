import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
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
      <Grid container spacing={2} > 
        <Grid item xd={12} md={6}>
          <CardEmpresa/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Empresas;
