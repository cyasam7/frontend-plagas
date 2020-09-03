import React, {useState, useEffect} from "react";
import {Typography} from '@material-ui/core';
import FormEstacion from '../components/FormEstacion';
import {useParams, useHistory} from 'react-router-dom';
import Axios from "axios";
function EditarEstacion() {
    const params = useParams();
    const history = useHistory();
    const [Estacion, setEstacion] = useState({});

    useEffect(() => {
        async function initial(){
            const {data} = await Axios.get(`/estacion/${params.idEstacion}`);
            return data
        }
        initial()
        .then(estacion =>{
            setEstacion(estacion);
        })
    }, [params])

    const handleActualizarEstacion = (data) =>{
       Axios.patch(`/estacion/${params.idEstacion}`,data) 
       .then(()=>{
        history.goBack();
       })
    }
  return (
    <>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Editar la estacion
      </Typography>
      <FormEstacion handle={handleActualizarEstacion} estacion={Estacion}/>
    </>
  );
}

export default EditarEstacion;
