import React, { useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Modal from "../components/Modal";


const API = `http://localhost:4000/usuarios`;

function AgregarUsuarios() {
  const [loading, setloading] = useState(false);
  const [complete, setcomplete] = useState(false);
  

  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Coloca los datos del Usuario
        </Typography>
        <FormUsuarios />
      
      </Container>
      <Modal abierto={loading} titulo={"Cargando"}>
        <CircularProgress value={75} />
      </Modal>
      <Modal abierto={complete} titulo="Exito">
        <Typography variant="body1">Se agrego correctamente</Typography>
      </Modal>
    </>
  );
}

export default AgregarUsuarios;
