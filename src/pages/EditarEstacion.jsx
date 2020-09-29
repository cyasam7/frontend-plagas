import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import FormEstacion from "../components/FormEstacion";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import { useModal } from "../Context/modal-context";

function EditarEstacion() {
  const { setLoading } = useModal();
  const params = useParams();
  const history = useHistory();
  const [Estacion, setEstacion] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/estacion/${params.idEstacion}`);
      return data;
    }
    setLoading(true);
    initial().then((estacion) => {
      setEstacion(estacion);
      setLoading(false);
    });
  }, [params]);

  const handleActualizarEstacion = async (data) => {
    setLoading(true);
    if (data.numero === "" || data.tipo === "") {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      await Axios.patch(`/estacion/${params.idEstacion}`, data);
      history.goBack();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Editar la estacion
      </Typography>
      <FormEstacion
        error={error}
        handle={handleActualizarEstacion}
        estacion={Estacion}
      />
    </>
  );
}

export default EditarEstacion;
