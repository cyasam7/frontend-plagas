import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "../Context/modal-context";
import { useFormik } from "formik";
import { usuario } from "../Helpers/model";
function EditarUsuario() {
  const history = useHistory();
  const { setLoading } = useModal();
  const { idUsuario } = useParams();
  const [error, setError] = useState(false);
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
        await Axios.patch(`/usuarios/${idUsuario}`, data);
        history.goBack();
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
  });
  useEffect(() => {
    const buscarUsuario = async () => {
      const { data } = await Axios.get(`/usuarios/${idUsuario}`);
      return data;
    };
    setLoading(true);
    buscarUsuario().then((usuario) => {
      formik.initialValues.nombre = usuario.nombre;
      formik.initialValues.apellido = usuario.apellido;
      formik.initialValues.email = usuario.email;
      formik.initialValues.telefono = usuario.telefono;
      formik.initialValues.tipo_usuario = usuario.tipo_usuario;
      formik.initialValues.isTrabajando = usuario.isTrabajando;
      setLoading(false);
    });
  }, [idUsuario]);
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Editar Usuario
      </Typography>
      <FormUsuarios error={error} formik={formik} />
    </Container>
  );
}

export default EditarUsuario;
