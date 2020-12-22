import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useModal } from "../Context/modal-context";
import { useFormik } from "formik";
import { usuario } from "../Helpers/model";
function AgregarUsuarios() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      telefono: "",
      tipo_usuario: "",
      isTrabajando: false,
    },
    validationSchema: usuario,
    onSubmit: async (data) => {
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
    },
  });
  
  const history = useHistory();
  const { setLoading } = useModal();
  const [error, setError] = useState(false);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Coloca los datos del Usuario
        </Typography>
        <FormUsuarios error={error} formik={formik} goBack={handleGoBack} />
      </Container>
    </>
  );
}

export default AgregarUsuarios;
