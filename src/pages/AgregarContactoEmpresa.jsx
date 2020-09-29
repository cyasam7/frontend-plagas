import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "../Context/modal-context";
function AgregarContactoEmpresa() {
  const { setLoading } = useModal();
  const params = useParams();
  const history = useHistory();
  const [error, setError] = useState(false);
  const handleAgregarContactoEmpresa = async (usuario) => {
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
    setLoading(true);
    usuario.isTrabajando = false;
    usuario.tipo_usuario = "Cliente";
    try {
      const { data } = await Axios.post("/usuarios", usuario);
      const ContactoEmpresa = {
        usuario: data._id,
        empresa: params.idEmpresa,
      };
      await Axios.post("empresaContacto", ContactoEmpresa);
      history.goBack();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Typography variant="h4" align="center">
        Contacto
      </Typography>
      <FormUsuarios error={error} handle={handleAgregarContactoEmpresa} />
    </>
  );
}

export default AgregarContactoEmpresa;
