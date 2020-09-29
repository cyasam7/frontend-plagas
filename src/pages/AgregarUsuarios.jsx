import React, { useState } from "react";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Modal from "../components/Modal";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import {useModal} from '../Context/modal-context';
function AgregarUsuarios() {
  const history = useHistory();
  const {setLoading} = useModal();
  const [error, setError] = useState(false);

  const handleCrearUsuario = async (data) => {
    setLoading(true);
    if (
      data.nombre === "" ||
      data.apellido === "" ||
      data.email === "" ||
      data.password === "" ||
      data.telefono === ""
    ) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      await Axios.post("/usuarios", data);
      history.goBack();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Coloca los datos del Usuario
        </Typography>
        <FormUsuarios
          error={error}
          goBack={handleGoBack}
          handle={handleCrearUsuario}
        />
      </Container>
    </>
  );
}

export default AgregarUsuarios;
