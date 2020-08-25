import React, { useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Axios from "axios";
import Modal from "../components/Modal";
import { useHistory } from "react-router-dom";

const API = `http://localhost:4000/usuarios`;

function AgregarUsuarios() {
  const router = useHistory();
  const [loading, setloading] = useState(false);
  const [complete, setcomplete] = useState(false);
  
  /* const handleRequestAdd = (e) => {
    e.preventDefault();
    setloading(true);
    Axios.post(API, {
      nombre: "Alexander",
      apellido: "Serrano",
      email: "asamsdadsasa9@gmail.com",
      password: "cyasam86",
      telefono: "6183240572",
      tipo_usuario: "Trabajador",
      isTrabajando: true,
    })
      .then(({ data }) => {
        setloading(false);
        setcomplete(true);
        setTimeout(() => {
          setcomplete(false);
          router.push("/usuarios");
        }, 500);
      })
      .catch((err) => {});
  }; */

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
