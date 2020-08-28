import React, { useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Modal from "../components/Modal";
import Axios from "axios";
import {useHistory} from 'react-router-dom'


function AgregarUsuarios() {
  const history = useHistory();
  
  const [loading, setloading] = useState(false);
  const [complete, setcomplete] = useState(false);
  const [error, setError] = useState(false);


  const handleCrearUsuario = async data =>{
    setloading(true);
    const resp = await Axios.post("/usuarios", data);
    const status = resp.status;
    if(status === 201){
      setloading(false);
      setcomplete(true);
      setTimeout(()=>{
        setcomplete(false)
        history.goBack();
      }, 500)
    }else{
      setloading(false);
    }
  }
  const handleGoBack = () =>{
    history.goBack();
  }

  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Coloca los datos del Usuario
        </Typography>
        <FormUsuarios error={error} setError={setError} goBack={handleGoBack} handle={handleCrearUsuario} />
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
