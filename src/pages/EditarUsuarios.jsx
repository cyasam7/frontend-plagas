import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Modal from "../components/Modal";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
function EditarUsuario() {
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
  const [loading, setloading] = useState(false);
  const [complete, setcomplete] = useState(false);

  useEffect(() => {
    const buscarUsuario = async () => {
      const { data } = await Axios.get(`/usuarios/${idUsuario}`);
      return data;
    };
    buscarUsuario()
    .then((usuario) => {
      setUser(usuario);
    });
  }, [idUsuario]);
  const handleEditar = async (data) => {
    setloading(true);
    const resp = await Axios.patch(`/usuarios/${idUsuario}`, data);
    const status = resp.status;
    console.log(status);
    if(status === 200){
      setloading(false);
      setcomplete(true);
      setTimeout(()=>{
        setcomplete(false)
        history.goBack();
      }, 500)
    }else{
      setloading(false);
    }
  };
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Editar Usuario
      </Typography>
      <FormUsuarios handle={handleEditar} usuario={user} />
      <Modal abierto={loading} titulo={"Cargando"}>
        <CircularProgress value={75} />
      </Modal>
      <Modal abierto={complete} titulo="Exito">
        <Typography variant="body1">Se actualizo correctamente</Typography>
      </Modal>
    </Container>
  );
}

export default EditarUsuario;
