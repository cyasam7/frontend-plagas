import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid, TextField } from "@material-ui/core";
import CardEmpresa from "../components/CardEmpresa";
import { Add } from "@material-ui/icons";
import { SuccessButton, ErrorButton } from "../components/Buttons";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useModal } from "../Context/modal-context";
import { useUser } from "../Context/user-context";
import Swal from "sweetalert2";
function Empresas() {
  const { logOut } = useUser();
  const { setLoading } = useModal();
  const [empresas, setEmpresas] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [empresa, setEmpresa] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    async function initialEmpresas() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    setLoading(true);
    initialEmpresas()
      .then((empresas) => {
        setEmpresas(empresas);
      })
      .catch(() => {
        logOut();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading, logOut]);

  const handleSearchFilter = (cliente) => {
    return function (x) {
      return x.noCliente == cliente || !cliente;
    };
  };

  const handleEliminarEmpresa = async (empresaId) => {
    Swal.fire({
      icon: "question",
      title: "¿Deseas eliminar la empresa?",
      text: "Si tienes datos con esta empresa se perdera.",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        Swal.fire({
          title: "¿Estas seguro que deseas eliminar la empresa?",
          icon: "question",
          showCancelButton: true,
        }).then(async ({ isConfirmed }) => {
          if (isConfirmed) {
            await Axios.delete(`/empresa/${empresaId}`);
            await Swal.fire({
              title: "Se ha eliminado",
              icon: "success",
            });
            const newEmpresas = empresas.filter((emp) => emp._id !== empresaId);
            setEmpresas(newEmpresas);
          } else {
            await Swal.fire({
              title: "No se ha eliminado",
              icon: "error",
            });
          }
        });
      } else {
        Swal.fire({
          title: "No se ha eliminado",
          icon: "error",
        });
      }
    });
  };

  return (
    <Container>
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
          value={term}
          onChange={(texto) => setTerm(texto.target.value)}
        />
      </Box>
      <Grid container spacing={2}>
        {empresas.filter(handleSearchFilter(term)).map((empresa, index) => (
          <Grid key={index} item xs={12} md={6}>
            <CardEmpresa empresa={empresa} eliminar={handleEliminarEmpresa} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Empresas;
