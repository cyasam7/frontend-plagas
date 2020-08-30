import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  Typography,
  MenuItem,
} from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import CardEstacion from "../components/CardEstacion";
import { Link } from "react-router-dom";
import Axios from "axios";
function Estaciones() {
  const [Clientes, setClientes] = useState([]);
  const [Areas, setAreas] = useState([]);
  const [Estaciones, setEstaciones] = useState([]);
  const [buscar, setBuscar] = useState(false);

  const [Cliente, setCliente] = useState("");
  const [Area, setArea] = useState("");

  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    initial().then((resp) => {
      setClientes(resp);
    });
  }, []);

  const handleListAreas = () => {
    if (Cliente === "") {
      alert("Un espacio vacio");
      return;
    }
    Axios.get(`/area?empresa=${Cliente}`).then(({ data }) => {
      setAreas(data);
    });
  };
  const handleListEstaciones = async () => {
    if (Cliente === "" || Area === "") {
      alert("Espacios Vacios");
      return;
    }
    const { data } = await Axios.get(
      `/estacion?empresa=${Cliente}&area=${Area}`
    );
    setBuscar(true);
    setEstaciones(data);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            select
            label="Empresa"
            helperText="Selecciona el nombre de la empresa o cliente"
            value={Cliente}
            onChange={(e) => setCliente(e.target.value)}
          >
            {Clientes.map((option, index) => (
              <MenuItem key={index} value={option._id}>
                {option.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <SuccessButton fullWidth onClick={handleListAreas}>
            Aceptar
          </SuccessButton>
        </Grid>
      </Grid>
      {Areas.length > 0 ? (
        <Grid container spacing={1}>
          <Grid item xs={12} md={10}>
            <TextField
              fullWidth
              select
              label="Area"
              helperText="Selecciona el nombre del area para ver lista de estaciones"
              value={Area}
              onChange={(e) => setArea(e.target.value)}
            >
              {Areas.map((option, index) => (
                <MenuItem key={index} value={option._id}>
                  {option.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <SuccessButton onClick={handleListEstaciones} fullWidth>
              Aceptar
            </SuccessButton>
          </Grid>
        </Grid>
      ) : null}

      {buscar ? (
        <>
          <Link
            to={{
              pathname: "/estaciones/agregar",
              state: { Empresa: Cliente, Area },
            }}
          >
            <SuccessButton fullWidth>Agregar</SuccessButton>
          </Link>
          <Typography align="center" variant="h5" gutterBottom>
            Lista de estaciones
          </Typography>
          <Grid container spacing={1}>
            {Estaciones.map((estacion,index) => (
              <Grid key={index} item md={4}>
                <CardEstacion estacion={estacion} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
    </>
  );
}

export default Estaciones;
