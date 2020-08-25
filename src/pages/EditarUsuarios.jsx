import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import FormUsuarios from "../components/FormUsuarios";
import Axios from "axios";

function EditarUsuario() {
    const {idUsuario} = useParams();
    const [usuario, setUser] = useState({});
    useEffect(() => {
        async function initUser(){
            Axios.get(`http://localhost:4000/usuarios/${idUsuario}`)
            .then(({data})=>{
                setUser(data);
                console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        initUser();
    }, [])
  return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Editar Usuario
        </Typography>
        <FormUsuarios usuario={usuario} />
      </Container>
  );
}


export default EditarUsuario;
