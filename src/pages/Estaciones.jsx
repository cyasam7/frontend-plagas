import React, { useState, useEffect } from "react";
import { TextField, Grid, Typography, MenuItem } from "@material-ui/core";
import { SuccessButton, ErrorButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import CardEstacion from "../components/CardEstacion";
import Axios from "axios";
import Modal from "../components/Modal";
import { useModal } from "../Context/modal-context";

function Estaciones() {
  const { setLoading } = useModal();
  const [Clientes, setClientes] = useState([]);
  const [Areas, setAreas] = useState([]);
  const [Estaciones, setEstaciones] = useState([]);
  const [Estacion, setEstacion] = useState("");
  const [buscar, setBuscar] = useState(false);
  const [Cliente, setCliente] = useState("");
  const [Area, setArea] = useState("");
  const [openModal, setopenModal] = useState(false);

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
    setLoading(true);
    const { data } = await Axios.get(
      `/estacion?empresa=${Cliente}&area=${Area}`
    );
    setBuscar(true);
    setEstaciones(data);
    setLoading(false);
  };
  const handleOpenModal = (id) => {
    setopenModal(true);
    setEstacion(id);
  };
  const handleDeleteEstacion = async () => {
    try {
      await Axios.delete(`/estacion/${Estacion}`);
      const newAreas = Estaciones.filter(
        (estacion) => estacion._id !== Estacion
      );
      setEstaciones(newAreas);
    } catch (error) {
    } finally {
      setLoading(false);
      setopenModal(false);
    }
  };
  return (
    <>
      <Modal abierto={openModal} titulo="¿Seguro que desea Eliminar?">
        <>
          <SuccessButton onClick={handleDeleteEstacion}>Aceptar</SuccessButton>
          <ErrorButton onClick={() => setopenModal(false)}>
            Cancelar
          </ErrorButton>
        </>
      </Modal>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Estaciones
      </Typography>
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
          <Link to={`/QRList/${Cliente}/${Area}`}>
            <SuccessButton fullWidth>Generar PDF de QR's</SuccessButton>
          </Link>
          <Typography align="center" variant="h5" gutterBottom>
            Lista de estaciones
          </Typography>
          <Grid container spacing={5}>
            {Estaciones.length > 0 ? (
              <>
                {Estaciones.map((estacion, index) => (
                  <Grid key={index} item md={5}>
                    <CardEstacion
                      handle={handleOpenModal}
                      estacion={estacion}
                    />
                  </Grid>
                ))}
              </>
            ) : (
              <Grid container justify="center" style={{marginTop: 15}}>
                <Grid item>
                  <Typography variant="subtitle2">
                    No hay ninguna estacion en esta area
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </>
      ) : null}
    </>
  );
}

export default Estaciones;
