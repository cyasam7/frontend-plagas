import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "../Context/modal-context";
function EditarContactoEmpresa() {
  const { setLoading } = useModal();
  const history = useHistory();
  const { idUsuario } = useParams();
  const [error, setError] = useState(false);
  const [user, setUser] = React.useState({
    nombre: "",
    appellido: "",
    email: "",
    password: "",
    telefono: "",
    tipo_usuario: "",
    isTrabajando: false,
  });
  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/empresaContacto/usuario/${idUsuario}`);
      return data;
    }
    setLoading(true);
    initial().then((data) => {
      setUser(data.usuario);
      setLoading(false);
    });
  }, [setLoading,idUsuario]);
  const handleActualizar = async (usuario) => {
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
      const { data } = await Axios.get(`/empresaContacto/usuario/${idUsuario}`);
      await Axios.patch(`/empresaContacto/${data._id}`, usuario);
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
      <FormUsuarios error={error} usuario={user} handle={handleActualizar} />
    </>
  );
}

export default EditarContactoEmpresa;
