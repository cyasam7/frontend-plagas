import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import CardEmpresa from "../components/CardEmpresa";
import { Add } from "@material-ui/icons";
import { SuccessButton, ErrorButton } from "../components/Buttons";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import Axios from "axios";

function Empresas() {
  const [empresas, setEmpresas] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [empresa, setEmpresa] = useState("");
  useEffect(() => {
    async function initialEmpresas() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    initialEmpresas().then((empresas) => {
      setEmpresas(empresas);
    });
  }, []);

  const handleEliminarEmpresa = () => {
    setOpenModal(true);
    setLoading(true);
    Axios.delete(`/empresa/${empresa}`)
      .then((data) => {
        const newEmpresas = empresas.filter((emp)=>( emp._id !== empresa))
        setEmpresas(newEmpresas);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModal(false);
        setLoading(false);
      });
  };
  const handleOpenModalDelete = (id) =>{
    setOpenModal(true);
    setEmpresa(id);
  }
  return (
    <Container>
      <Modal abierto={openModal} titulo="¿Seguro que desea Eliminar?">
        {loading ? (
          <CircularProgress value={75} />
        ) : (
          <>
            <SuccessButton onClick={handleEliminarEmpresa}>
              Aceptar
            </SuccessButton>
            <ErrorButton onClick={() => setOpenModal(false)}>
              Cancelar
            </ErrorButton>
          </>
        )}
      </Modal>
      <Box alignItems="center">
        <Typography align="center" variant="h4">
          Lista de Empresas
        </Typography>
        <Box textAlign="end">
          <Link to="/empresas/agregar">
            <SuccessButton startIcon={<Add />}>Agregar</SuccessButton>
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
      <Grid container spacing={2}>
        <Grid item xd={12} md={6}>
          {empresas.map((empresa, index) => (
            <CardEmpresa
              key={index}
              empresa={empresa}
              eliminar={handleOpenModalDelete}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Empresas;
