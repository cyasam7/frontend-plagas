import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "../Context/modal-context";
import { useFormik } from "formik";
import { usuario } from "../Helpers/model";
function EditarContactoEmpresa() {
  const { setLoading } = useModal();
  const history = useHistory();
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
    onSubmit: async (usuario) => {
      setLoading(true);
      if (
        usuario.nombre === "" ||
        usuario.apellido === "" ||
        usuario.email === "" ||
        usuario.password === "" ||
        usuario.telefono === ""
      ) {
        setError(true);
        setLoading(false);
        return;
      }
      usuario.isTrabajando = false;
      usuario.tipo_usuario = "Cliente";
      try {
        const { data } = await Axios.get(
          `/empresaContacto/usuario/${idUsuario}`
        );
        await Axios.patch(`/empresaContacto/${data._id}`, usuario);
        history.goBack();
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
  });
  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/empresaContacto/usuario/${idUsuario}`);
      return data;
    }
    setLoading(true);
    initial().then((data) => {
      formik.initialValues.nombre = data.usuario.nombre;
      formik.initialValues.apellido = data.usuario.apellido;
      formik.initialValues.email = data.usuario.email;
      formik.initialValues.telefono = data.usuario.telefono;
      formik.initialValues.tipo_usuario = data.usuario.tipo_usuario;
      formik.initialValues.isTrabajando = data.usuario.isTrabajando;
      setLoading(false);
    });
  }, [setLoading, idUsuario]);

  return (
    <>
      <Typography variant="h4" align="center">
        Contacto
      </Typography>
      <FormUsuarios error={error} formik={formik} />
    </>
  );
}

export default EditarContactoEmpresa;
