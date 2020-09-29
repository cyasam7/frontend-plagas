import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Modal from "../components/Modal";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "../Context/modal-context";

function EditarUsuario() {
  const { setLoading } = useModal();
  const history = useHistory();
  const {idUsuario} = useParams();

  const [user, setUser] = React.useState({
    nombre:"",
    appellido: "",
    email: "",
    password: "",
    telefono: "",
    tipo_usuario:"",
    isTrabajando: false
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const buscarUsuario = async () => {
      const { data } = await Axios.get(`/usuarios/${idUsuario}`);
      return data;
    };
    setLoading(true)
    buscarUsuario()
    .then((usuario) => {
      setUser(usuario);
      setLoading(false);
    });
  }, [idUsuario]);

  const handleEditar = async (data) => {
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
      setError(true)
    }finally{
      setLoading(false)
    }
  };
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Editar Usuario
      </Typography>
      <FormUsuarios error={error} handle={handleEditar} usuario={user} />
    </Container>
  );
}

export default EditarUsuario;
